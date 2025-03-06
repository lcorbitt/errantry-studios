'use client';

import Link from 'next/link';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    productionLocation: '',
    serviceType: '',
    date: '',
    message: '',
    budget: '',
    referral: '',
    subscribe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-black py-14 w-full mx-auto px-32">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/80">
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Full Name*</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-3 bg-black border border-white/50 rounded focus:outline-none focus:border-cyan-600"
                required
              />
            </div>

            <div>
              <label className="block mb-2">Phone*</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 bg-black border border-white/50 rounded focus:outline-none focus:border-cyan-600"
                required
              />
            </div>

            <div>
              <label className="block mb-2">Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-black border border-white/50 rounded focus:outline-none focus:border-cyan-600"
                required
              />
            </div>

            <div>
              <label className="block mb-2">Production Location*</label>
              <input
                type="text"
                name="productionLocation"
                value={formData.productionLocation}
                onChange={handleChange}
                className="w-full p-3 bg-black border border-white/50 rounded focus:outline-none focus:border-cyan-600"
                required
              />
            </div>

            <div>
              <label className="block mb-2">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-3 bg-black border border-white/50 rounded focus:outline-none focus:border-cyan-600"
              />
            </div>
          </div>
          <div className="space-y-4">
          <div>
              <label className="block mb-2">Service Type</label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full p-3 bg-black border border-white/50 rounded focus:outline-none focus:border-cyan-600"
              >
                <option value="">Select a service</option>
                <option value="Events">Events</option>
                <option value="Development & Real Estate">Development & Real Estate</option>
                <option value="Aerial">Aerial</option>
                <option value="Content Library">Content Library</option>
                <option value="Corporate">Corporate</option>
                <option value="Studio">Studio</option>
              </select>
            </div>
            
            <div>
              <label className="block mb-2">Tell Us More*</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 bg-black border border-white/50 rounded focus:outline-none focus:border-cyan-600"
                rows={5}
                required
              />
            </div>

            <div>
              <label className="block mb-2">Budget*</label>
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full p-3 bg-black border border-white/50 rounded focus:outline-none focus:border-cyan-600"
                required
              />
            </div>

            <div>
              <label className="block mb-2">How Did You Hear About Us?*</label>
              <input
                type="text"
                name="referral"
                value={formData.referral}
                onChange={handleChange}
                className="w-full p-3 bg-black border border-white/50 rounded focus:outline-none focus:border-cyan-600"
                required
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="subscribe"
                checked={formData.subscribe}
                onChange={handleChange}
                className="mr-2"
              />
              <label>Yes, subscribe to ESTV</label>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-16">
          <Link href="/about"
            className="bg-cyan-600 text-white px-8 py-2 rounded-lg text-xl uppercase transition-all duration-500 w-fit hover:bg-black hover:text-cyan-600 border border-cyan-600"
          >
            Submit
          </Link>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;