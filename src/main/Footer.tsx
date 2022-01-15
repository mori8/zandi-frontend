import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Footer(props:any) {
  return (
    <StyledFooter>
      <img src="gdsc_sookmyung_logo.png" alt="" width="180px"/>
      <ContactIcons>
        <a href={'https://www.facebook.com/gdscsookmyung'}><img src="https://img.icons8.com/material/24/000000/facebook-new.png" alt=""/></a>
        <a href={'https://github.com/dsc-sookmyung'}><img src="https://img.icons8.com/material/24/000000/github-2.png" alt=""/></a>
        <a href={'https://dsc-sookmyung.tistory.com'}><i className="material-icons md-18">rss_feed</i></a>

        
      </ContactIcons>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: #ddd;
  padding: 2.4rem;
  box-sizing: border-box;
  margin-top: auto;
  width: 100%;
  font-size: 0.9rem;
`;

const ContactIcons = styled.div`
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 5.4rem;
  & > a { 
    color: #000;
  }
`;

export default Footer;
