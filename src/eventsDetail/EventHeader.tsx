import React from 'react';
import styled from 'styled-components';
import { EventInfoPropTypes } from './EventsDetail';
import { COLORS } from '../constants';


const EventHeader = (props: EventInfoPropTypes) => {
  const { id, title, description, start_at, end_at, member } = props;

  const showMemberInfo = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    const MemberDetailBox = document.createElement('div');
    MemberDetailBox.innerHTML = `<p style="margin: 0 0 0.1rem; padding: 0;"}>${e.currentTarget.dataset.membername}</p><p style="margin: 0; padding: 0; font-weight: 400;">${e.currentTarget.dataset.membergithub}</p>`;
    MemberDetailBox.setAttribute('id', 'member-detail-box');
    MemberDetailBox.style.position = 'absolute';
    MemberDetailBox.style.top = `${e.currentTarget.offsetTop + e.currentTarget.offsetHeight + 10}px`;
    MemberDetailBox.style.padding = '0.6rem 1rem';
    MemberDetailBox.style.left = `${e.currentTarget.offsetLeft}px`;
    MemberDetailBox.style.backgroundColor = '#fff';
    MemberDetailBox.style.boxShadow = '0 0 0.5rem 0 rgba(0,0,0,0.2)';
    MemberDetailBox.style.borderRadius = '4px';
    MemberDetailBox.style.fontSize = "0.8rem";
    MemberDetailBox.style.color = '#333';
    MemberDetailBox.style.lineHeight = '1';
    const TargetElement = document.getElementById('member-wrapper');
    TargetElement!.appendChild(MemberDetailBox);
    // alert(`${e.currentTarget.dataset.membername}님의 깃허브 주소는 ${e.currentTarget.dataset.membergithub}입니다.`);
  }

  const removeMemberInfo = (e: React.MouseEvent<HTMLImageElement>) => {
    const MemberDetailBox = document.getElementById('member-detail-box');
    if (MemberDetailBox) {
      MemberDetailBox.remove();
    }
  }

  return (
    <StyledEventHeader color={COLORS[id % 4]}>
      <LeftWrapper>
        <img src="gdsc_sookmyung_logo_white.png" alt="" width="220px"/> <br/>
        <EventTitle>{title}</EventTitle>
        <EventDescription>{description}</EventDescription>
        <EventDateWrapper>
          <EventDateInfo content={"시작"}>{start_at}</EventDateInfo>
          <EventDateInfo content={"종료"}>{end_at}</EventDateInfo>
          <EventDDay>{Math.floor((new Date(end_at).getTime() - new Date().getTime()) /(1000 * 60 * 60 * 24))}</EventDDay>
        </EventDateWrapper>
      </LeftWrapper>
      <RightWrapper>
        <span>참여자</span>
        <MemberWrapper id={"member-wrapper"}>
          {member.map((member, index) => 
            <MemberProfileImg
              key={index}
              data-membername={member.name}
              data-membergithub={member.github}
              src={`https://github.com/${member.github}.png`}
              onMouseOver={showMemberInfo}
              onMouseLeave={removeMemberInfo}
              />
          )}
        </MemberWrapper>
      </RightWrapper>
    </StyledEventHeader>
  );
}

const StyledEventHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props: any) => props.color};
  padding: 4rem;
  color: #fff;
  box-sizing: border-box;
  font-family: 'Pretendard';
  width: 100%;
`;

const LeftWrapper = styled.div`
  width: 60%;
`;

const RightWrapper = styled.div`
  font-weight: bold;
  margin-top: 33.2px;
`;

const MemberWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0.4rem;
  margin-top: 0.8rem;
`;

const MemberProfileImg = styled.img`
  width: 50px;
  border-radius: 50%;
  position: relative;
`;

const EventTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 900;
  margin: 0;
`;

const EventDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
`;

const EventDDay = styled.p`
  font-weight: bold;
  &::before {
    content: '프로젝트 종료까지 D-';
  }
`;

const EventDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  font-size: 0.9rem;
  margin: 2rem 0 0;
`;

const EventDateInfo = styled.p<{content: string}>`
  &:before {
    content: "${(props: {content: string}) => props.content} | ";
    font-weight: 600;
  }
`;

export default EventHeader;
