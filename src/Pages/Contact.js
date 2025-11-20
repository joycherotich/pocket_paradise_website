import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Email submit
  const handleEmailSubmit = (e) => {
    e.preventDefault();

    const mailto = `mailto:pocketofparadisetravel@gmail.com?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )}`;

    window.location.href = mailto;
  };

  // SMS submit
  const handleSmsSubmit = (e) => {
    e.preventDefault();

    const smsNumber = '+254722787851';

    const smsBody = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\nMessage: ${form.message}`
    );

    const smsLink = `sms:${smsNumber}?body=${smsBody}`;

    window.location.href = smsLink;
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-2xl shadow-xl mt-12 font-poppins">
      <h2 className="text-4xl font-extrabold text-primary mb-10 text-center tracking-tight">
        Contact Us
      </h2>
      <form className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="name"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-primary/50 transition"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="email"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-primary/50 transition"
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-gray-800 font-semibold mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
            placeholder="Subject of your message"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-primary/50 transition"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows="6"
            placeholder="Write your message here..."
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-primary/50 resize-none transition"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 mt-6">
          <button
            type="submit"
            onClick={handleEmailSubmit}
            className="flex-1 py-4 rounded-xl bg-primary text-white font-extrabold text-lg hover:bg-primary/90 transition shadow-md shadow-primary/30"
          >
            Send via Email
          </button>

          {/* <button
            type="submit"
            onClick={handleSmsSubmit}
            className="flex-1 py-4 rounded-xl bg-secondary text-white font-extrabold text-lg hover:bg-secondary/90 transition shadow-md shadow-secondary/30"
          >
            Send via SMS
          </button> */}
        </div>
      </form>
    </div>
  );
}
