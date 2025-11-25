import PixelStar from './PixelStar.jsx'
import PixelHeart from './PixelHeart.jsx'
import './Footer.css'

export default function Footer() {
    return (
        <section className="footer">
            <div className="pixel-stars">
                <PixelStar className="text-yellow-400 animate-pulse" />
                <PixelStar className="text-pink-400 animate-pulse" style={{ animationDelay: '0.3s' }} />
                <PixelStar className="text-cyan-400 animate-pulse" style={{ animationDelay: '0.6s' }} />
            </div>
            <h1>MADE BY <PixelHeart className="text-red-500 animate-pulse" /> BY ERIC YUAN</h1>
            <p>© {new Date().getFullYear()} ALL RIGHTS RESERVED</p>
            <div className="bouncing-icons">
                <span className="text-2xl animate-bounce">🎮</span>
                <span className="text-2xl animate-bounce" style={{ animationDelay: '0.1s' }}>👾</span>
                <span className="text-2xl animate-bounce" style={{ animationDelay: '0.2s' }}>🕹️</span>
            </div>
        </section>
    )
}