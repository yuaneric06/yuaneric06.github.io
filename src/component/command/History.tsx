import parse from 'html-react-parser';
import * as React from 'react';
import sanitizeHtml from 'sanitize-html';

import { History as Hist } from '../../hook/useCommandHistory';
import { AppContext } from '../../ReactUnixTerminal';

import Prompt from './Prompt';

const History = ({
    history,
    name,
    user,
}: Readonly<{
    history: Hist;
    name: string;
    user: string;
}>) => {
    const { theme } = React.useContext(AppContext);

    return (
	<React.Fragment>
		{history.map((entry, index) => {
            const key = entry.command + index;
            return (
                <div key={key}>
                    {entry.command !== '' && (
                    <div className="react-unix-terminal-history-container">
                        <div>
                            <Prompt cwd={entry.cwd} isRoot={false} name={name} user={user} />
                        </div>
                        <div
                            className="react-unix-terminal-command-entered"
                            style={{
                                        color: entry.isExist
                                            ? theme.commandExists
                                            : theme.error,
                                    }}
                        >
                            {entry.command}
                        </div>
                    </div>
                        )}
                    <p className="react-unix-terminal-output">
                        {parse(
                                sanitizeHtml(entry.output, {
                                    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['span']),
                                    allowedAttributes: {
                                        ...sanitizeHtml.defaults.allowedAttributes,
                                        span: ['class'],
                                        a: ['href', 'target'],
                                    },
                                }),
                            )}
                    </p>
                </div>
            )})}
	</React.Fragment>
    );
};

export default History;
