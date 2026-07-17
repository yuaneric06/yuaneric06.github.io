import { Commands, commandsHistory, key } from './util';
import { siteConfig } from '../config';

type NullableCommands = Commands | undefined;

type Options =
    | Readonly<{
          disableDefaultCommand?: boolean;
      }>
    | undefined;

const createCommands = (
    commands: NullableCommands,
    options: Options,
): Commands => {
    const appendedCommands = options?.disableDefaultCommand
        ? commands
        : {
              //default
              history: () =>
                  {return commandsHistory()
                      .map(
                          ({ command, timeCreated }) =>
                              {return `executed at: ${timeCreated
                                  .toString()
                                  .split(' ')
                                  .filter((_, index) => {return index < 5})
                                  .join(' ')}, command: ${command}`},
                      )
                      .join('\n')},
              clearhist: () => {
                  localStorage.setItem(key, JSON.stringify([]));
                  return 'history cleared';
              },
              whoami: () => {return 'visitor'},
              clear: () => {return ''},
              date: () => {return new Date().toString()},



              ...commands,
          };

    const helper = options?.disableDefaultCommand
        ? undefined
        : {
              help: () => {return siteConfig.helpText},
          };
    return {
        //custom
        ...helper,
        ...appendedCommands,
    };
};

export type { Options };
export default createCommands;
