import React from 'react';
import styled from 'styled-components';

const BlogCreate = () => {
  return (
    <Create>
        <Title>Add a new blog</Title>
    </Create>
  )
}

const Create = styled.div`

`;

const Title = styled.h2`
  font-size: 20px;
  color: f1356d;
  margin-bottom: 8px;
`;

export default BlogCreate