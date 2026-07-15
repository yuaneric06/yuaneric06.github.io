import React from 'react';

const Font = ({
    fontFamily,
}: Readonly<{
    fontFamily: string;
}>) => {return (
	<React.Fragment>
		<link href="https://fonts.googleapis.com" rel="preconnect" />
		<link
			crossOrigin="anonymous"
			href="https://fonts.gstatic.com"
			rel="preconnect"
		/>
		<link
			href={`https://fonts.googleapis.com/css2?family=${fontFamily}:wght@${Array.from(
                { length: 9 },
                (_, i) => {return (i + 1) * 100},
            ).join(';')}&display=swap`}
			rel="stylesheet"
		/>
	</React.Fragment>
)};

export default Font;
