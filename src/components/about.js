'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center px-4 py-10"
    >
      <div className="max-w-6xl w-full space-y-10">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-blue-800 mb-2">About Dr. Serena Blake</h2>
          <p className="text-gray-600 text-lg">
            Get to know the person behind your healing journey
          </p>
        </div>

        {/* Grid with Image + Info */}
        <div className="grid md:grid-cols-2 gap-10 items-center bg-white p-6 md:p-10 shadow-lg rounded-xl">
          {/* Left: Doctor's Image */}
          <div className="overflow-hidden rounded-xl shadow-md group">
            <Image
              src="/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop.jpg"
              alt="Dr. Serena Blake"
              width={500}
              height={500}
              className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
            />
          </div>

          {/* Right: Doctor Info */}
          <div className="text-gray-800 space-y-4">
            <h3 className="text-2xl font-bold text-blue-700">Licensed Clinical Psychologist (PsyD)</h3>
            <p className="text-lg leading-relaxed">
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA,
              with eight years of experience and over 500 client sessions. She blends evidence-based
              approaches—like cognitive-behavioral therapy and mindfulness—with compassionate,
              personalized care to help you overcome anxiety, strengthen relationships, and heal from
              trauma.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake
              is committed to creating a safe, supportive space for you to thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
