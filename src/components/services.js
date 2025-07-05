'use client';

import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: 'Anxiety & Stress Management',
      description:
        'Learn to manage and reduce daily anxiety, social discomfort, and chronic stress. I use cognitive-behavioral techniques and mindfulness strategies to help you regain emotional control and inner calm.',
      image: '/services/anxiety.jpg',
    },
    {
      title: 'Relationship & Couples Counseling',
      description:
        'Whether you’re facing communication breakdowns or trust issues, we’ll work together to strengthen connection, restore trust, and build healthier patterns. Ideal for couples or individuals navigating relational stress.',
      image: '/services/relation.jpg',
    },
    {
      title: 'Trauma Recovery & Healing',
      description:
        'Move beyond the pain of past trauma with a safe, compassionate, and structured approach. I incorporate evidence-based trauma therapies tailored to your pace and needs.',
      image: '/services/trauma.jpg',
    },
   
  ];

  return (
    <section id="services" className="bg-blue-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800">Services</h2>
          <p className="mt-2 text-blue-600 text-lg">
            Support for emotional healing, faith-centered growth, and life transformation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 border-t-4 border-blue-300"
            >
              <div className="w-full h-40 relative rounded-md overflow-hidden mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{service.title}</h3>
              <p className="text-blue-900 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
