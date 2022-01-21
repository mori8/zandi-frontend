import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import DeleteEvent from './DeleteEvent';
import EventHeader from './EventHeader';
import AttendedToday from './AttendedToday';
import TotalAttendance from './TotalAttendance';


export type EventInfoPropTypes = {
  id: number,
  title: string;
  description: string;
  start_at: string;
  end_at: string;
  member: {"name": string, "github": string}[];
}

const EventsDetail = (props: any) => {
  const { id } = useParams();
  const [eventInfo, setEventInfo] = React.useState<EventInfoPropTypes>({
    id: Number(id!) * 1,
    title: '자라나라 잔디잔디',
    description: '잔디잔디를 자라자라로 만들어보자! 잔디를 풍성하게 키우면 기분이 좋아져요 어디까지 길어지나 보자 호로록 호로록 냠냠냠',
    start_at: '2022-01-14',
    end_at: '2022-01-31',
    member: [{
      name: '남수연',
      github: 'mori8'
    }, {
      name: '송혜민',
      github: 'songfox00'
    }, {
      name: '김도은',
      github: 'whaeundo25'
    }, {
      name: '윤이빈',
      github: 'dbsdlqls'
    }, {
      name: '홍재령',
      github: 'Jar199'
    }, {
      name: '장현애',
      github: 'raae7742'
    }, {
      name: '서희',
      github: '0hee0'
    }]
  });

  return (
    <Container>
      <EventHeader {...eventInfo} />
      <DeleteEvent id={id} />
      <AttendedToday id={id}/>
      <Zandi>
        <TotalAttendance id={id}/>
      </Zandi>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 103.938px);
`;


const Zandi = styled.div`
  display: flex;
  background-color: #eee;
  padding: 1.6rem;
  font-family: 'Pretendard';
  justify-content: center;
  align-items: center;
  flex: 1;
`;


export default EventsDetail;
