import { FSNode } from './command/fileSystem';
import { Commands } from './command/util';

export const siteConfig = {
    user: 'visitor',
    name: 'portfolio',
    fontFamily: 'JetBrains Mono',

    banner: `
============================================================
                 Eric Yuan Portfolio
============================================================

 #######                    #     #                      
 #       #####  #  ####      #   #  #    #   ##   #    # 
 #       #    # # #    #      # #   #    #  #  #  ##   # 
 #####   #    # # #            #    #    # #    # # #  # 
 #       #####  # #            #    #    # ###### #  # # 
 #       #   #  # #    #       #    #    # #    # #   ## 
 ####### #    # #  ####        #     ####  #    # #    # 
                                                         

Computer Science @ Michigan State University

Type 'help' to begin.

`,

    helpText: `
Available commands:

    help            - Show this help message
    clear           - Clear the terminal screen
    whoami          - Show the current user
    date            - Show the current date and time
    history         - Show command history
    clearhist       - Clear command history
    ls              - List files and directories in the current directory
    pwd             - Show the current working directory
    cat             - Display the contents of a file
    cd              - Change the current working directory

Filesystem:
    ~/              - Root directory, contains about.txt, skills.txt, contact.txt, experience/, and projects/
    ~/projects      - Personal projects

Tips:
    - Use the 'tab' key for command completion
    - Use the 'up' and 'down' arrow keys to navigate command history
    - Use 'ctrl+l' to clear the terminal screen
`,

    fileSystem: {
        type: 'directory',
        children: {
            'about.txt': {
                type: 'file',
                content: "Hi, I'm Eric. I'm a junior at Michigan State University, " +
                    "studying computer science. \nSince my sophomore year of highschool, " +
                    "I've been passionate about programming and web development.\n" +
                    "I enjoy building interactive web applications and exploring new technologies.\n" +
                    "In my free time, I like to build cool websites like this one, go biking, and play with my cat and dog!\n\n" +
                    "I have extensive experience in both frontend and backend development from my personal projects and work experiences,\n" +
                    "and I am always eager to learn and improve my skills.\n\n" +
                    "Feel free to explore my portfolio and reach out to me if you have any questions or opportunities!",
            },
            'skills.txt': {
                type: 'file',
                content: `Skill                 Proficiency
----------------------------------------
JavaScript            Advanced
TypeScript            Advanced
Python                Intermediate
C++                   Advanced
WebAssembly           Intermediate
React                 Advanced
Node.js               Advanced
Express               Advanced
Linux/Unix            Intermediate
Git/GitHub            Advanced
SQL                   Intermediate`,
            },
            'contact.txt': {
                type: 'file',
                content: `Email: yuaneric6@gmail.com`,
            },
//             'experience': {
//                 type: 'directory',
//                 children: {
//                     'Develop_For_Good': {
//                         type: 'file',
//                         content: `Designer at Develop For Good (May 2026 - Present)
// - Worked on a team of eight to create low-fidelity wireframes and high-fidelity prototypes to iterate quickly on layout, structure, and user flow.
// - Conducted iterative design improvements based on weekly user and client feedback, improving clarity and navigation across interfaces.`,
//                     },
//                 },
//             },
            'projects': {
                type: 'directory',
                children: {
                    'terminal-portfolio.txt': {
                        type: 'file',
                        content: `A terminal-themed portfolio built with React and TypeScript. It features a custom command-line interface, allowing users to navigate through the portfolio using terminal commands. The project showcases my skills in frontend development, React, and TypeScript.`,
                    },
                    'tanks.txt': {
                        type: 'file',
                        content: `A 2d tank battle game built with TypeScript, Canvas, and Socket.IO
The game features real-time multiplayer gameplay, allowing players to control tanks and engage in battles with other players. 

My goal with this project was to learn how to sync data between clients by using a client server model with several api endpoints. 
Some challenges included figuring out how to validate requests sent by the client to the server to prevent cheating
and determining which api endpoints to expose and which I should keep internal. 

Motivation:
To learn how to sync data between clients in a multiplayer game using a client-server model.
To have something to play with my friends when my professor is yapping too much

Future expansion plans:
Build an actual ui - when I created this project, I only wanted to learn. I plan to build a proper ui in the future
Add bots - notice how when you clicked the live demo below, you are alone. thats cause you are lonely. 
Gameplay expansion - Powerups, obstacles on the map, different classes of tanks, etc.

<a href="https://github.com/yuaneric6/tanks" target="_blank">View on GitHub</a>,
<a href="https://yuaneric06.github.io/tanks" target="_blank">View Live Demo</a>`,
                    },
                    'sorting-algorithm-visualizer.txt': {
                        type: 'file',
                        content: `A sorting algorithm visualizer built with JavaScript, C++, and WebAssembly. 
It allows users to visualize the process of various sorting algorithms, such as bubble sort, quicksort, and mergesort. 
The project demonstrates my understanding of algorithms and data structures, as well as my ability to create interactive visualizations using JavaScript.

Motivation:
idk i saw a cool thing on instagram reels or youtube shorts and wanted to make it myself

Future expansion plans:
Add more meme sorting algorithms whenever the cs community invents more meme sorting algorithms

<a href="https://github.com/yuaneric06/sorting-visual" target="_blank">View on GitHub</a>,
<a href="https://yuaneric06.github.io/sorting-visual" target="_blank">View Live Demo</a>`,
                    },
                    'gravity-simulator.txt': {
                        type: 'file',
                        content: `A gravity simulator built with JavaScript, C++, and WebAssembly. 
It allows users to simulate how gravity affects circles. Bigger circles affect gravity more than smaller circles. Go figure. 

Motivation: 
I was kinda bored and thought this would be a cool thing to make

Future expansion plans: 
Improve visuals, and attempt to optimize the freak out of it using that barnes hut algorithm or whatever

<a href="https://github.com/yuaneric06/gravity-sim" target="_blank">View on Github</a>,
<a href="https://yuaneric06.github.io/gravity-sim/" target="_blank">View Live Demo</a>,
`
                    },
                    
                },
            },
        },
    } as FSNode,
};