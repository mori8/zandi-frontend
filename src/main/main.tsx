import React, { useEffect, useState } from 'react';
import Header from './Header'
import styled from 'styled-components';
import EventCard from './EventCard';
import EventsDetail from '../eventsDetail/EventsDetail';
import { Link, Routes, Route } from 'react-router-dom';
import axios from 'axios';


export type EventCardType = {
  id: number,
  name: string,
  content: string,
  started_at: string,
  ended_at: string,
  user_size: number
}


const Main = (props: any) => {
  const [liveEvents, setLiveEvents] = useState<EventCardType[]>([]);
  const [completedEvents, setCompletedEvents] = useState<EventCardType[]>([])
  const [liveLoading, setLiveLoading] = useState<boolean>(false);
  const [completedLoading, setCompletedLoading] = useState<boolean>(false);

  useEffect(() => {
    // useEffect에 첫번째 파라미터로 등록하는 함수에는 async를 사용할 수 없으므로
    // 함수 내부에서 async를 사용하는 새로운 함수를 선언해줘야 함
    const fetchLiveEvents = async () => {
      try {
        setLiveEvents([])
        setLiveLoading(true);
        const response = await axios.get('http://34.64.124.151:8080/events');
        setLiveEvents(response.data.data);
        // console.log(response.data.message);
      } catch (error) {
        console.error(error);
      }
      setLiveLoading(false);
    }

    const fetchCompletedEvents = async () => {
      try {
        setCompletedEvents([])
        setCompletedLoading(true);
        const response = await axios.get('http://34.64.124.151:8080/events/past');
        setLiveEvents(response.data.data);
        // console.log(response.data.message);
      } catch (error) {
        console.error(error);
      }
      setCompletedLoading(false);
    }

    fetchLiveEvents();
    fetchCompletedEvents();
  }, [])

  return (
    <>
      <Header />
      <MainWrapper>
        <SmallWrapper>
          <StyledPhrase>현재 가꾸고 있는 잔디</StyledPhrase>
          <EventCardWrapper>
            {
              !liveLoading ?
              liveEvents.map((event: EventCardType) => {
                return (
                  <Link to={`/${event.id}`}>
                    <EventCard key={event.id} {...event} />
                  </Link>
                )
              }) : <Loading>Loading...</Loading>
            }
          </EventCardWrapper>
        </SmallWrapper>
        <SmallWrapper>
          <StyledPhrase>완성된 잔디</StyledPhrase>
          <EventCardWrapper>
            {
              !completedLoading ?
              completedEvents.map((event: EventCardType) => {
                return (
                  <Link to={`/${event.id}`}>
                    <EventCard key={event.id} {...event} />
                  </Link>
                )
              }) : <Loading>Loading...</Loading>
            }
          </EventCardWrapper>
        </SmallWrapper>
      </MainWrapper>
    </>
  );
}

const MainWrapper = styled.main`
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

  & {
    a {
      text-decoration: none;
      color: black;
    }
  }
`;

const StyledPhrase = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Pretendard';
  margin: 3.2rem 0 2rem;
`;

const Loading = styled.div`
  color: #999999;
  font-size: 0.9rem;
`

export default Main;
