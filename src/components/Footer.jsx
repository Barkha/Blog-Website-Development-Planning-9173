import React from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiTwitter, FiGithub, FiLinkedin, FiMail } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-baseline-mountain-view text-baseline-white">
      <div className="max-w-7xl mx-auto px-md sm:px-xl lg:px-2xl py-3xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2xl">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-xs mb-md">
              <img src="/bh-logo.png" alt="Barkha Herman Logo" className="h-10" />
              <h3 className="text-2xl font-bold font-display">Barkha Herman</h3>
            </div>
            <p className="text-baseline-october-haze mb-md max-w-md">
              A modern blogging platform where ideas come to life. Share your thoughts, 
              connect with readers, and build your online presence.
            </p>
            <div className="flex space-x-md">
              <a href="#" className="text-baseline-october-haze hover:text-baseline-white transition-colors">
                <SafeIcon icon={FiTwitter} className="h-6 w-6" />
              </a>
              <a href="#" className="text-baseline-october-haze hover:text-baseline-white transition-colors">
                <SafeIcon icon={FiGithub} className="h-6 w-6" />
              </a>
              <a href="#" className="text-baseline-october-haze hover:text-baseline-white transition-colors">
                <SafeIcon icon={FiLinkedin} className="h-6 w-6" />
              </a>
              <a href="#" className="text-baseline-october-haze hover:text-baseline-white transition-colors">
                <SafeIcon icon={FiMail} className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-md">Quick Links</h4>
            <ul className="space-y-xs text-baseline-october-haze">
              <li><a href="#" className="hover:text-baseline-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-baseline-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-baseline-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-baseline-white transition-colors">Write</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-md">Categories</h4>
            <ul className="space-y-xs text-baseline-october-haze">
              <li><a href="#" className="hover:text-baseline-white transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-baseline-white transition-colors">Design</a></li>
              <li><a href="#" className="hover:text-baseline-white transition-colors">Development</a></li>
              <li><a href="#" className="hover:text-baseline-white transition-colors">Lifestyle</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-baseline-casting-shadow mt-2xl pt-2xl text-center text-baseline-october-haze">
          <p className="flex items-center justify-center">
            Made with <SafeIcon icon={FiHeart} className="h-4 w-4 mx-xs text-baseline-primary" /> by Barkha Herman
          </p>
          <p className="mt-xs">&copy; 2024 barkhaherman.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;