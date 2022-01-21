import React, { useEffect, useState } from 'react';
import Header from './Header'
import styled from 'styled-components';
import EventCard from './EventCard';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BeatLoader from 'react-spinners/BeatLoader';


export type EventCardType = {
  id: number,
  name: string,
  content: string,
  started_at: string,
  ended_at: string,
  users: {id: number, name: string, github: string}[],
}


const Main = (props: any) => {
  const [liveEvents, setLiveEvents] = useState<EventCardType[]>([]);
  const [completedEvents, setCompletedEvents] = useState<EventCardType[]>([])
  const [scheduledEvents, setScheduledEvents] = useState<EventCardType[]>([])
  const [liveLoading, setLiveLoading] = useState<boolean>(false);
  const [completedLoading, setCompletedLoading] = useState<boolean>(false);
  const [scheduledLoading, setScheduledLoading] = useState<boolean>(false);

  useEffect(() => {
  // useEffect에 첫번째 파라미터로 등록하는 함수에는 async를 사용할 수 없으므로
  // 함수 내부에서 async를 사용하는 새로운 함수를 선언해줘야 함
    const fetchLiveEvents = async () => {
      try {
        setLiveEvents([])
        setLiveLoading(true);
        const response = await axios.get('http://34.64.124.151:8080/events');
        setLiveEvents(response.data.data);
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
        setCompletedEvents(response.data.data);
      } catch (error) {
        console.error(error);
      }
      setCompletedLoading(false);
    }

    const fetchScheduledEvents = async () => {
      try {
        setScheduledEvents([])
        setScheduledLoading(true);
        const response = await axios.get('http://34.64.124.151:8080/events/future');
        setScheduledEvents(response.data.data);
      } catch (error) {
        console.error(error);
      }
      setScheduledLoading(false);
    }

    fetchLiveEvents();
    fetchScheduledEvents();
    fetchCompletedEvents();

  }, [])

  return (
    <>
      <Header />
      <MainWrapper>
        <SmallWrapper>
          <StyledPhrase>현재 가꾸고 있는 잔디</StyledPhrase>
          <StyledDescription>지금 진행중인 잔디 육성 프로젝트를 둘러보고, 직접 참여해 보세요!</StyledDescription>
          <EventCardWrapper>
            {
              !liveLoading ?
              liveEvents.map((event: EventCardType) => {
                return (
                  <Link to={`/${event.id}`}>
                    <EventCard key={event.id} {...event} />
                  </Link>
                )
              }) : (
                <LoaderWrapper>
                  <BeatLoader color='#ddd' size={10}/>
                </LoaderWrapper>
              )
            }
          </EventCardWrapper>
        </SmallWrapper>
        <SmallWrapper>
          <StyledPhrase>예정된 잔디 프로젝트</StyledPhrase>
          <StyledDescription>곧 시작할 파릇파릇한 잔디 프로젝트를 구경하세요.</StyledDescription>
          <EventCardWrapper>
            {
              !scheduledLoading ?
              scheduledEvents.map((event: EventCardType) => {
                return (
                  <Link to={`/${event.id}`}>
                    <EventCard key={event.id} {...event} />
                  </Link>
                )
              }) : (
                <LoaderWrapper>
                  <BeatLoader color='#ddd' size={10}/>
                </LoaderWrapper>
              )
            }
          </EventCardWrapper>
        </SmallWrapper>
        <SmallWrapper>
          <StyledPhrase>완성된 잔디 프로젝트</StyledPhrase>
          <StyledDescription>지난 잔디 육성 프로젝트를 살펴볼 수 있어요.</StyledDescription>
          <EventCardWrapper>
            {
              !completedLoading ?
              completedEvents.map((event: EventCardType) => {
                return (
                  <Link to={`/${event.id}`}>
                    <EventCard key={event.id} {...event} />
                  </Link>
                )
              }) : (
              <LoaderWrapper>
                <BeatLoader color='#ddd' size={10}/>
              </LoaderWrapper>
              )
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
  min-height: 10rem;
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

const LoaderWrapper = styled.div`
  width: 68rem;
  text-align: center;
`;

const StyledPhrase = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Pretendard';
  margin: 3.2rem 0 0;
`;

const StyledDescription = styled.p`
  font-size: 0.95rem;
  font-family: 'Pretendard';
  color: #666;
  margin-bottom: 2rem;
`;

const Loading = styled.div`
  color: #999999;
  font-size: 0.9rem;
`

export default Main;
