import { useEffect, useState } from "react";

/**
 * Confetti Animation Component
 * Creates playful confetti particles that fall across the screen
 * Perfect for celebratory moments
 */

interface Particle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  emoji: string;
}

const EMOJIS = ["💕", "🌸", "✨", "💐", "⭐", "🎉", "💖", "🌺"];

export function Confetti() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate confetti particles
    const newParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 1,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
    }));

    setParticles(newParticles);

    // Clean up after animation completes
    const timer = setTimeout(() => {
      setParticles([]);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute text-3xl sm:text-4xl animate-bounce-in"
          style={{
            left: `${particle.left}%`,
            top: "-50px",
            animation: `fall ${particle.duration}s linear ${particle.delay}s forwards`,
            opacity: 0.8,
          }}
        >
          {particle.emoji}
        </div>
      ))}

      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default Confetti;
