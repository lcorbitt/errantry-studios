'use client';

import ContactForm from '../components/Contact';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <h2 className="text-3xl text-center py-8 font-bold">Contact Us</h2>
      <ContactForm />
    </div>
  );
};

export default ContactPage;