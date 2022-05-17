import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProjectList = ({ projects, title }) => {
  return (
    <ProjectLayout>
        <h1>{title}</h1>
        {projects.map((project) => (
            <ProjectItem key={project.id}>
              <Link to={`/projects/${project.id}`}>
                <ProjectTitle>{project.name}</ProjectTitle>
                <p>Tech Stack Used: { project.tech_stack}</p>
              </Link>
            </ProjectItem>
      ))}
    </ProjectLayout>
  )
}

const ProjectLayout = styled.div`

`;

const ProjectItem = styled.div`
  padding: 10px 20px;
  margin: 20px 10px;
  

  &:hover {
    box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
  }
`;

const ProjectTitle = styled.h2`
  font-size: 20px;
  color: f1356d;
  margin-bottom: 8px;
`;

export default ProjectList;