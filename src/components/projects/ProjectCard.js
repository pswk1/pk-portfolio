import React from 'react';

const ProjectCard = (props) => {
  const { name, emoji, description, repo, deploy } = props.data;

  return (
    <div className='card'>
      <h2>
        {emoji}&nbsp;{name}&nbsp;{emoji}
      </h2>
      <p>{description}</p>
      <a
        className='btn my-top-1'
        href={repo}
        target='_blank'
        rel='noopener noreferrer'
      >
        Repo
      </a>{' '}
      <a
        className='btn my-top-1'
        href={deploy}
        target='_blank'
        rel='noopener noreferrer'
      >
        Deploy
      </a>
    </div>
  );
};

export default ProjectCard;
