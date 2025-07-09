import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import BlogCard from '../components/BlogCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { useBlog } from '../context/BlogContext';

const Home = () => {
  const { posts, loading } = useBlog();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Hero />
      
      <section id="featured" className="py-4xl bg-baseline-gray-50">
        <div className="max-w-7xl mx-auto px-md sm:px-xl lg:px-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-baseline-mountain-view mb-md font-display">
              Latest Articles
            </h2>
            <p className="text-lg text-baseline-casting-shadow max-w-2xl mx-auto">
              Discover my most recent posts covering technology, design, and personal insights.
            </p>
          </motion.div>

          {posts.length === 0 ? (
            <div className="text-center py-3xl">
              <p className="text-baseline-casting-shadow text-lg">No posts available yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2xl">
              {posts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;