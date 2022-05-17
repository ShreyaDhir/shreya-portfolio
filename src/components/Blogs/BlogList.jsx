import { data } from 'autoprefixer';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// API END POINTS 
/*
    /blogs      GET Fetch all blogs
    /blogs/{id} GET Fetch a single blog
    /blogs     POST Add a new blog
    /blogs/{id} DELETE Delete a blog 
*/

const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <BlogLayout>
        <h1>{title}</h1>
        {blogs.map((blog) => (
            <BlogItem key={blog.id}>
              <Link to={`/blogs/${blog.id}`}>
                <BlogTitle>{blog.title}</BlogTitle>
                <span>{blog.date}</span>
              </Link>
              {/* <button onClick={() => handleDelete(blog.id)}>Delete Blog</button> */}
            </BlogItem>
      ))}
    </BlogLayout>
  )
}

const BlogLayout = styled.div`
  
`;

// const Title = styled.h2`
  
// `;

const BlogItem = styled.div`
  padding: 10px 20px;
  margin: 20px 10px;
  

  &:hover {
    box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
  }
`;

const BlogTitle = styled.h2`
  font-size: 20px;
  color: f1356d;
  margin-bottom: 8px;
`;

export default BlogList;