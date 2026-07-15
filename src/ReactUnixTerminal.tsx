import * as React from 'react';

import createCommands, { Options } from './command/defaultCommands';
import { FSNode, resolvePath, nodeAt } from './command/fileSystem';
import { Commands } from './command/util';
import Terminal from './component/Terminal';
import { siteConfig } from './config';
import useFileSystem from './hook/useFileSystem';
import Theme from './theme/Theme';

const AppContext = React.createContext({
    theme: {
        background: '#22292B',
        normalText: '#E5C07B',
        files: '#E5C07B',
        directories: '#61AFEF',
        border: '#98C379',
        name: '#C678DD',
        user: '#61AFEF',
        promptSymbols: '#ABB2BF',
        error: '#F44747',
        commandExists: '#67CBE7',
        link: '#6CB5ED',
    } as Theme,
});

const ReactUnixTerminal = ({
    commands,
    options,
    height,
    width,
    user,
    name,
    fontFamily,
    theme,
    fileSystem,
}: Readonly<{
    commands?: Commands;
    options?: Options;
    height: string;
    width: string;
    user: string;
    name: string;
    fontFamily: string;
    theme?: Theme;
    fileSystem?: FSNode;
}>) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const cssVariableRef = React.useRef<HTMLDivElement>(null);

    const appContext = React.useContext(AppContext);

    const chosenTheme = theme ?? appContext.theme;

    const { fs, cwd, setCwd } = useFileSystem(fileSystem);

    const fsCommands: Commands = React.useMemo(
        () => {return {
            pwd: () => {return '/' + cwd.join('/')},
            ls: (args) => {
                const target = nodeAt(fs, resolvePath(cwd, args[0] ?? ''));
                if (!target) return `ls: no such directory: ${args[0]}`;
                if (target.type !== 'directory')
                    return `ls: not a directory: ${args[0]}`;
                
                console.log("currently at ", cwd, " and target is ", target);
                console.log("target children are ", target.children);

                const entries = Object.entries(target.children)
                    .sort(([a], [b]) => {return a.localeCompare(b)})
                    .map(([name, node]) => {
                        const className = 
                            node.type === 'directory' 
                            ? 'react-unix-terminal-directories' 
                            : 'react-unix-terminal-files';
                        return `<span class="${className}">${name}</span>`;
                    });

                return entries.join('  ') || '(empty)';
            },
            cd: (args) => {
                const newPath = resolvePath(cwd, args[0] ?? '~');
                const target = nodeAt(fs, newPath);
                if (target?.type !== 'directory')
                    return `cd: no such directory: ${args[0]}`;
                setCwd(newPath);
                return '';
            },
            cat: (args) => {
                const target = nodeAt(fs, resolvePath(cwd, args[0] ?? ''));
                if (!target) return `cat: no such file: ${args[0]}`;
                if (target.type === 'directory')
                    return `cat: ${args[0]} is a directory`;
                return target.content;
            },
        }},
        [fs, cwd, setCwd],
    );

    React.useEffect(() => {
        const { current } = cssVariableRef;
        //ref: https://www.w3schools.com/css/css3_variables_javascript.asp
        if (current) {
            const {
                background,
                normalText,
                files,
                directories,
                border,
                name,
                user,
                promptSymbols,
                link,
            } = chosenTheme;
            current.style.setProperty(
                '--react-unix-terminal-background',
                background,
            );
            current.style.setProperty(
                '--react-unix-terminal-scrollbar-thumb',
                promptSymbols,
            );
            current.style.setProperty(
                '--react-unix-terminal-normal-text',
                normalText,
            );
            current.style.setProperty('--react-unix-terminal-files', files);
            current.style.setProperty(
                '--react-unix-terminal-directories', directories);
            current.style.setProperty('--react-unix-terminal-border', border);
            current.style.setProperty('--react-unix-terminal-name', name);
            current.style.setProperty('--react-unix-terminal-user', user);
            current.style.setProperty(
                '--react-unix-terminal-prompt-symbols',
                promptSymbols,
            );
            current.style.setProperty('--react-unix-terminal-link', link);
            current.style.setProperty(
                '--react-unix-terminal-font-family',
                fontFamily.split('+').join(' '),
            );
        }
    }, [chosenTheme, fontFamily]);

    return (
	<AppContext.Provider
		value={{
                ...appContext,
                theme: chosenTheme,
            }}
	>
		<div
			className="react-unix-terminal-terminal-outermost-container"
			ref={cssVariableRef}
		>
			<div
				className="react-unix-terminal-terminal-flexible-height-width-app-container"
				style={{
                        height,
                        width,
                    }}
			>
				<div
					className="react-unix-terminal-terminal-scrollable-container"
					onClick={() => {
                            const { current } = inputRef;
                            if (current) {
                                current.focus();
                            }
                        }}
					ref={containerRef}
				>
					<div className="react-unix-terminal-terminal-container">
						<Terminal
							commands={createCommands({ ...fsCommands, banner: () => {return siteConfig.banner}, ...commands}, options)}
							containerRef={containerRef}
							cwd={cwd}
							fontFamily={fontFamily}
							fs={fs}
							inputRef={inputRef}
							name={name}
							user={user}
						/>
					</div>
				</div>
			</div>
		</div>
	</AppContext.Provider>
    );
};

export { AppContext };

export default ReactUnixTerminal;
