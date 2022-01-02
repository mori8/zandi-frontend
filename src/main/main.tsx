import React, { useState } from 'react';
import Header from './Header'
import styled from 'styled-components';
import EventCard from './EventCard';

export type EventCardType = {
  id: number,
  title: string,
  description: string,
  starts: string,
  ends: string,
  participants: number,
  status: number,
  color: string,
}

let COLORS = ['#4285f4', '#ea4335', '#fbbc05', '#34a853']

const Main = (props: any) => {
  const [events, setEvents] = useState<EventCardType[]>([
    {
      id: 0,
      title: '자라나라 잔디잔디',
      description: '잔디잔디를 자라자라로 만들어보자! 잔디를 풍성하게 키우면 기분이 좋아져요',
      starts: '2022-01-01',
      ends: '2022-01-14',
      participants: 13,
      status: 1,
      color:COLORS[0]
    }, {
      id: 1,
      title: '숙대 금잔디',
      description: 'GDSC Sookmyung 웹/앱 1팀 잔디 프로젝트',
      starts: '2021-12-01',
      ends: '2021-12-14',
      participants: 7,
      status: 1,
      color:COLORS[1]
    }, {
      id: 2,
      title: '잔디 명란 파스타',
      description: '명란 맛있게 먹는 방법을 연구하는 프로젝트 ',
      starts: '2021-01-01',
      ends: '2021-01-14',
      participants: 7,
      status: 0,
      color:COLORS[2]
    }, {
      id: 3,
      title: 'Google이 후원하는 잔디 육성 프로젝트',
      description: 'GCP 크레딧 좀 지원해 주세요',
      starts: '2022-01-01',
      ends: '2022-01-14',
      participants: 7,
      status: 1,
      color:COLORS[3]
    }, {
      id: 4,
      title: '2주간 리액트 조지는 모임',
      description: '들어올 땐 뉴비지만 나갈 땐 고인물',
      starts: '2022-01-01',
      ends: '2022-01-14',
      participants: 8,
      status: 1,
      color:COLORS[0]
    }, {
      id: 5,
      title: '항상 조져지는 건 나였던 사람들',
      description: '2주동안 스프링한테 조져지는 사람들의 모임',
      starts: '2022-01-01',
      ends: '2022-01-14',
      participants: 5,
      status: 1,
      color:COLORS[1]
    }, {
      id: 6,
      title: '잔디 프로젝트를 가장한 맛집 탐방 모임',
      description: '들어오면 밥드셔야 해요',
      starts: '2022-01-01',
      ends: '2022-01-14',
      participants: 11,
      status: 1,
      color:COLORS[2]
    }
  ])

  return (
    <Wrapper>
      <SmallWrapper>
        <StyledPhrase>현재 가꾸고 있는 잔디</StyledPhrase>
        <EventCardWrapper>
          {
            events.filter(event => event.status === 1).map((event: EventCardType) => {
              return (
                <EventCard key={event.id} {...event} />
              )
            })
          }
        </EventCardWrapper>
      </SmallWrapper>
      <SmallWrapper>
        <StyledPhrase>완성된 잔디</StyledPhrase>
        <EventCardWrapper>
          {
            events.filter(event => event.status === 0).map((event: EventCardType) => {
              return (
                <EventCard key={event.id} {...event} />
              )
            })
          }
        </EventCardWrapper>
      </SmallWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  padding: 0 2rem;
  box-sizing: border-box;
`;

const SmallWrapper = styled.div`
  margin: 2.4rem 0;
`;

const EventCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const StyledPhrase = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Pretendard';
  margin: 3.2rem 0 2rem;
`;

export default Main;
