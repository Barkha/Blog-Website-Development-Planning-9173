import React, { createContext, useContext, useState, useEffect } from 'react';

const BlogContext = createContext();

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load sample posts or from localStorage
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      // Sample posts
      const samplePosts = [
        {
          id: 1,
          title: "Getting Started with React Hooks",
          excerpt: "Learn the fundamentals of React Hooks and how they can simplify your component logic.",
          content: `# Getting Started with React Hooks

React Hooks have revolutionized the way we write React components. They allow us to use state and other React features without writing a class component.

## What are Hooks?

Hooks are functions that let you "hook into" React state and lifecycle features from function components. They don't work inside classes — they let you use React without classes.

## Basic Hooks

### useState

The useState hook lets you add state to functional components:

\`\`\`javascript
const [count, setCount] = useState(0);
\`\`\`

### useEffect

The useEffect hook lets you perform side effects in functional components:

\`\`\`javascript
useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);
\`\`\`

## Best Practices

1. Always use hooks at the top level of your React function
2. Only call hooks from React functions
3. Use the ESLint plugin for hooks to catch common mistakes

Hooks make React code more readable and easier to test. Start using them in your next project!`,
          author: "Barkha Herman",
          date: "2024-01-15",
          readTime: "5 min read",
          category: "React",
          image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop"
        },
        {
          id: 2,
          title: "The Future of Web Development",
          excerpt: "Exploring emerging trends and technologies that will shape the future of web development.",
          content: `# The Future of Web Development

Web development is constantly evolving, with new technologies and frameworks emerging regularly. Let's explore what the future holds for web developers.

## Emerging Technologies

### WebAssembly (WASM)
WebAssembly is revolutionizing web performance by allowing near-native speed execution in browsers.

### Progressive Web Apps (PWAs)
PWAs bridge the gap between web and native applications, offering offline functionality and native-like experiences.

### Serverless Architecture
Serverless computing is changing how we deploy and scale web applications.

## Key Trends

1. **AI Integration**: AI-powered development tools and features
2. **Edge Computing**: Bringing computation closer to users
3. **Micro-frontends**: Breaking down monolithic frontend applications
4. **Web3 Technologies**: Decentralized web applications

## Conclusion

The future of web development is exciting, with new possibilities emerging constantly. Stay curious and keep learning!`,
          author: "Barkha Herman",
          date: "2024-01-12",
          readTime: "8 min read",
          category: "Technology",
          image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop"
        },
        {
          id: 3,
          title: "Building Responsive Layouts with CSS Grid",
          excerpt: "Master CSS Grid to create flexible and responsive layouts that work on all devices.",
          content: `# Building Responsive Layouts with CSS Grid

CSS Grid is a powerful layout system that makes it easy to create complex, responsive layouts. Let's explore how to use it effectively.

## Grid Basics

CSS Grid introduces a two-dimensional layout system with rows and columns:

\`\`\`css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto;
  gap: 20px;
}
\`\`\`

## Responsive Design

Use media queries to adapt your grid layout:

\`\`\`css
@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
  }
}
\`\`\`

## Advanced Features

- **Grid Areas**: Define named grid areas for easier layout management
- **Auto-fit and Auto-fill**: Create responsive grids that adapt to content
- **Subgrid**: Create nested grid layouts

## Best Practices

1. Start with mobile-first design
2. Use semantic HTML structure
3. Test across different devices
4. Consider accessibility

CSS Grid, combined with Flexbox, provides everything you need for modern web layouts.`,
          author: "Barkha Herman",
          date: "2024-01-10",
          readTime: "6 min read",
          category: "CSS",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop"
        }
      ];
      setPosts(samplePosts);
    }
    setLoading(false);
  }, []);

  const addPost = (post) => {
    const newPost = {
      ...post,
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
    };
    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
  };

  const getPostById = (id) => {
    return posts.find(post => post.id === parseInt(id));
  };

  const value = {
    posts,
    loading,
    addPost,
    getPostById,
  };

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
};