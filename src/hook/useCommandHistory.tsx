import * as React from 'react';

import {
    Commands,
    commandsHistory,
    isCommandExists,
    key,
} from '../command/util';

type Command = string;

type History = ReadonlyArray<
    Readonly<{
        id: number;
        timeCreated: Date;
        isExist: boolean;
        command: Command;
        output: string;
        cwd: ReadonlyArray<string>;
    }>
>;
type CommandsHistory = ReadonlyArray<
    Readonly<{
        command: Command;
        timeCreated: Date;
    }>
>;

const useCommandHistory = () => {
    const [state, setState] = React.useState({
        history: [] as History,
        command: '',
        lastCommandIndex: 0,
        shouldSaveLocally: false,
    });

    const { command, history, lastCommandIndex, shouldSaveLocally } = state;

    React.useEffect(() => {
        if (shouldSaveLocally) {
            localStorage.setItem(
                key,
                JSON.stringify(
                    commandsHistory().concat(
                        history
                            .filter(
                                ({ command }, index, arr) =>
                                    {return index === arr.length - 1 && command},
                            )
                            .map(({ command, timeCreated }) => {return {
                                command,
                                timeCreated,
                            }}),
                    ),
                ),
            );
        }
    }, [history.length]);

    React.useEffect(() => {
        setState((prev) => {return {
            ...prev,
            shouldSaveLocally: true,
        }});
    }, []);

    return {
        history,
        command,
        lastCommandIndex,
        commandsHistory,
        setHistory: (output: string, commands: Commands, cwd: ReadonlyArray<string>) =>
            {return setState((prev) => {return {
                ...prev,
                history: [
                    ...prev.history,
                    {
                        id: history.length,
                        timeCreated: new Date(),
                        isExist: isCommandExists({
                            command,
                            commands,
                        }),
                        command,
                        output,
                        cwd,
                    },
                ],
            }})},
        setCommand: (command: string) =>
            {return setState((prev) => {return {
                ...prev,
                command,
            }})},
        setLastCommandIndex: (lastCommandIndex: number) =>
            {return setState((prev) => {return {
                ...prev,
                lastCommandIndex,
            }})},
        clearHistory: () =>
            {return setState((prev) => {return {
                ...prev,
                history: [],
            }})},
    };
};

export type { CommandsHistory, History };
export default useCommandHistory;
