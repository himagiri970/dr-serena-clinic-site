'use client';

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function FAQ() {
  const faqs = [
    {
      question: 'Do you accept insurance?',
      answer: 'No, but a superbill is provided for self-submission.',
    },
    {
      question: 'Are online sessions available?',
      answer: 'Yes—all virtual sessions via Zoom.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: '24-hour notice required.',
    },
    {
      question: 'How do I schedule an appointment?',
      answer: 'Use the online booking system or contact me directly.',
    },
    {
      question: 'What is your approach to therapy?',
      answer:
        'I use evidence-based methods like CBT and mindfulness, tailored to your unique needs.',
    },
    {
      question: 'How long are the therapy sessions?',
      answer: 'Each session typically lasts 50 minutes. Longer sessions can be arranged upon request for deeper therapeutic work.',
    },
    {
      question: 'What types of issues do you specialize in?',
      answer:
        'I specialize in anxiety, trauma recovery, relationship challenges, spiritual concerns, and life transitions. My approach is tailored to each individual’s goals and values.',
    },
  ];


  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faqs" className="bg-blue-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-800">Frequently Asked Questions</h2>
          <p className="text-blue-600 mt-2 text-lg">
            Common questions and quick answers.
          </p>
        </div>

        {/* Accordion Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-blue-100"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left text-blue-800 font-semibold hover:bg-blue-100 transition"
              >
                <span>{faq.question}</span>
                {activeIndex === index ? (
                  <FaChevronUp className="text-blue-600" />
                ) : (
                  <FaChevronDown className="text-blue-600" />
                )}
              </button>

              {activeIndex === index && (
                <div className="px-5 pb-4 text-blue-500">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
