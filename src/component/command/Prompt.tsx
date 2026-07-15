import React from 'react';

const Prompt = ({
    user,
    name,
    cwd,
    isRoot = false,
}: Readonly<{
    user: string;
    name: string;
    cwd: ReadonlyArray<string>;
    isRoot?: boolean;
}>) => {return (
	<div className="react-unix-terminal-prompt">
		<span className="react-unix-terminal-user">{user}</span>
		<span className="react-unix-terminal-prompt-symbols">@</span>
		<span className="react-unix-terminal-name">{name}</span>
		<span className="react-unix-terminal-prompt-symbols react-unix-terminal-colon">:</span>
		<span className="react-unix-terminal-cwd">{'/' + cwd.join('/')}</span>
		<span className="react-unix-terminal-prompt-symbols react-unix-terminal-prompt-input-arrow">
			{isRoot ? '#' : '$'}
		</span>
	</div>
)};

export default Prompt;
