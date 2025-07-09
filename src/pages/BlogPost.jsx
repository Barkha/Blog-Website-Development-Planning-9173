import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useBlog } from '../context/BlogContext';

const { FiUser, FiClock, FiArrowLeft } = FiIcons;

const BlogPost = () => {
  const { id } = useParams();
  const { getPostById } = useBlog();
  const post = getPostById(id);

  if (!post) {
    return <Navigate to="/" replace />;
  }

  const formatContent = (content) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold mb-xl text-baseline-mountain-view font-display">{line.substring(2)}</h1>;
      } else if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold mb-md mt-2xl text-baseline-mountain-view font-display">{line.substring(3)}</h2>;
      } else if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-bold mb-sm mt-xl text-baseline-mountain-view font-display">{line.substring(4)}</h3>;
      } else if (line.startsWith('```')) {
        return null; // Handle code blocks separately
      } else if (line.trim() === '') {
        return <br key={index} />;
      } else {
        return <p key={index} className="mb-md text-baseline-casting-shadow leading-relaxed">{line}</p>;
      }
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto px-md sm:px-xl lg:px-2xl py-3xl"
    >
      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="flex items-center text-baseline-primary hover:text-baseline-vivid-red-tangelo mb-2xl font-medium"
      >
        <SafeIcon icon={FiArrowLeft} className="h-5 w-5 mr-xs" />
        Back to Posts
      </button>

      {/* Hero Image */}
      <div className="mb-2xl">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Article Header */}
      <header className="mb-2xl">
        <div className="flex items-center space-x-md text-sm text-baseline-casting-shadow mb-md">
          <span className="bg-baseline-primary text-baseline-white px-sm py-xs rounded-full font-medium">
            {post.category}
          </span>
          <div className="flex items-center">
            <SafeIcon icon={FiUser} className="h-4 w-4 mr-xs" />
            {post.author}
          </div>
          <div className="flex items-center">
            <SafeIcon icon={FiClock} className="h-4 w-4 mr-xs" />
            {post.readTime}
          </div>
          <span>{post.date}</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-baseline-mountain-view mb-md font-display">
          {post.title}
        </h1>
        
        <p className="text-xl text-baseline-casting-shadow leading-relaxed">
          {post.excerpt}
        </p>
      </header>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        <div className="text-baseline-casting-shadow leading-relaxed">
          {formatContent(post.content)}
        </div>
      </div>

      {/* Author Info */}
      <div className="mt-3xl pt-2xl border-t border-baseline-gray-200">
        <div className="flex items-center">
          <div className="w-16 h-16 bg-baseline-primary rounded-full flex items-center justify-center text-baseline-white font-bold text-xl mr-md">
            {post.author.charAt(0)}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-baseline-mountain-view">{post.author}</h3>
            <p className="text-baseline-casting-shadow">Content Writer & Developer</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogPost;