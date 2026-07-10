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
                content: `Hi, I'm ...`,
            },
            'skills.txt': {
                type: 'file',
                content: `Programming Languages: JavaScript, TypeScript, Python, C++
Frameworks/Libraries: React, Node.js, Express, Redux`,
            },
            'contact.txt': {
                type: 'file',
                content: `Email: eric.yuan@example.com`,
            },
            'experience': {
                type: 'directory',
                children: {
                    'company1.txt': {
                        type: 'file',
                        content: `Software Engineer at Company 1 (2020 - Present)
- Developed and maintained web applications using React and Node.js.
- Implemented RESTful APIs and integrated third-party services.`,
                    },
                },
            },
            'projects': {
                type: 'directory',
                children: {
                    'terminal-portfolio.md': {
                        type: 'file',
                        content: `A terminal-themed portfolio built with React...`,
                    },
                },
            },
            'resume.pdf': {
                type: 'file',
                content: 'See link: https://...',
            },
        },
    } as FSNode,
};