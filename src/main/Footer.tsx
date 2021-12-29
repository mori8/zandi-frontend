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
  color: #999;
  position: absolute;
  width: 100%;
  bottom: 0;
`;

export default Footer;