import React from 'react';

export default function Contact() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <form className="max-w-lg mx-auto flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="p-3 rounded-md text-black" />
        <input type="email" placeholder="Your Email" className="p-3 rounded-md text-black" />
        <textarea placeholder="Your Message" rows="5" className="p-3 rounded-md text-black"></textarea>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-md font-semibold">Send</button>
      </form>
    </section>
  );
}
