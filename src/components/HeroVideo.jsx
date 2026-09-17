import videoSrc from "../assets/showreel (1080p).mp4"
import { useState } from 'react';
export default function HeroVideo() {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    // Get mouse position relative to the video container
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
    return(
        <div 
      className="relative w-full h-screen overflow-hidden bg-primary cursor-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        <div
        className={`pointer-events-none absolute z-30 flex items-center justify-center rounded-full bg-secondary text-primary font-bold text-xs uppercase tracking-widest transition-transform duration-200 ease-out translate-x-[-50%] translate-y-[-50%] ${isHovered ? 'scale-100' : 'scale-0'}`}
        style={{
          width: '100px',
          height: '100px',
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1 : 0})`,
        }}
      >
        Watch Reel
      </div>
            <video
                autoPlay
                loop
                playsInline
                muted
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src={videoSrc} type="video/mp4" />
            </video>
            </div>
    )
}