import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const handleClick = () => {
    console.log("hello, world");
}

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">Shreya (she/her)</Logo>
      <Links>
        <NavLinks to="/">Home</NavLinks>
            <New
                target="_blank"
                href="https://drive.google.com/file/d/1VP-DZfohMx2iSlzZrw8JU5nxvBzVJeQ9/view?usp=sharing"
                onClick={handleClick()}
            >
          {" "}
          Resume
        </New>
      </Links>
    </Nav>
  );
}



const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 600px;
    margin: 10px auto;
    border-bottom: 1px solid #f2f2f2;
    font-size: 1.2rem;
    cursor: pointer;
`;

const Logo = styled(Link)`
    padding: 20px 0;
    color: rgb(248, 73, 73);
    text-decoration: none;
`;

const Links = styled.li`
    display: flex;
`;

const NavLinks = styled(Link)`
    margin: 1px 10px;
    padding: 10px;
    text-decoration: none;
    cursor: pointer;
`;

const New = styled.a`
    display: flex;
    background-color: rgb(248, 73, 73);
    color: #ffffff;
    border-radius: 15px;
    font-size: 15px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    text-decoration: none;
    text-align : center;
    padding: 12px 10px;

    &:hover {
        background-color: #ffffff;
        color: rgb(248, 73, 73);
        font-weight: 500;
        border: 1.5px solid rgb(248, 73, 73);
    }
`;

export default Navbar;