/**
 * Floating Hearts Component
 * Creates animated floating heart particles in the background
 * Adds a romantic, celebratory atmosphere
 */

interface FloatingHeart {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: string;
}

export function FloatingHearts() {
  const hearts: FloatingHeart[] = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 4 + Math.random() * 2,
    size: ["text-2xl", "text-3xl", "text-4xl"][Math.floor(Math.random() * 3)],
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className={`absolute ${heart.size} animate-float opacity-40`}
          style={{
            left: `${heart.left}%`,
            bottom: "-50px",
            animation: `float-up ${heart.duration}s ease-in-out ${heart.delay}s infinite`,
          }}
        >
          💕
        </div>
      ))}

      <style>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default FloatingHearts;
