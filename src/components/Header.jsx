import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/create', label: 'Write' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-baseline-white border-b border-baseline-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-md sm:px-xl lg:px-2xl">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-xs">
            <img src="/bh-logo.png" alt="Barkha Herman Logo" className="h-10" />
            <span className="text-2xl font-bold text-baseline-mountain-view font-display">Barkha Herman</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-xl">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-sm py-xs rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-baseline-primary bg-baseline-october-haze'
                    : 'text-baseline-casting-shadow hover:text-baseline-primary hover:bg-baseline-october-haze/20'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-xs rounded-md text-baseline-casting-shadow hover:text-baseline-primary hover:bg-baseline-october-haze/20"
          >
            <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-md border-t border-baseline-gray-200"
          >
            <nav className="space-y-xs">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-sm py-xs rounded-md text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-baseline-primary bg-baseline-october-haze'
                      : 'text-baseline-casting-shadow hover:text-baseline-primary hover:bg-baseline-october-haze/20'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;