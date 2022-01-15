import React from 'react';
import styled from 'styled-components';
import { EventInfoPropTypes } from './EventsDetail';
import { COLORS } from '../constants';


const EventHeader = (props: EventInfoPropTypes) => {
  const { id, title, description, start_at, end_at, member } = props;

  return (
    <StyledEventHeader color={COLORS[id % 4]}>
      <LeftWrapper>
        <img src="gdsc_sookmyung_logo_white.png" alt="" width="220px"/> <br/>
        <EventTitle>{title}</EventTitle>
        <EventDescription>{description}</EventDescription>
        <EventDateWrapper>
          <EventDateInfo content={"시작"}>{start_at}</EventDateInfo>
          <EventDateInfo content={"종료"}>{end_at}</EventDateInfo>
        </EventDateWrapper>
      </LeftWrapper>
      <RightWrapper>
        <span>참여자</span>
        <MemberWrapper>
          {member.map((member, index) => 
            <MemberProfileImg
              key={index}
              data-membername={member.name}
              data-membergithub={member.github}
              src={`https://github.com/${member.github}.png`}
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

const EventDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 2rem 0 0;
`;

const EventDateInfo = styled.p<{content: string}>`
  font-size: 0.9rem;
  &:before {
    content: "${(props: {content: string}) => props.content} | ";
    font-weight: 600;
  }
`;

export default EventHeader;
