import PixelStar from './PixelStar.jsx'
import ImageWithFallback from './ImageWithFallback.jsx'
import './Hero.css'

export default function Hero() {

    const fluffyImgStyle = {
        width: '600px',
        height: '600px',
        objectFit: 'cover',
        imageRendering: 'pixelated',
    };

    return (
        <section className="hero">
            <section className="left">
                <div className="pixel-star-container">
                    <PixelStar className="text-yellow-400 animate-pulse" />
                    <PixelStar className="text-pink-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <PixelStar className="text-blue-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>

                <h1>HEY, I'M <br />ERIC YUAN 👾</h1>

                <p className="bg-white/90 p-4 border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] pixel-corners">
                    A PASSIONATE DEVELOPER WHO LOVES CREATING INTERACTIVE EXPERIENCES AND FUN PROJECTS!
                </p>
                <p className="bg-white/90 p-4 border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] pixel-corners">
                    FROM BUILDING GAMES TO WEB APPS, I BUILD THINGS THAT BRING IDEAS TO LIFE!
                </p>
            </section>
            <div className="order-1 md:order-2 animate-float">
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
        </section >
    )
}