import './About.css'

export default function About() {
    return (
        <section className="about">
            <h1>ABOUT ME</h1>
            <div className="pixel-corners">
                <p>GET TO KNOW ME - MY STORY AND WHAT DRIVES ME! 🎯</p>
            </div>

            <div id="story" className="pixel-corners">
                <div className="story">
                    <div id="idk-man" className="flex items-center gap-2 mb-4">
                        <span className="text-2xl">📖</span>
                        <h3 className="text-sm sm:text-base">MY STORY</h3>
                    </div>
                    {/* <p>
                        I AM A 18 YEAR OLD COLLEGE STUDENT EXPLORING DIFFERENT FIELDS IN COMPUTER SCIENCE. CURRENTLY, I AM EXPLORING WEB DEVELOPMENT, LEARNING HOW TO USE REACT, EXPRESS, AND CSS. 
                        <br />
                        EVENTUALLY, MY GOAL IS TO WORK IN FULL STACK. I PLAN TO 
                    </p> */}
                    <p>I'M A DEVELOPER WITH A PASSION FOR CREATING ENGAGING, INTERACTIVE EXPERIENCES. MY JOURNEY STARTED WITH CURIOSITY ABOUT HOW THINGS WORK, AND QUICKLY EVOLVED INTO A LOVE FOR BUILDING PROJECTS!
                        <br />
                        WHETHER I'M RECREATING POPULAR GAMES LIKE WORDLE, BUILDING PROJECTS LIKE TENZIES, OR EXPLORING NEW WEB TECHNOLOGIES, I'M CONSTANTLY LEARNING! I BELIEVE THE BEST WAY TO LEARN IS BY DOING! 🚀
                        <br />
                        WHEN I'M NOT CODING, YOU CAN FIND ME EXPLORING NEW TECH OR THINKING ABOUT THE NEXT EXCITING PROJECT. I LOVE THE CHALLENGE OF BRINGING IDEAS TO LIFE! ⚡
                    </p>
                </div>
            </div>
        </section>
    )
}