import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    const blogResults = await axios(
      'https://dev.to/api/articles?username=pswk1'
    );
    const fetchedPosts = blogResults.data;

    if (fetchedPosts.length > 0) {
      setPosts(fetchedPosts);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line
  }, []);

  if (loading) return <p className='all-center'>Loading...</p>;

  return (
    <div className='container my-bot-3'>
      <h1>Blog</h1>
      <div className='grid-2'>
        {posts.map((post) => (
          <BlogCard key={post.id} data={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
