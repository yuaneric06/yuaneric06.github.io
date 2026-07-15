import * as React from 'react';

import { FSNode } from '../command/fileSystem';
import { Commands } from '../command/util';
import useCommandHistory from '../hook/useCommandHistory';

import History from './command/History';
import Input from './command/Input';
import Font from './common/FontTag';


const Terminal = ({
    commands,
    fontFamily,
    importGoogleFont = true,
    inputRef,
    containerRef,
    name,
    user,
    fs,
    cwd,
}: Readonly<{
    commands: Commands;
    fontFamily: string;
    importGoogleFont?: boolean;
    inputRef: React.RefObject<HTMLInputElement>;
    containerRef: React.RefObject<HTMLDivElement>;
    name: string;
    user: string;
    fs: FSNode;
    cwd: ReadonlyArray<string>;
}>) => {
    const {
        history,
        commandsHistory,
        command,
        lastCommandIndex,
        setCommand,
        setHistory,
        clearHistory,
        setLastCommandIndex,
    } = useCommandHistory();

    React.useEffect(() => {
        const { banner } = commands;
        if (banner) {
            setHistory(banner([]), commands, cwd);
        }
    }, [commands, setHistory, cwd]);

    React.useEffect(() => {
        const { current } = inputRef;
        if (current) {
            current.focus();
        }
    }, [history, inputRef]);

    return (
	<div className="react-unix-terminal-terminal">
		<div
			className="react-unix-terminal-terminal-inner-container"
			ref={containerRef}
		>
			{importGoogleFont ? <Font fontFamily={fontFamily} /> : null}
			<History history={history} name={name} user={user} />
			<Input
				clearHistory={clearHistory}
				command={command}
				commands={commands}
				commandsHistory={commandsHistory}
				containerRef={containerRef}
				cwd={cwd}
				fs={fs}
				inputRef={inputRef}
				lastCommandIndex={lastCommandIndex}
				name={name}
				setCommand={setCommand}
				setHistory={setHistory}
				setLastCommandIndex={setLastCommandIndex}
				user={user}
			/>
		</div>
	</div>
    );
};

export default Terminal;
