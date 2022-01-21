import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AttendeeProfile from './AttendeeProfile';


type AttendanceType = {
  github: string,
  username: string,
  _checked: boolean
}

const AttendedToday = (props: {id: string | undefined}) => {
  const { id } = props;
  const [attendances, setAttendances] = useState<AttendanceType[]>([]);
  
  useEffect(() => {
    const fetchTodayAttendances = async () => {
      try {
        // const response = await axios.get(`http://34.64.124.151:8080/checks/today?id=${id}`);
        // console.log(response.data.data);
        // mock data
        setAttendances([
          {
              "github": "raae7742",
              "username": "혀내",
              "_checked": true
          },
          {
              "github": "mori8",
              "username": "수연",
              "_checked": true
          },
          {
              "github": "whaeundo25",
              "username": "도은",
              "_checked": true
          },
          {
              "github": "songfox00",
              "username": "혜민",
              "_checked": false
          },
          {
              "github": "Jar199",
              "username": "재령",
              "_checked": true
          },
          {
              "github": "dbsdlqls",
              "username": "이빈",
              "_checked": false
          },
          {
              "github": "0hee0",
              "username": "희",
              "_checked": true
          },
          {
              "github": "mori8",
              "username": "수연",
              "_checked": false
          },
          {
              "github": "mori8",
              "username": "수연",
              "_checked": false
          },
          {
              "github": "mori8",
              "username": "수연",
              "_checked": false
          },
          {
              "github": "mori8",
              "username": "수연",
              "_checked": false
          }
      ]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTodayAttendances();
  }, []);

  return (
    <TodayWrapper>
      <SmallTitle>오늘의 출석 현황</SmallTitle>
      <AttendeesWrapper>
        {attendances.map((attendance, index) => {
          return <AttendeeProfile key={index} github={attendance.github} username={attendance.username} _checked={attendance._checked}/>
        })}
      </AttendeesWrapper>
    </TodayWrapper>
  );
}

const TodayWrapper = styled.div`
  text-align: center;
  box-sizing: border-box;
  padding: 2rem 2rem 3rem;
  min-height: 12rem;
  background-color: transparent;
`;

const SmallTitle = styled.h3`
  margin: 0 0 1.6rem;
  font-size: 1.3rem;
  color: #222;
`;

const AttendeesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 1rem 2rem;
  width: min-content;
  margin: 0 auto;
`;


export default AttendedToday;
