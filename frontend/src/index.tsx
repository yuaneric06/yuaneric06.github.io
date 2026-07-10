import * as React from 'react';
import ReactDOM from 'react-dom';
import ReactUnixTerminal from './ReactUnixTerminal';

ReactDOM.render(
    <React.StrictMode>
        <ReactUnixTerminal
            user="vistor"
            name="portfolio"
            fontFamily="JetBrains+Mono"
            height="100vh"
            width="100%"
            commands={{
            }}
        />
    </React.StrictMode>,
    document.getElementById('root'),
);
