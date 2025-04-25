'use client';

import ContactForm from '../components/Contact';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <h2 className="text-3xl text-center py-8 font-bold">Contact Us</h2>
      <p className="text-center text-white/80 max-w-2xl mx-auto mb-8">
        Got a story to tell or an idea to create? Let&apos;s make something great together. <br /> Fill out the form below and we&apos;ll be in touch soon.
      </p>
      <ContactForm />
    </div>
  );
};

export default ContactPage;