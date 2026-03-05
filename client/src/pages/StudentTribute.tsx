import { useParams, useLocation } from "wouter";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Confetti from "@/components/Confetti";

/**
 * Design Philosophy: Vibrant Cartoon Celebration
 * - Slideshow with smooth transitions and playful controls
 * - Letter section with decorative elements
 * - Continuous floating animations
 * - Bouncy, celebratory interactions
 */

interface Student {
  id: string;
  name: string;
  image: string;
  letter: string;
  slideImages: string[];
}

// Sample student data - same as Home page
const students: Student[] = [
  {
    id: "1",
    name: "Sarah",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    letter: "Dear Mom, Thank you for all your love and support. You are my inspiration every single day. Happy Women's Day!",
    slideImages: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
    ],
  },
  {
    id: "2",
    name: "Emma",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    letter: "Mom, you are the strongest woman I know. Thank you for believing in me. I love you so much!",
    slideImages: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop",
    ],
  },
  {
    id: "3",
    name: "Olivia",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    letter: "To my amazing mom, thank you for all the sacrifices. You make the world beautiful. Happy Women's Day!",
    slideImages: [
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop",
    ],
  },
  {
    id: "4",
    name: "Sophia",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    letter: "Mom, you are my hero. Thank you for everything you do. I am so proud to be your daughter!",
    slideImages: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
    ],
  },
  {
    id: "5",
    name: "Isabella",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    letter: "Dear Mom, your love and guidance shaped who I am today. Thank you for being my rock!",
    slideImages: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop",
    ],
  },
  {
    id: "6",
    name: "Mia",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    letter: "Mom, you inspire me every day with your strength and kindness. I love you more than words can say!",
    slideImages: [
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop",
    ],
  },
];

export default function StudentTribute() {
  const params = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [showConfetti, setShowConfetti] = useState(true);

  const student = students.find((s) => s.id === params.id);

  useEffect(() => {
    if (!student) {
      navigate("/404");
      return;
    }
  }, [student, navigate]);

  useEffect(() => {
    if (!autoPlay || !student) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % student.slideImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoPlay, student]);

  if (!student) {
    return null;
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % student.slideImages.length);
    setAutoPlay(false);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + student.slideImages.length) % student.slideImages.length);
    setAutoPlay(false);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 via-pink-50 to-yellow-50">
      {showConfetti && <Confetti />}
      {/* Floating decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 text-6xl animate-float opacity-30">💐</div>
        <div className="absolute top-1/3 right-10 text-5xl animate-float opacity-25" style={{ animationDelay: "1s" }}>💕</div>
        <div className="absolute bottom-1/4 left-1/4 text-5xl animate-float opacity-20" style={{ animationDelay: "2s" }}>⭐</div>
      </div>

      {/* Back Button */}
      <div className="sticky top-0 z-40 bg-gradient-to-r from-pink-300 via-yellow-200 to-pink-300 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-purple-900 hover:text-purple-700 font-bold text-lg transition-colors hover:scale-110 transform"
          >
            <ArrowLeft className="w-6 h-6" />
            Back to All Tributes
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Student Header */}
        <div className="text-center mb-12 animate-bounce-in">
          <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600 mb-2">
            {student.name}'s Tribute
          </h1>
          <p className="text-xl text-purple-900 font-semibold">
            A heartfelt message for Mom
          </p>
        </div>

        {/* Slideshow Section */}
        <div className="mb-16 animate-bounce-in" style={{ animationDelay: "0.1s" }}>
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden group">
            {/* Main Slide */}
            <div className="relative w-full aspect-video bg-gradient-to-br from-pink-100 to-yellow-100">
              <img
                src={student.slideImages[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Slide Counter */}
              <div className="absolute top-4 right-4 bg-pink-500/80 text-white px-4 py-2 rounded-full font-bold text-lg backdrop-blur-sm">
                {currentSlide + 1} / {student.slideImages.length}
              </div>

              {/* Decorative Elements on Slide */}
              <div className="absolute top-4 left-4 text-4xl animate-spin-slow">💕</div>
              <div className="absolute bottom-4 right-8 text-3xl animate-float">✨</div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
              <button
                onClick={prevSlide}
                className="pointer-events-auto bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 hover:shadow-pink-400/50 hover:shadow-2xl"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={nextSlide}
                className="pointer-events-auto bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 hover:shadow-pink-400/50 hover:shadow-2xl"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {student.slideImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    setAutoPlay(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-pink-500 w-8"
                      : "bg-white/60 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Autoplay Toggle */}
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => setAutoPlay(!autoPlay)}
              className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white px-6 py-2 rounded-full font-bold transition-all duration-300 hover:scale-105 transform"
            >
              {autoPlay ? "⏸ Pause Slideshow" : "▶ Play Slideshow"}
            </button>
          </div>
        </div>

        {/* Letter Section */}
        <div className="animate-bounce-in" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            {/* Decorative Letter Background */}
            <div className="absolute -top-8 -left-8 opacity-40">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663402560774/3Qpqw9CUve6nPfccwYuVZS/letter-decoration-GHFgFSwed5emc5L83ddDho.webp"
                alt="Letter decoration"
                className="w-40 h-40 animate-float"
              />
            </div>

            {/* Letter Card */}
            <div className="bg-gradient-to-br from-pink-50 to-yellow-50 border-4 border-pink-300 rounded-3xl p-8 sm:p-12 shadow-2xl relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">💌</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-pink-600">
                  A Letter for Mom
                </h2>
              </div>

              <p className="text-xl sm:text-2xl text-purple-900 leading-relaxed font-semibold italic mb-8 text-center">
                "{student.letter}"
              </p>

              <div className="flex justify-center gap-4 text-3xl">
                <span className="animate-float">💕</span>
                <span className="animate-float" style={{ animationDelay: "0.5s" }}>🌸</span>
                <span className="animate-float" style={{ animationDelay: "1s" }}>✨</span>
              </div>
            </div>

            {/* Decorative Element Bottom Right */}
            <div className="absolute -bottom-8 -right-8 opacity-40">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663402560774/3Qpqw9CUve6nPfccwYuVZS/card-decoration-1-U7LRb7qSDnX5bSicTFt7L6.webp"
                alt="Flower decoration"
                className="w-40 h-40 animate-float"
                style={{ animationDelay: "1.5s" }}
              />
            </div>
          </div>
        </div>

        {/* Navigation to Other Students */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-purple-900 mb-6">
            View More Tributes
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {students.map((s) => (
              <button
                key={s.id}
                onClick={() => navigate(`/student/${s.id}`)}
                className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-110 ${
                  s.id === student.id
                    ? "bg-pink-500 text-white shadow-lg"
                    : "bg-white text-pink-600 border-2 border-pink-300 hover:bg-pink-50"
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-300 via-yellow-200 to-pink-300">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-purple-900 font-semibold mb-4">
            Happy Women's Day! 🌸
          </p>
          <div className="flex justify-center gap-4 text-4xl">
            <span className="animate-float">💐</span>
            <span className="animate-float" style={{ animationDelay: "0.5s" }}>💕</span>
            <span className="animate-float" style={{ animationDelay: "1s" }}>🌺</span>
          </div>
        </div>
      </div>
    </div>
  );
}
