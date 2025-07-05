'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Valid email is required';
    if (!form.message.trim()) newErrors.message = 'Please tell us what brings you here';
    if (!form.preferredTime.trim()) newErrors.preferredTime = 'Preferred time is required';
    if (!form.agree) newErrors.agree = 'You must agree to be contacted';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', form);
      setSubmitted(true);
      setForm({
        name: '',
        phone: '',
        email: '',
        message: '',
        preferredTime: '',
        agree: false,
      });
      setErrors({});
    }
  };

  return (
    <section id="contact" className="bg-blue-50 py-16 px-4 flex flex-col items-center justify-center transition-all duration-700 ease-in-out">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-xl p-8 md:p-10 transform transition-all duration-700 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center animate-fade-in-up">
          Get in Touch
        </h2>

        {submitted && (
          <div className="mb-6 p-4 text-green-700 bg-green-100 rounded-lg transition-opacity duration-500">
            ✅ Your message has been sent successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { label: 'Name', key: 'name', type: 'text' },
            { label: 'Phone', key: 'phone', type: 'text' },
            { label: 'Email', key: 'email', type: 'email' },
            { label: 'Preferred time to reach you', key: 'preferredTime', type: 'text' },
          ].map(({ label, key, type }) => (
            <div key={key} className="transition-all duration-300">
              <label className="block text-blue-800 font-medium">{label} *</label>
              <input
                type={type}
                value={form[key]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className="w-full border border-blue-200 rounded px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
              />
              {errors[key] && <p className="text-red-600 text-sm mt-1">{errors[key]}</p>}
            </div>
          ))}

          {/* Message */}
          <div>
            <label className="block text-blue-800 font-medium">What brings you here? *</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows="4"
              className="w-full border border-blue-200 rounded px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            />
            {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Agreement */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              checked={form.agree}
              onChange={(e) => setForm({ ...form, agree: e.target.checked })}
              className="mt-1"
            />
            <label className="text-blue-800">I agree to be contacted *</label>
          </div>
          {errors.agree && <p className="text-red-600 text-sm -mt-3">{errors.agree}</p>}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Contact Info Block */}
      <div className="mt-10 p-6 md:p-8 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl shadow-lg text-blue-900 space-y-4 max-w-3xl w-full transition-all duration-700 ease-in-out">
        <h3 className="text-2xl font-bold text-blue-800 mb-1">Dr. Serena Blake, PsyD</h3>
        <p className="text-blue-700">Clinical Psychologist</p>

        <div className="space-y-1">
          <p><span className="font-medium">📍 Address:</span> 1287 Maplewood Drive, Los Angeles, CA 90026</p>
          <p><span className="font-medium">📞 Phone:</span> (323) 555-0192</p>
          <p>
            <span className="font-medium">✉️ Email:</span>{' '}
            <a
              href="mailto:serena@blakepsychology.com"
              className="text-blue-700 underline hover:text-blue-900 transition"
            >
              serena@blakepsychology.com
            </a>
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-blue-800 mb-1">🕒 Office Hours</h4>
          <ul className="list-disc pl-5 text-blue-700 space-y-1">
            <li><strong>In-person:</strong> Tue & Thu, 10 AM – 6 PM</li>
            <li><strong>Virtual via Zoom:</strong> Mon, Wed & Fri, 1 PM – 5 PM</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
