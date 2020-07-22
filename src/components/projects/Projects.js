import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectInfo from './ProjectInfo';

const Projects = () => {
  return (
    <div className='container'>
      <h1 className='color-pastel'>Projects</h1>
      <div className='grid-2'>
        {ProjectInfo.map((project) => (
          <ProjectCard key={project.id} data={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
