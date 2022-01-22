import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import CreateEventsModal from '../createEvents/CreateEventsModal';
import { Link } from 'react-router-dom';


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
        <StyledLoginHref>
          <Link to="/login">로그인</Link>
        </StyledLoginHref>
      <SmallWrapper>
        <img src="gdsc_sookmyung_logo.png" alt="" width="220px"/> <br/>
        정원사 눈송이와 함께 <br/>
        매일 성장하는 나를 기록해요 <br/>
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
  background-color: #fff;
  color: black;
  text-decoration: none;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 15%;
    left: -5%;
    z-index: 1;
    background-image: url('gardender_noonsong.jpg');
    background-size: 35%;
    background-transformation: scaleX(-1);
    background-repeat: no-repeat;
    transform: scaleX(-1);
  }
`;

const SmallWrapper = styled.div`
  padding: 1.6rem 3.6rem 3.2rem;
  box-sizing: border-box;
  font-size: 2.2rem;
  font-weight: 700;
`;

const StyledLoginHref = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: max-content;
  text-align: right;
  padding: 1.2rem 1.6rem;
  font-size: 0.9rem;
  & > a {
    color: #333;
    text-decoration: none;
  }

`;

const StyledButton = styled.button`
  cursor: pointer;
  font-family: 'Pretendard';
  font-weight: 600;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 1.6rem;
  background-color: #4285f4;; 
  color: white;
  margin-top: 2rem;
`;

export default Header;