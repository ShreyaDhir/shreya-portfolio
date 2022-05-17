import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Divider from "@mui/material/Divider";

import ProjectList from './Projects/ProjectList';
import BlogList from './Blogs/BlogList';

import useFetch from './useFetch';
import About from './About';

// Icons in Json: https://gist.github.com/sakalauskas/b0c5049d5dc349713a82f1cb2a30b2fa
  /* Practice */
  /* Practice */

const Landing = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch(
    "https://my-json-server.typicode.com/ShreyaDhir/dummy-api/blogs"
  );
  const { data: projects } = useFetch(
    "https://my-json-server.typicode.com/ShreyaDhir/dummy-api/projects"
  );

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id)
  //   setBlogs(newBlogs);
  // };


  return (
    <Content>
      <About />
      <Divider sx={{ mb: 2 }} />
      {error && <div>{error}</div>}
      {isPending && <Spinner>Loading...</Spinner>}
      {projects && <ProjectList projects={projects} title="Projects" />}
      {blogs && <BlogList blogs={blogs} title="Blogs" />}
      <Divider sx={{ mt: 2 }} />
    </Content>
  );
}

const Content = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
`;

const Spinner = styled.div`

`;

// border: 1px solid #818582;

export default Landing; 