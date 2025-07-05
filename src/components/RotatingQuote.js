'use client';

import { useEffect, useState } from 'react';
import { FaBullseye  } from 'react-icons/fa6';

export default function RotatingQuote() {
  const quotes = [
    'Greater Purpose in Your Life Direction',
    'Spiritual Growth & Deep Healing',
    'Lasting Inner Peace and Clarity',
    'Stronger Relationships & Boundaries',
    'Faith-Centered Mental Wellness',
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-xl font-semibold text-blue-900 flex justify-center items-center gap-2 transition-all duration-100">
      <FaBullseye  className="text-blue-800" />
      {quotes[index]}
    </p>
  );
}
