import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import CreateEventsModal from '../createEvents/CreateEventsModal';


// TODO: 회원가입 구현 이후 로그인 정보 표시
const Header = () => {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  const openCreateModal = () => {
    setIsModalOpened(true);
  }

  const closeCreateModal = () => {
    setIsModalOpened(false);
  }

  return (
    <StyledHeader>
      <StyledNav>로그인</StyledNav>
      <SmallWrapper>
        <img src="gdsc_sookmyung_logo.png" alt="" width="220px"/> <br/>
        정원사 눈송이와 함께 <br/>
        1일 1커밋 도전하기 <br/>
        <StyledButton onClick={openCreateModal}>이벤트 등록하기 &#10141;</StyledButton>
      </SmallWrapper>
      {isModalOpened && <CreateEventsModal close={closeCreateModal}/>}
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  box-sizing: border-box;
  font-family: 'Pretendard';
  background-color: #ddd;
  color: black;
`;

const SmallWrapper = styled.div`
  padding: 2.4rem 4rem 4rem;
  box-sizing: border-box;
  font-size: 2.6rem;
  font-weight: 700;
`;

const StyledNav = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: max-content;
  text-align: right;
  padding: 1.2rem 1.6rem;
  font-size: 0.9rem;
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