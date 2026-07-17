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

This website is meant to be a fun extension of my resume. 

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
'note.txt': {
    type: 'file',
    content: `Hey! A small note about this website.
Something that kind of bothers me is people faking it on Linkedin or whenever they talk to recruiters. 
To be honest, I sometimes do that too. It gets you hired and it looks good. 
But for this website, I want to intentionally avoid the "resume" speak. I like honesty. 

If you are reading this, I really appreciate the time you took to view my website, and I don't think I should return the favor by exaggerating my accomplishments. 
So in this website, I document my projects as well as where I failed. 
I'll write about things in my projects that got me stuck, where I did a terrible job on, but most importantly, what I learned

`
},
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
TypeScript            Intermediate
Java                  Intermediate
Python                Intermediate
C++                   Advanced
WebAssembly           Intermediate
React                 Advanced
Node.js               Advanced
Express               Intermediate
Linux/Unix            Intermediate
Bash                  Intermediate
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
    content: `A terminal-themed portfolio built with React and TypeScript. 
It features a custom command-line interface, allowing users to navigate through the portfolio using terminal commands. 
The project showcases my skills in frontend development, React, and TypeScript, along with bash command `,
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

<a href="https://github.com/yuaneric6/tanks" target="_blank">View on GitHub</a>
<a href="https://yuaneric06.github.io/tanks" target="_blank">View Live Demo</a>`,
                    },
'sorting-algorithm-visualizer.txt': {
    type: 'file',
    content: `A sorting algorithm visualizer built with JavaScript, C++, and WebAssembly. 
It allows users to visualize the process of various sorting algorithms, such as bubble sort, quicksort, and mergesort. 
The project demonstrates my understanding of algorithms and data structures, as well as my ability to create interactive visualizations using JavaScript.

Motivation:
idk i saw a cool thing on instagram reels or youtube shorts and wanted to make it myself

Failures: 
There is a visual bug where the canvas won't completely erase the bar. 
I managed to reduce the visual impact a bit, but figured I would have to render the array using something other than a canvas to fix it completely.
That would mean I would have to rewrite a large portion of my code. 

Something that this taught me was the importance of prototypes.
If I coded a demo version where I manually drew and erased bars from the canvas, I would have known to not use a canvas.
As any good engineer works, they build prototypes first. 
I need to build prototypes. 

Future expansion plans:
Add more meme sorting algorithms whenever the cs community invents more meme sorting algorithms

<a href="https://github.com/yuaneric06/sorting-visual" target="_blank">View on GitHub</a>
<a href="https://yuaneric06.github.io/sorting-visual" target="_blank">View Live Demo</a>
`,
                    },
'gravity-simulator.txt': {
    type: 'file',
    content: `A gravity simulator built with JavaScript, C++, and WebAssembly. 
It allows users to simulate how gravity affects circles. Bigger circles affect gravity more than smaller circles. Go figure. 

Motivation: 
I was kinda bored and thought this would be a cool thing to make

Failures: 
Honestly, I feel like I lost a lot of motivation for this project.
A lot of it felt like physics class with f=ma aah equations and tuning how strong gravity would be.
Something that I should have done differently though, would be my ordering of what I did. 
I feel like I was way too excited at the start. I wanted to scrap together a makeshift frontend and jump right into the gravity part.
Because of my poopy frontend, I wasn't able to test my backend very well. 
I had to stare so hard at my screen to figure out why a certain bug was happening.
For example, if I made it so that two bodies combined together smoother or made a settings menu from the start,
I would have a way easier time debugging. 

Make a proper frontend guys. Its called user experience, not developer experience. 

Future expansion plans (if i get motivated): 
Improve visuals, and attempt to optimize the freak out of it using that barnes hut algorithm or whatever

<a href="https://github.com/yuaneric06/gravity-sim" target="_blank">View on Github</a>
<a href="https://yuaneric06.github.io/gravity-sim/" target="_blank">View Live Demo</a>
`
},
'webclock.txt': {
    type: 'file',
    content: `A lightweight FireFox browser extension built with JavaScript to track how you are spending your time online.
Beautiful frontend

Motivation: 
I was being a bum and figured I could measure how much of a bum I am

Future expansion plans:
none, there is absolutely no problem with this. frontend looks fine imo

Add it to FireFox if you trust me, in general you shouldn't add random extensions from a random aah college kid though... 
    
<a href="https://github.com/yuaneric06/gravity-sim" target="_blank">View on Github</a>
<a href="https://addons.mozilla.org/firefox/downloads/file/4718156/webclock06-2.0.xpi" target="_blank">Add To Firefox</a>
`
},
'remail.txt': {
    type: 'file',
    content: `A email application built with React, Express.js, and MySQL. 
    Built with a RESTful API backend with a SQL server to manage users and messages
    
    Motivation: 
    This was one of my first fullstack projects ever. I wanted to practice copying Gmail's frontend, while learning Express.js and MySQL. 
    
    Failures:
    Although this was my first fullstack project, I actually am very proud of how I did this. 
    Looking at the code, its kinda scuffed. I'll be honest. 
    But what do I expect, write production level code first try, as a freshman three weeks into college?
    
    Future expansion plans: 
    Bring it online with a server
    It isn't online right now because I'm kinda poor and don't want to pay for dynamic website hosting + a sql server + a node.js server to be running all the 
    
    <a href="https://github.com/yuaneric06/ReMail" target="_blank">View on Github</a>
    `
},
'funkeytype.txt': {
    type: 'file',
    content: `A typing speed test built using React. 
Built to be a replica of monkeytype.com, this project was meant for me to improve my frontend. 

This project was quite simple relative to my other projects. No backend, just pure JavaScript / React
    
<a href="https://github.com/yuaneric06/funkeytype" target="_blank">View on Github</a>
<a href="https://yuaneric06.github.io/funkeytype/" target="_blank">View Live Demo</a>
    `
}
                    
                },
            },
        },
    } as FSNode,
};