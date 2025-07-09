import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useBlog } from '../context/BlogContext';

const { FiSave, FiImage, FiEye } = FiIcons;

const CreatePost = () => {
  const navigate = useNavigate();
  const { addPost } = useBlog();
  const [isPreview, setIsPreview] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    category: 'Technology',
    image: '',
    readTime: '5 min read'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content || !formData.author) {
      alert('Please fill in all required fields');
      return;
    }

    const defaultImage = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop';
    
    addPost({
      ...formData,
      image: formData.image || defaultImage,
      excerpt: formData.excerpt || formData.content.substring(0, 150) + '...'
    });

    alert('Post created successfully!');
    navigate('/');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const formatPreviewContent = (content) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-2xl font-bold mb-md text-baseline-mountain-view font-display">{line.substring(2)}</h1>;
      } else if (line.startsWith('## ')) {
        return <h2 key={index} className="text-xl font-bold mb-sm mt-xl text-baseline-mountain-view font-display">{line.substring(3)}</h2>;
      } else if (line.startsWith('### ')) {
        return <h3 key={index} className="text-lg font-bold mb-xs mt-md text-baseline-mountain-view font-display">{line.substring(4)}</h3>;
      } else if (line.trim() === '') {
        return <br key={index} />;
      } else {
        return <p key={index} className="mb-sm text-baseline-casting-shadow">{line}</p>;
      }
    });
  };

  const categories = ['Technology', 'Design', 'Development', 'Lifestyle', 'Business', 'Science'];

  return (
    <div className="py-4xl bg-baseline-gray-50">
      <div className="max-w-4xl mx-auto px-md sm:px-xl lg:px-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-baseline-mountain-view mb-xl font-display">
            Create New Post
          </h1>
          <p className="text-xl text-baseline-casting-shadow">
            Share your thoughts and ideas with the world
          </p>
        </motion.div>

        <div className="bg-baseline-white rounded-lg shadow-md overflow-hidden">
          <div className="border-b border-baseline-gray-200">
            <div className="flex">
              <button
                onClick={() => setIsPreview(false)}
                className={`px-xl py-sm font-medium ${
                  !isPreview
                    ? 'text-baseline-primary border-b-2 border-baseline-primary'
                    : 'text-baseline-casting-shadow hover:text-baseline-mountain-view'
                }`}
              >
                Write
              </button>
              <button
                onClick={() => setIsPreview(true)}
                className={`px-xl py-sm font-medium flex items-center ${
                  isPreview
                    ? 'text-baseline-primary border-b-2 border-baseline-primary'
                    : 'text-baseline-casting-shadow hover:text-baseline-mountain-view'
                }`}
              >
                <SafeIcon icon={FiEye} className="h-4 w-4 mr-xs" />
                Preview
              </button>
            </div>
          </div>

          {!isPreview ? (
            <form onSubmit={handleSubmit} className="p-xl space-y-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-baseline-mountain-view mb-xs">
                    Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-sm py-xs border border-baseline-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-baseline-primary focus:border-transparent"
                    placeholder="Enter post title"
                  />
                </div>
                <div>
                  <label htmlFor="author" className="block text-sm font-medium text-baseline-mountain-view mb-xs">
                    Author *
                  </label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    required
                    className="w-full px-sm py-xs border border-baseline-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-baseline-primary focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-baseline-mountain-view mb-xs">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-sm py-xs border border-baseline-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-baseline-primary focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="readTime" className="block text-sm font-medium text-baseline-mountain-view mb-xs">
                    Read Time
                  </label>
                  <input
                    type="text"
                    id="readTime"
                    name="readTime"
                    value={formData.readTime}
                    onChange={handleChange}
                    className="w-full px-sm py-xs border border-baseline-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-baseline-primary focus:border-transparent"
                    placeholder="5 min read"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="image" className="block text-sm font-medium text-baseline-mountain-view mb-xs">
                  <SafeIcon icon={FiImage} className="h-4 w-4 inline mr-xs" />
                  Featured Image URL
                </label>
                <input
                  type="url"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full px-sm py-xs border border-baseline-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-baseline-primary focus:border-transparent"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div>
                <label htmlFor="excerpt" className="block text-sm font-medium text-baseline-mountain-view mb-xs">
                  Excerpt
                </label>
                <textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-sm py-xs border border-baseline-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-baseline-primary focus:border-transparent"
                  placeholder="Brief description of your post..."
                />
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium text-baseline-mountain-view mb-xs">
                  Content *
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  rows={15}
                  required
                  className="w-full px-sm py-xs border border-baseline-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-baseline-primary focus:border-transparent font-mono"
                  placeholder="Write your post content here... You can use markdown formatting like:
# Heading 1
## Heading 2
### Heading 3

Regular paragraphs..."
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-baseline-primary text-baseline-white px-xl py-sm rounded-md hover:bg-baseline-vivid-red-tangelo transition-colors font-medium flex items-center"
                >
                  <SafeIcon icon={FiSave} className="h-5 w-5 mr-xs" />
                  Publish Post
                </button>
              </div>
            </form>
          ) : (
            <div className="p-xl">
              <div className="mb-xl">
                <img
                  src={formData.image || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop'}
                  alt="Preview"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="mb-md">
                <span className="bg-baseline-primary text-baseline-white px-sm py-xs rounded-full text-sm font-medium">
                  {formData.category}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-baseline-mountain-view mb-md font-display">
                {formData.title || 'Your Post Title'}
              </h1>
              <p className="text-lg text-baseline-casting-shadow mb-xl">
                {formData.excerpt || 'Your post excerpt will appear here...'}
              </p>
              <div className="prose max-w-none">
                {formData.content ? formatPreviewContent(formData.content) : (
                  <p className="text-baseline-casting-shadow">Your content will appear here...</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatePost;