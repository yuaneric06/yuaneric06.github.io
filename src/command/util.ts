import { FSNode, completePath, longestCommonPrefix } from './fileSystem';
import parseAsCommandHistory from './parser';

type Commands = Readonly<{
    [key: string]: (args: ReadonlyArray<string>) => string;
}>;

const key = 'term-command-hist';

const commandsHistory = () => {return parseAsCommandHistory(localStorage.getItem(key))};

const isCommandExists = ({
    commands,
    command,
}: Readonly<{
    commands: Commands;
    command: string;
}>) =>
    {return Object.keys(commands).find((comm) => {return comm === command.trim().split(' ')[0]}) !==
    undefined};


const commandCompletion = ({
    commands,
    command,
    setCommand,
    setHistory,
    fs,
    cwd,
}: Readonly<{
    commands: Commands;
    command: string;
    setCommand: (command: string) => void;
    setHistory: (output: string, commands: Commands, cwd: ReadonlyArray<string>) => void;
    fs?: FSNode;
    cwd?: ReadonlyArray<string>;
}>) => {
    if (!command) return;
    command = command.trim();

    const parts = command.split(' ');

    if (parts.length === 1) {
        const matches = Object.keys(commands).filter((entry) =>
            {return entry.startsWith(command)},
        );
        if (matches.length === 1) {
            setCommand(matches[0] ?? command);
        } else if (matches.length > 1) {
            const commonPrefix = longestCommonPrefix(matches);
            if (commonPrefix.length > command.length) {
                setCommand(commonPrefix);
            } else {
                setHistory(matches.sort().join('  '), commands, cwd ?? []);
            }
        }
        return;
    }

    if (fs && cwd) {
        const [cmd, ...rest] = parts;
        const partial = rest.join(' ');
        const matches = completePath(fs, cwd, partial);
        
        console.log("trying to complete ", partial);
        console.log("matches: ", matches);
        if (matches.length === 1) {
            setCommand(`${cmd} ${matches[0]}`);
        } else if (matches.length > 1) {
            const commonPrefix = longestCommonPrefix(matches);
            if (commonPrefix.length > partial.length) {
                setCommand(`${cmd} ${commonPrefix}`);
            } else {
                // no progress possible — this is where a real double-tab lists matches
                setHistory(matches.join('  '), commands, cwd ?? []);
            }
        }
    }
};

const shell = async ({
    commands,
    command,
    setHistory,
    clearHistory,
    setCommand,
    cwd,
}: Readonly<{
    commands: Commands;
    command: string;
    setHistory: (output: string, commands: Commands, cwd: ReadonlyArray<string>) => void;
    clearHistory: () => void;
    setCommand: (command: string) => void;
    cwd: ReadonlyArray<string>;
}>) => {
    command = command.trim();
    const [arg, ...rest] = command.split(' ');
    if (command === 'clearhist') {
        clearHistory();
    }

    console.log("command: ", command, " arg: ", arg, " rest: ", rest);
    if (command === 'clear') {
        clearHistory();
    } else if (command === '') {
        console.log("set empty command");
        setHistory('', commands, cwd ?? []);
    } else if (
        !isCommandExists({
            command,
            commands,
        })
    ) {
        setHistory(
            `shell: command not found: ${arg}. Try 'help' to get started.`,
            commands,
            cwd ?? []
        );
    } else {
        const func = arg ? commands[arg] : undefined;
        if (!func) {
            throw new Error(
                `there is no callable function for argument of ${arg}`,
            );
        }
        setHistory(func(rest), commands, cwd ?? []);
    }
    setCommand('');
};

export type { Commands };

export { isCommandExists, commandCompletion, shell, commandsHistory, key };
