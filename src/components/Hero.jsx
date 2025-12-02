import { Github, Linkedin, Mail, Sparkles, Smile } from 'lucide-react';
import PixelStar from './PixelStar.jsx'
import ImageWithFallback from './ImageWithFallback.jsx'
import { useState, useRef, useEffect } from 'react'
import './Hero.css'

export default function Hero() {
    const [showBob, setShowBob] = useState(false);
    const bobRef = useRef(null);

    useEffect(() => {
        const el = bobRef.current;
        if (!showBob || !el) return;

        console.log("adding slide-in");
        el.getBoundingClientRect();
        // Add class on next frame
        requestAnimationFrame(() => {
            el.classList.add("slide-in");
        });

        // Remove the class when animation finishes
        const handleTransitionEnd = () => {
            el.classList.remove("slide-in");
        };

        el.addEventListener("transitionend", handleTransitionEnd);

        // Unmount Bob later if you want
        const timeoutId = setTimeout(() => {
            setShowBob(false);
        }, 4000); // 400ms + small buffer

        return () => {
            el.removeEventListener("transitionend", handleTransitionEnd);
            clearTimeout(timeoutId);
        };
    }, [showBob]);



    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const fluffyImgStyle = {
        width: '600px',
        height: '600px',
        objectFit: 'cover',
        imageRendering: 'pixelated',
    };

    return (
        <section className="hero-container">
            <div className="max-wrapper">
                <div className="grid-container">
                    <div className="pixel-order">
                        <div>
                            <div className="pixel-star-container">
                                <PixelStar className="text-yellow-400 animate-pulse" />
                                <PixelStar className="text-pink-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
                                <PixelStar className="text-blue-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
                            </div>

                            <h1 className="name">HEY, I'M <br />ERIC YUAN 👾</h1>
                        </div>

                        <div>
                            <p className="hero-description bg-white/90 p-4 border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] pixel-corners">
                                A PASSIONATE DEVELOPER WHO LOVES CREATING INTERACTIVE EXPERIENCES AND FUN PROJECTS!
                            </p>
                            <p className="hero-description bg-white/90 p-4 border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] pixel-corners">
                                FROM BUILDING GAMES TO WEB APPS, I BUILD THINGS THAT BRING IDEAS TO LIFE!
                            </p>
                        </div>

                        <nav className="fun-buttons">
                            <button className="view-work-button" onClick={() => scrollToSection("projects")}>
                                <Sparkles className="w-4 h-4 mr-2" />
                                VIEW WORK
                            </button>

                            <div className="flex flex-col items-center">
                                <button className="fun-button" onClick={() => setShowBob(true)}>
                                    <Smile className="w-4 h-4 mr-2" />
                                    PRESS ME
                                </button>
                                {showBob && (
                                    <img
                                        ref={bobRef}
                                        src="bob.png"
                                        alt="bob sliding down"
                                        className="bob-initial"
                                    />
                                )}
                            </div>
                        </nav>

                        <div className="hero-anchors">
                            <a target="_blank" href="https://github.com/yuaneric06">
                                <Github className="w-5 h-5 text-black" />
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/eric-yuan06/">
                                <Linkedin className="w-5 h-5 text-black" />
                            </a>
                            <a target="_blank" href="mailto:yuaneric6@gmail.com">
                                <Mail className="w-5 h-5 text-black" />
                            </a>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 animate-float aspect-square">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-yellow-400 border-4 border-black rotate-3 pixel-corners"></div>
                            <ImageWithFallback
                                // src="https://images.unsplash.com/photo-1692306088530-e81ab626753b?w=600&h=600&fit=crop"
                                src="fluffy_pfp.png"
                                alt="Profile picture"
                                className="relative w-full h-auto border-8 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] pixel-corners"
                                style={{ imageRendering: 'pixelated' }}
                                imgStyle={fluffyImgStyle}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}