import React from 'react';
import styled from 'styled-components';

function Footer(props:any) {
  return (
    <StyledFooter>
      GDSC Sookmyung
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: #ddd;
  padding: 2rem;
  box-sizing: border-box;
  color: #999;
  margin-top: auto;
  width: 100%;
`;

export default Footer;
