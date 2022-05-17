import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// href="https://twitter.com/ShreyaDhir" 
// 
// 

const About = () => {
  return (
    <Hero>
      <Title>About</Title>
      <TitularIntro>Hi, I'm Shreya.</TitularIntro>
      <p>
        Hello, I’m Shreya. I’m a junior at KIIT, Bhubaneshwar and a <strong>ReactJS</strong> and <strong>React Native</strong> developer. 
        <br />
        <br />
        Contact me on <a href="https://twitter.com/ShreyaDhir"><FontAwesomeIcon size={"xl"} icon={faTwitter} /></a>, <a href="https://github.com/ShreyaDhir"><FontAwesomeIcon size={"xl"} icon={faGithub} /> </a> and <a href="https://www.linkedin.com/in/shreya-dhir/"><FontAwesomeIcon size={"xl"} icon={faLinkedin} /></a>.
        <br />
        <br />
      </p>
    </Hero>
  );
};

const Title = styled.h1`
    
`;

const Hero = styled.div``;

const TitularIntro = styled.h2`
    font-weight: 500;
`;

const Intro = styled.p``;

export default About;
