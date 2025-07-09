import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiClock, FiUser } = FiIcons;

const BlogCard = ({ post, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-baseline-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
    >
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-md left-md">
          <span className="bg-baseline-primary text-baseline-white px-sm py-xs rounded-full text-sm font-medium">
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-xl">
        <div className="flex items-center space-x-md text-sm text-baseline-casting-shadow mb-sm">
          <div className="flex items-center">
            <SafeIcon icon={FiUser} className="h-4 w-4 mr-xs" />
            {post.author}
          </div>
          <div className="flex items-center">
            <SafeIcon icon={FiClock} className="h-4 w-4 mr-xs" />
            {post.readTime}
          </div>
        </div>

        <h2 className="text-xl font-bold text-baseline-mountain-view mb-sm group-hover:text-baseline-primary transition-colors font-display">
          <Link to={`/post/${post.id}`}>
            {post.title}
          </Link>
        </h2>

        <p className="text-baseline-casting-shadow mb-md line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-sm text-baseline-casting-shadow">{post.date}</span>
          <Link
            to={`/post/${post.id}`}
            className="text-baseline-primary hover:text-baseline-vivid-red-tangelo font-medium text-sm"
          >
            Read More →
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;