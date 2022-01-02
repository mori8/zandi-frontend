import React from 'react';
import styled from 'styled-components'


// TODO: 회원가입 구현 이후 로그인 정보 표시
const Header = () => {
  return (
    <StyledHeader>
      <img src="gdsc_sookmyung_logo.png" alt="" width="220px"/> <br/>
      정원사 눈송이와 함께 <br/>
      1일 1커밋 도전하기 <br/>
      <StyledButton>이벤트 등록하기 &#10141;</StyledButton>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  box-sizing: border-box;
  padding: 4rem;
  font-family: 'Pretendard';
  font-size: 2.6rem;
  font-weight: 700;
  background-color: #ddd;
  color: black;
`;

const StyledButton = styled.button`
  cursor: pointer;
  font-family: 'Pretendard';
  font-weight: 600;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 1.6rem;
  background: rgb(20, 44, 121);
  color: white;
  margin-top: 2rem;
`;

export default Header;