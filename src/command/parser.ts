import parse from 'parse-dont-validate';

import { CommandsHistory } from '../hook/useCommandHistory';

const parseAsCommandHistory = (commands: string | null): CommandsHistory =>
    {return !commands
        ? []
        : parse(JSON.parse(commands as string))
              .asReadonlyArray((command) => {
                const record = command as Record<string, unknown>;
                return {
                    timeCreated: new Date(
                        parse(record.timeCreated)
                            .asString()
                            .elseThrow(
                                `timeCreated is not an ISO string, it is ${record.timeCreated}`,
                            ),
                    ),
                    command: parse(record.command)
                        .asString()
                        .elseThrow(
                            `command is not a string, it is ${record.command}`,
                        ),
                };
              })
              .elseThrow(`commands is not an array, it is ${commands}`)};

export default parseAsCommandHistory;
