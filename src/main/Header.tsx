import React from 'react';
import styled from 'styled-components'

// TODO: 회원가입 구현 이후 로그인 정보 표시
const Header = () => {
  return (
    <StyledHeader>
      정원사 눈송이와 함께 <br/>
      1일 1커밋 도전하기 <br/>
      <StyledButton>이벤트 등록하기 &#10141;</StyledButton>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  padding: 4rem;
  font-family: 'Pretendard';
  font-size: 2.8rem;
  font-weight: 700;
  background-color: #666;
  color: white;
`;

const StyledButton = styled.button`
  cursor: pointer;
  font-family: 'Pretendard';
  font-weight: 600;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 1.6rem;
  background: #d3cce3; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #d3cce3, #e9e4f0); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #d3cce3, #e9e4f0);
`;

export default Header;