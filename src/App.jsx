import HeroVideo from "./components/HeroVideo"
import Nav from "./components/Nav"
import { useEffect } from 'react';
import Lenis from 'lenis';
import Hero from "./components/Hero";

function App() {
  useEffect(() => {
    // 1. Initialize Lenis with custom physics
    const lenis = new Lenis({
      duration: 1.2, // Scroll duration (higher = weightier feel)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential momentum curve
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // 2. Synchronize Lenis update loop with browser requestAnimationFrame
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 3. Clean up instance on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <main>
      <Nav />
      <HeroVideo />
      <Hero />
    </main>
  )
}

export default App
