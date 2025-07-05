'use client';

import Image from 'next/image';
import { FaStar, FaRegCircleCheck } from 'react-icons/fa6';

import RotatingQuote from '../components/RotatingQuote';
import AboutPage from '../components/about';

export default function Hero() {
  return (
    <>
      <section
        className="relative bg-cover bg-center min-h-screen text-white flex items-center justify-center px-6"
        style={{
          backgroundImage: "url('../pexels-simon73-1323550.jpg')",
        }}
      >
        <div className="bg-white/70 backdrop-blur-xl p-8 md:p-12 rounded-xl max-w-4xl text-center space-y-5 shadow-lg">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug text-gray-900">
            Compassionate Therapy for Personal Growth and Well-being
          </h1>

          <p className="text-lg font-medium text-gray-800">
            Begin your journey toward emotional clarity, stronger connections,<br /> 
            and a more fulfilling life.
          </p>

          <p className="text-lg font-semibold mt-4 text-gray-900">
            I’m here to help you with...
          </p>

          <RotatingQuote />

          <div className="flex flex-wrap justify-center gap-4 text-sm mt-4">
            <span className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium">
              <FaStar className="text-yellow-500" /> Top Rated
            </span>
            <span className="text-blue-900 font-bold underline underline-offset-2">8+ Years Experience</span>
            <span className="text-blue-900 font-bold underline underline-offset-2">Verified Testimonials</span>
            <span className="text-blue-900 font-bold underline underline-offset-2">Featured in Media</span>
          </div>

          <button className="mt-6 bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition">
            Start Your Journey
          </button>
        </div>
      </section>
    </>
  );
}
