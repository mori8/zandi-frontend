import React from 'react';
import styled from 'styled-components';


type MemberProfileType = {
  key: number,
  name: string,
  username: string,
}

const MemberProfile = (props: MemberProfileType) => {
  return (
    <StyledMemberProfile key={props.key + "_mp"}>
      <ProfileImage src={`https://github.com/${props.username}`.concat(".png")} alt="profile_image" />
      <MemberTextInfoWrapper>
        <MemberName>{props.name}</MemberName>
        <MemberUsername>{props.username}</MemberUsername>
      </MemberTextInfoWrapper>
    </StyledMemberProfile>
  );
}

const StyledMemberProfile = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f7f9;
  border-radius: 4.4rem;
  font-size: 0.8rem;
  height: 3rem;
  margin: 0.4rem;
`;

const MemberTextInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.16rem;
`;

const ProfileImage = styled.img`
  width: 3rem;
  border-radius: 50%;
  margin-right: 0.6rem;
`;

const MemberName = styled.span`
  display: inline-block;
  font-weight: 500;
  line-height: 0.85rem;
  padding-top: 0.3rem;
`;

const MemberUsername = styled.span`
  display: inline-block;
  font-weight: 400;
  color: #666;
  line-height: 0.85rem;
`;

export default MemberProfile;