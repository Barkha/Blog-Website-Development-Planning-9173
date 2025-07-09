import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight } = FiIcons;

const Hero = () => {
  return (
    <section className="bg-baseline-mountain-view text-baseline-white">
      <div className="max-w-7xl mx-auto px-md sm:px-xl lg:px-2xl py-4xl">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src="/bh-logo.png" alt="Barkha Herman Logo" className="h-20 mx-auto mb-xl" />
            
            <h1 className="text-4xl md:text-6xl font-bold mb-xl font-display">
              Welcome to <span className="text-baseline-primary">Barkha Herman</span>
            </h1>
            <p className="text-xl md:text-2xl mb-2xl max-w-3xl mx-auto text-baseline-october-haze">
              Discover amazing stories, share your thoughts, and connect with a community of writers and readers.
            </p>
            <div className="flex flex-col sm:flex-row gap-md justify-center">
              <Link
                to="/create"
                className="bg-baseline-primary text-baseline-white px-2xl py-sm rounded-lg font-semibold hover:bg-baseline-vivid-red-tangelo transition-colors inline-flex items-center"
              >
                Start Writing
                <SafeIcon icon={FiArrowRight} className="ml-xs h-5 w-5" />
              </Link>
              <Link
                to="#featured"
                className="border-2 border-baseline-october-haze text-baseline-october-haze px-2xl py-sm rounded-lg font-semibold hover:bg-baseline-october-haze hover:text-baseline-mountain-view transition-colors"
              >
                Explore Posts
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;