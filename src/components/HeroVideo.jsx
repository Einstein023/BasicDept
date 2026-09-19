import videoSrc from "../assets/showreel (1080p).mp4"
import { useEffect, useRef, useState } from 'react';

export default function HeroVideo() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const animationFrame = useRef(null);

  useEffect(() => {
    const animateCursor = () => {
      setCursorPos((currentPos) => ({
        x: currentPos.x + (targetPos.current.x - currentPos.x) * 0.25,
        y: currentPos.y + (targetPos.current.y - currentPos.y) * 0.25,
      }));
      animationFrame.current = requestAnimationFrame(animateCursor);
    };

    animationFrame.current = requestAnimationFrame(animateCursor);

    return () => cancelAnimationFrame(animationFrame.current);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    targetPos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseLeave = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    targetPos.current = {
      x: rect.width / 2,
      y: rect.height / 2,
    };
    setIsHovered(false);
  };

  const toggleMode = async () => {
    const video = videoRef.current;

    if (!video) return;

    const nextMode = !hasInteracted;
    video.muted = !nextMode;
    setHasInteracted(nextMode);

    if (!nextMode) {
      setProgress(0);
    }

    if (video.paused) {
      await video.play();
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;

    if (video?.duration) {
      setProgress((video.currentTime / video.duration) * 100);
    }
  };

  const handleProgressChange = (event) => {
    const video = videoRef.current;
    const value = Number(event.target.value);

    if (video?.duration) {
      video.currentTime = (value / 100) * video.duration;
      setProgress(value);
    }
  };

  return (
    <div
      className={`relative z-20 h-screen w-full overflow-hidden bg-primary ${hasInteracted ? 'cursor-auto' : 'cursor-none'}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {!hasInteracted && (
        <div
          className={`pointer-events-none absolute z-30 flex items-center justify-center rounded-full bg-neutral text-primary font-bold text-sm uppercase tracking-tight transition-transform duration-300 ease-out ${isHovered ? 'scale-100' : 'scale-0'}`}
        style={{
          width: '100px',
          height: '100px',
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1 : 0})`,
        }}
        >
          <span className="text-center">Watch <br />Reel</span>
        </div>
      )}

      <video
        ref={videoRef}
        autoPlay
        loop
        playsInline
        muted
        onClick={toggleMode}
        onTimeUpdate={handleTimeUpdate}
        className={`absolute inset-0 h-full w-full object-cover ${hasInteracted ? 'cursor-auto' : 'cursor-none'}`}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {hasInteracted && (
        <div className="absolute bottom-6 left-5 right-5 z-20 flex items-center">
        <input
          type="range"
          min="0"
          max="100"
          step="0.1"
          value={progress}
          onChange={handleProgressChange}
          onClick={(event) => event.stopPropagation()}
          className="h-1 w-full cursor-pointer accent-neutral"
          aria-label="Video progress"
        />
        </div>
      )}
    </div>
  );
}