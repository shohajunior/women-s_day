import { Link } from "wouter";
import { Heart, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Confetti from "@/components/Confetti";

/**
 * Design Philosophy: Vibrant Cartoon Celebration
 * - Hot pink (#FF69B4) and magenta (#FF1493) primary colors
 * - Sunny yellow (#FFD700) accents
 * - Playful, bouncy animations throughout
 * - Rounded, organic shapes and overlapping layouts
 * - Hand-written style fonts for personal touches
 */

interface Student {
  id: string;
  name: string;
  image: string;
  letter: string;
  slideImages: string[];
}

// Sample student data - replace with actual data
const students: Student[] = [
  {
    id: "1",
    name: "Sarah",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    letter: "Aziz onam, barcha sevgingiz va qo'llab-quvvatlashingiz uchun rahmat. Siz mening har kungi ilhom manbaimsiz. 8-mart bayrami muborak!",
    slideImages: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
    ],
  },
  {
    id: "2",
    name: "Emma",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    letter: "Onam, siz men bilgan eng kuchli ayolsiz. Menga ishonganingiz uchun rahmat. Sizni juda yaxshi ko'raman!",
    slideImages: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop",
    ],
  },
  {
    id: "3",
    name: "Olivia",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    letter: "Mening ajoyib onamga, barcha qurbonliklaringiz uchun rahmat. Siz dunyoni go'zal qilasiz. 8-mart bayrami muborak!",
    slideImages: [
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop",
    ],
  },
  {
    id: "4",
    name: "Sophia",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    letter: "Onam, siz mening qahramonimsiz. Qilgan barcha ishlaringiz uchun rahmat. Sizning qizing bo'lishdan juda faxrlanaman!",
    slideImages: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
    ],
  },
  {
    id: "5",
    name: "Isabella",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    letter: "Aziz onam, sizning sevgingiz va rahbarligingiz mening kimligimni shakllantirdi. Mening tosh bo'lganingiz uchun rahmat!",
    slideImages: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop",
    ],
  },
  {
    id: "6",
    name: "Mia",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    letter: "Onam, sizning kuchingiz va mehribonligingiz bilan har kuni meni ilhomlantirasiz. So'zlar aytib bera olmaydigan darajada sizni yaxshi ko'raman!",
    slideImages: [
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop",
    ],
  },
];

export default function Home() {
  const [animateCards, setAnimateCards] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Trigger card animations on mount
    setAnimateCards(true);
    // Hide confetti after initial celebration
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 via-pink-50 to-yellow-50 overflow-hidden">
      {showConfetti && <Confetti />}
      {/* Floating decoration elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 text-6xl animate-float opacity-30">💐</div>
        <div className="absolute top-32 right-20 text-5xl animate-float opacity-25" style={{ animationDelay: "1s" }}>💕</div>
        <div className="absolute bottom-32 left-1/4 text-5xl animate-float opacity-20" style={{ animationDelay: "2s" }}>⭐</div>
        <div className="absolute bottom-20 right-1/3 text-6xl animate-float opacity-25" style={{ animationDelay: "0.5s" }}>🌸</div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Banner Image */}
          <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl animate-bounce-in">
            <img
              src="/images/banner.png"
              alt="8-mart bayrami"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Title and Description */}
          <div className="text-center mb-16 animate-bounce-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600 mb-4">
              8 MART BAYRAMINGIZ BILAN TABRIKLAYMIZ!
            </h1>
            <p className="text-xl sm:text-2xl text-purple-900 font-semibold mb-2">
              Bizning o'quvchilarimizdan maxsus tabrik
            </p>
            <p className="text-lg text-purple-700 max-w-2xl mx-auto">
              Har qanday kartani bosib, har bir o'quvchining o'zining ajoyib onasi uchun yozgan samimiy slayd-shou va chiroyli maktubni ko'ring
            </p>
          </div>
        </div>
      </section>

      {/* Students Grid Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {students.map((student, index) => (
              <Link
                key={student.id}
                href={`/student/${student.id}`}
                className={`group relative h-80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer block ${
                  animateCards ? "animate-bounce-in" : "opacity-0"
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Card Background Image */}
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 text-4xl animate-spin-slow opacity-80">💕</div>
                <div className="absolute bottom-4 left-4 text-3xl animate-float opacity-70">✨</div>

                {/* Student Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">{student.name}</h3>
                  <div className="flex items-center gap-2 text-pink-200 group-hover:text-yellow-300 transition-colors">
                    <span className="text-sm font-semibold">Tabrikni ko'rish</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400/0 via-pink-400/0 to-pink-400/0 group-hover:from-pink-400/20 group-hover:via-pink-400/10 group-hover:to-pink-400/20 transition-all duration-500"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-300 via-yellow-200 to-pink-300 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-900 mb-4">
            8-mart bayrami muborak! 🌸
          </h2>
          <p className="text-lg text-purple-800 mb-6">
            Barcha ajoyib ayollarga, bizni ilhomlantirgan, qo'llab-quvvatlagan va dunyomizni yorqinroq qilgan ayollarga.
          </p>
          <div className="flex justify-center gap-4 text-4xl">
            <span className="animate-float">💐</span>
            <span className="animate-float" style={{ animationDelay: "0.5s" }}>💕</span>
            <span className="animate-float" style={{ animationDelay: "1s" }}>🌺</span>
            <span className="animate-float" style={{ animationDelay: "1.5s" }}>✨</span>
          </div>
          <p className="text-sm text-purple-900 mt-4 font-bold bg-white/80 px-4 py-2 rounded-full inline-block">
            9-B sinf tomonidan yaratilgan
          </p>
        </div>
      </section>
    </div>
  );
}
