import React from 'react';

const BlogCard = (props) => {
  const { title, description, social_image, canonical_url } = props.data;

  return (
    <div className='card'>
      <img style={{ width: '100%' }} src={social_image} alt={title}></img>
      <p>{description}</p>
      <a
        className='btn my-top-1'
        href={canonical_url}
        target='_blank'
        rel='noopener noreferrer'
      >
        Read More
      </a>
    </div>
  );
};

export default BlogCard;
