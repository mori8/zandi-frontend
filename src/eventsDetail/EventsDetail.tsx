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
    }
  ],
  });

  return (
    <div>
      <EventHeader {...eventInfo} />
      <TodayWrapper>
        <h3>오늘의 출석 현황</h3>
        <TodayAttendances>
          <AttendedToday id={id}/>
        </TodayAttendances>
      </TodayWrapper>
      <Zandi>
        <TotalAttendance id={id}/>
      </Zandi>
      <DeleteEvent id={id} />
    </div>
  );
}

const TodayWrapper = styled.div`
  text-align: center;
  box-sizing: border-box;
  padding: 2rem;
`;

const TodayAttendances = styled.div`
  min-height: 10rem;
`;

const Zandi = styled.div`
  background-color: #eee;
  padding: 1.6rem;
  font-family: 'Pretendard';
`;


export default EventsDetail;
