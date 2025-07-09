import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTarget, FiUsers, FiTrendingUp, FiHeart } = FiIcons;

const About = () => {
  const features = [
    {
      icon: FiTarget,
      title: "My Mission",
      description: "To share valuable insights and stories that inspire, educate, and connect with readers worldwide."
    },
    {
      icon: FiUsers,
      title: "Community",
      description: "Building a vibrant community of readers and fellow writers passionate about meaningful content."
    },
    {
      icon: FiTrendingUp,
      title: "Growth",
      description: "Continuously developing my craft and helping others grow through engaging and thoughtful content."
    },
    {
      icon: FiHeart,
      title: "Passion",
      description: "Driven by a deep passion for storytelling and the power of words to transform perspectives."
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
            About Barkha Herman
          </h1>
          <p className="text-xl text-baseline-casting-shadow max-w-3xl mx-auto">
            Welcome to my personal corner of the web. This blog is where I share my thoughts, 
            experiences, and insights on topics that matter to me and hopefully to you too.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2xl mb-4xl">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-baseline-white p-xl rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-baseline-october-haze rounded-full flex items-center justify-center mx-auto mb-md">
                <SafeIcon icon={feature.icon} className="h-8 w-8 text-baseline-primary" />
              </div>
              <h3 className="text-xl font-semibold text-baseline-mountain-view mb-sm font-display">{feature.title}</h3>
              <p className="text-baseline-casting-shadow">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-baseline-white rounded-lg shadow-md p-2xl md:p-3xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3xl items-center">
            <div>
              <h2 className="text-3xl font-bold text-baseline-mountain-view mb-xl font-display">My Story</h2>
              <p className="text-baseline-casting-shadow mb-md">
                I started this blog as a way to document my journey, share my experiences, and 
                connect with like-minded individuals. Writing has always been my passion, and this 
                platform allows me to express myself while hopefully providing value to readers.
              </p>
              <p className="text-baseline-casting-shadow mb-md">
                With a background in technology and a love for creative expression, my content spans 
                various topics including tech insights, creative writing, and personal reflections on 
                life and growth.
              </p>
              <p className="text-baseline-casting-shadow">
                Thank you for joining me on this journey. I hope my words resonate with you and 
                perhaps inspire you on your own path.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Barkha Herman writing"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;