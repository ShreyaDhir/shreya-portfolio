import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import useFetch from '../useFetch';

const ProjectDetails = () => {
  const { id } = useParams();
  const { data: projects, isPending, error } = useFetch('http://localhost:8000/projects/' + id)

  return (
    <Details>
        <Title>Project Details - { id }</Title>
        { isPending && <div>Loading...</div>}
        { error && <div>{ error }</div>}
        { projects && (
          <article>
            <h2>{ projects.name }</h2>
            <span>{ projects.tech_stack }</span>
            <button><a href={projects.link.giturl}>{ projects.link.gitText }</a></button>
            <button><a href={projects.link.liveurl}>{ projects.link.liveText }</a></button>
          </article>
        )}
    </Details>
  )
}


const Details = styled.div`

`;

const Title = styled.h2`
    margin-top: 40px;
    font-size: 20px;
`;

export default ProjectDetails;