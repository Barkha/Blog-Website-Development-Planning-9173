import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiPhone, FiMapPin, FiSend } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: "Email",
      content: "hello@baseline.com",
      link: "mailto:hello@baseline.com"
    },
    {
      icon: FiPhone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: FiMapPin,
      title: "Address",
      content: "123 Baseline Street, Design City, DC 12345",
      link: "#"
    }
  ];

  return (
    <div className="py-4xl bg-baseline-gray-50">
      <div className="max-w-7xl mx-auto px-md sm:px-xl lg:px-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-baseline-mountain-view mb-xl font-display">
            Get In Touch
          </h1>
          <p className="text-xl text-baseline-casting-shadow max-w-3xl mx-auto">
            Have a question, suggestion, or just want to say hello? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2xl">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-baseline-white rounded-lg shadow-md p-xl">
              <h2 className="text-2xl font-bold text-baseline-mountain-view mb-xl font-display">Contact Information</h2>
              <div className="space-y-xl">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-baseline-october-haze rounded-full flex items-center justify-center mr-md">
                      <SafeIcon icon={info.icon} className="h-6 w-6 text-baseline-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-baseline-mountain-view mb-xs">{info.title}</h3>
                      <a
                        href={info.link}
                        className="text-baseline-casting-shadow hover:text-baseline-primary transition-colors"
                      >
                        {info.content}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-baseline-white rounded-lg shadow-md p-xl">
              <h2 className="text-2xl font-bold text-baseline-mountain-view mb-xl font-display">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-baseline-mountain-view mb-xs">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-sm py-xs border border-baseline-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-baseline-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-baseline-mountain-view mb-xs">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-sm py-xs border border-baseline-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-baseline-primary focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-baseline-mountain-view mb-xs">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-sm py-xs border border-baseline-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-baseline-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-baseline-mountain-view mb-xs">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full px-sm py-xs border border-baseline-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-baseline-primary focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-baseline-primary text-baseline-white py-sm px-xl rounded-md hover:bg-baseline-vivid-red-tangelo transition-colors font-medium flex items-center justify-center"
                >
                  <SafeIcon icon={FiSend} className="h-5 w-5 mr-xs" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;