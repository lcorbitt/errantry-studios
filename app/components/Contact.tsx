'use client';

import { useRef, useState } from 'react';
import sendEmail from '../utils/send-email';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
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

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target as HTMLInputElement;

    console.log(formData);

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'message') {
      if (value.length < 50) {
        e.target.setCustomValidity('Please provide at least 50 characters.');
      } else {
        e.target.setCustomValidity('');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (form.current) {
      sendEmail(form.current)
        .then(() => {
          setIsLoading(false);
          setFormData({
            name: '',
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
          // Delay the redirect to allow the toast to be visible
        setTimeout(() => {
          router.push('/');
        }, 1000); // Redirect after 1 second
        })
        .catch((error) => {
          setIsLoading(false);
        });
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="bg-black p-16 w-full mx-auto">
      <ToastContainer hideProgressBar={true} />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/80">
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Full Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
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
            {/* <div className="flex items-center">
              <input
                type="checkbox"
                name="subscribe"
                checked={formData.subscribe}
                onChange={handleChange}
                className="mr-2"
              />
              <label>Yes, subscribe to ESTV</label>
            </div> */}
          </div>
        </div>
        <div className="flex justify-end mt-16">
          <button
            type="submit"
            className="bg-cyan-600 text-white px-8 py-2 rounded-lg text-xl uppercase transition-all duration-500 w-fit hover:bg-black hover:text-cyan-600 border border-cyan-600 cursor-pointer"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
              </div>
            ) : (
              'Submit'
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;