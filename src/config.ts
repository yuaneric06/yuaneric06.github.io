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
            'experience': {
                type: 'directory',
                children: {
                    'Develop_For_Good': {
                        type: 'file',
                        content: `Designer at Develop For Good (May 2026 - Present)
- Worked on a team of eight to create low-fidelity wireframes and high-fidelity prototypes to iterate quickly on layout, structure, and user flow.
- Conducted iterative design improvements based on weekly user and client feedback, improving clarity and navigation across interfaces.`,
                    },
                },
            },
            'projects': {
                type: 'directory',
                children: {
                    'terminal-portfolio.txt': {
                        type: 'file',
                        content: `A terminal-themed portfolio built with React and TypeScript. It features a custom command-line interface, allowing users to navigate through the portfolio using terminal commands. The project showcases my skills in frontend development, React, and TypeScript.`,
                    },
                },
            },
        },
    } as FSNode,
};