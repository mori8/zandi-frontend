import React from 'react';
import styled from 'styled-components';

type PropsType = {
  github: string,
  username: string,
  _checked: boolean
}

const AttendeeProfile = (props: PropsType) => {
  return (
    <Container checked={props._checked}>
      <ProfileImage src={`https://github.com/${props.github}.png`} alt={`${props.github}`} checked={props._checked}/>
      <Username checked={props._checked}>{props.username}</Username>
    </Container>
  );
}

const Container = styled.div<{checked: boolean}>`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &: before {
    content: "${props => props.checked ? '👑' : ''}";
    font-size: 1.5rem;
    position: absolute;
    top: -20px;
  }
`;

const ProfileImage = styled.img<{checked: boolean}>`
  border-radius: 50%;
  width: 5rem;
  opacity: ${props => props.checked ? 1 : 0.3};
`;

const Username = styled.p<{checked: boolean}>`
  margin: 0.6rem 0 0;
  font-size: 0.9rem;
  font-weight: ${props => props.checked ? 600 : 400};
  color: ${props => props.checked ? '#222' : '#aaa'};
`;

export default AttendeeProfile;