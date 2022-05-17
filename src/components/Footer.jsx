import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Foot>
      <p>© 2022</p>
      <p>All rights reserved.</p>
      <p> Made with 💙 and ⚛️ (React.js)</p>
    </Foot>
  );
}

const Foot = styled.section`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Footer