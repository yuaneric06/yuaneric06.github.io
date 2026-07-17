import parse from 'parse-dont-validate';
import * as React from 'react';
import {
    Commands,
    commandCompletion,
    isCommandExists,
    shell,
} from '../../command/util';
import { CommandsHistory } from '../../hook/useCommandHistory';
import { AppContext } from '../../ReactUnixTerminal';
import Prompt from './Prompt';
import { FSNode } from '../../command/fileSystem';

const Input = ({
    inputRef,
    containerRef,
    command,
    commandsHistory,
    commands,
    lastCommandIndex,
    setCommand,
    setHistory,
    setLastCommandIndex,
    clearHistory,
    name,
    user,
    fs,
    cwd,
}: Readonly<{
    inputRef: React.RefObject<HTMLInputElement>;
    containerRef: React.RefObject<HTMLDivElement>;
    commandsHistory: () => CommandsHistory;
    commands: Commands;
    command: string;
    lastCommandIndex: number;
    setHistory: (output: string, commands: Commands, cwd: ReadonlyArray<string>) => void;
    setCommand: (command: string) => void;
    setLastCommandIndex: (lastCommandIndex: number) => void;
    clearHistory: () => void;
    name: string;
    user: string;
    fs: FSNode,
    cwd: ReadonlyArray<string>;
}>) => {
    const { theme } = React.useContext(AppContext);
    const [caretIndex, setCaretIndex] = React.useState(0);

    const syncCaret = () => {
        const { current } = inputRef;
        // console.log("syncing caret: ", current?.selectionStart);
        if (current) {
            setCaretIndex(current.selectionStart ?? 0);
        }
    }

    React.useEffect(() => {
        syncCaret();
    }, [command]);

    return (
        <div className="react-unix-terminal-shell-input-container">
            <label htmlFor="prompt">
                <Prompt user={user} name={name} cwd={cwd} isRoot={false} />
            </label>
            <span className="react-unix-terminal-input-wrapper">
                <input
                    ref={inputRef}
                    id="prompt"
                    type="text"
                    value={command}
                    // size={command.length || 1}
                    onChange={({ target: { value } }) => setCommand(value)}
                    // autoFocus
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    className="react-unix-terminal-shell-input"
                    onClick={syncCaret}
                    onKeyUp={syncCaret}
                    style={{
                        width: `${command.length}ch`,
                        color:
                            command === '' ||
                            isCommandExists({
                                command,
                                commands,
                            })
                                ? theme.commandExists
                                : theme.error,
                    }}
                    onKeyDown={async (event) => {
                        const { key, ctrlKey, code } = event;

                        switch (key) {
                            case 'c':
                                if (ctrlKey) {
                                    event.preventDefault();
                                    setCommand('');
                                    setHistory('', commands, cwd);
                                    setLastCommandIndex(0);
                                }
                                break;
                            case 'l':
                                if (ctrlKey) {
                                    event.preventDefault();
                                    clearHistory();
                                }
                                break;
                            case 'Tab':
                                event.preventDefault();
                                commandCompletion({
                                    commands,
                                    command,
                                    setCommand,
                                    setHistory,
                                    fs,
                                    cwd,
                                });
                                break;
                            case 'Enter': {
                                if (code === 'Enter' || code === '13') {
                                    event.preventDefault();
                                    setLastCommandIndex(0);
                                    await shell({
                                        commands,
                                        command,
                                        setHistory,
                                        clearHistory,
                                        setCommand,
                                        cwd,
                                    });
                                    const { current } = containerRef;
                                    if (current) {
                                        current.scrollTo(0, current.scrollHeight);
                                    }
                                }
                                break;
                            }
                            case 'ArrowUp': {
                                event.preventDefault();
                                const previousCommands = commandsHistory();
                                const { length } = previousCommands;
                                if (length) {
                                    const index = lastCommandIndex + 1;
                                    if (index <= length) {
                                        setLastCommandIndex(index);
                                        setCommand(
                                            parse(
                                                previousCommands[
                                                    previousCommands.length - index
                                                ]?.command,
                                            )
                                                .asString()
                                                .elseThrow(
                                                    `${previousCommands.join()} to have specified command at index ${
                                                        previousCommands.length -
                                                        index
                                                    }`,
                                                ),
                                        );
                                    }
                                }
                                break;
                            }
                            case 'ArrowDown': {
                                event.preventDefault();
                                const previousCommands = commandsHistory();
                                const { length } = previousCommands;
                                if (length) {
                                    const index = lastCommandIndex - 1;
                                    if (index < 1) {
                                        setLastCommandIndex(0);
                                        setCommand('');
                                    } else {
                                        setLastCommandIndex(index);
                                        setCommand(
                                            parse(
                                                previousCommands[length - index]
                                                    ?.command,
                                            )
                                                .asString()
                                                .elseThrow(
                                                    `${previousCommands.join()} to have specified command`,
                                                ),
                                        );
                                    }
                                }
                                break;
                            }
                        }
                    }}
                />
                <span 
                    className="react-unix-terminal-fake-caret" 
                    style={{ left: `${caretIndex}ch` }}
                />
            </span>
        </div>
    );
};

export default Input;
