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
  status: number
}

const Main = (props: any) => {
  const [events, setEvents] = useState<EventCardType[]>([
    {
      id: 0,
      title: '자라나라 잔디잔디',
      description: '잔디잔디를 자라자라로 만들어보자! 잔디를 풍성하게 키우면 기분이 좋아져요',
      starts: '2022-01-01',
      ends: '2022-01-14',
      participants: 13,
      status: 1
    }, {
      id: 1,
      title: '숙대 금잔디',
      description: 'GDSC Sookmyung 웹/앱 1팀 잔디 프로젝트',
      starts: '2021-12-01',
      ends: '2021-12-14',
      participants: 7,
      status: 1
    }, {
      id: 2,
      title: '잔디 명란 파스타',
      description: '명란 맛있게 먹는 방법을 연구하는 프로젝트 ',
      starts: '2021-01-01',
      ends: '2021-01-14',
      participants: 7,
      status: 0
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
  padding: 0 2.4rem;
`;

const SmallWrapper = styled.div`
  margin: 2.4rem 0;
`;

const EventCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

const StyledPhrase = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Pretendard';
  margin: 3.2rem 0 2rem;
`;

export default Main;