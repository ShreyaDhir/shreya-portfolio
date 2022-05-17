import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const BlogDetails = () => {
  const { id } = useParams();

  return (
    <Details>
        <Title>Blog Details - { id }</Title>
    </Details>
  )
}

const Details = styled.div`

`;

const Title = styled.h2`
    font-size: 20px;
`;

export default BlogDetails