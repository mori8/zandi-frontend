import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

type AttendanceType = {
  username: string,
  attendance: {date: string, _checked: boolean}[]
}

const TotalAttendance = (props: {id: string | undefined}) => {
  const { id } = props;
  const [members, setMembers] = useState<string[]>(["혀내", "수연"]);
  const [dates, setDates] = useState<string[]>(["2022-01-10", "2022-01-11", "2022-01-12", "2022-01-13", "2022-01-14", "2022-01-15", "2022-01-16", "2022-01-17", "2022-01-18", "2022-01-19"]);
  const [checks, setChecks] = useState<{[username: string]: {[date: string]: boolean}}>({});
  
  useEffect(() => {
    const fetchTodayAttendances = async () => {
      try {
        // const response = await axios.get(`http://34.64.124.151:8080/checks?id=${id}`);
        // console.log(response.data.data);
        
        // mockup data
        const attendances = ([
          {
            "username": "혀내",
            "attendance": [
                {
                    "date": "2022-01-10",
                    "_checked": true
                },
                {
                    "date": "2022-01-11",
                    "_checked": true
                },
                {
                    "date": "2022-01-12",
                    "_checked": true
                },
                {
                    "date": "2022-01-13",
                    "_checked": true
                },
                {
                    "date": "2022-01-14",
                    "_checked": false
                },
                {
                    "date": "2022-01-15",
                    "_checked": true
                },
                {
                    "date": "2022-01-16",
                    "_checked": true
                },
                {
                    "date": "2022-01-17",
                    "_checked": true
                },
                {
                    "date": "2022-01-18",
                    "_checked": true
                },
                {
                    "date": "2022-01-19",
                    "_checked": true
                }
            ]
        },
        {
            "username": "수연",
            "attendance": [
                {
                    "date": "2022-01-10",
                    "_checked": false
                },
                {
                    "date": "2022-01-11",
                    "_checked": true
                },
                {
                    "date": "2022-01-12",
                    "_checked": true
                },
                {
                    "date": "2022-01-13",
                    "_checked": true
                },
                {
                    "date": "2022-01-14",
                    "_checked": true
                },
                {
                    "date": "2022-01-15",
                    "_checked": true
                },
                {
                    "date": "2022-01-16",
                    "_checked": false
                },
                {
                    "date": "2022-01-17",
                    "_checked": true
                },
                {
                    "date": "2022-01-18",
                    "_checked": true
                },
                {
                    "date": "2022-01-19",
                    "_checked": true
                }
            ]
        },
        {
            "username": "어진",
            "attendance": [
                {
                    "date": "2022-01-10",
                    "_checked": false
                },
                {
                    "date": "2022-01-11",
                    "_checked": true
                },
                {
                    "date": "2022-01-12",
                    "_checked": false
                },
                {
                    "date": "2022-01-13",
                    "_checked": true
                },
                {
                    "date": "2022-01-14",
                    "_checked": true
                },
                {
                    "date": "2022-01-15",
                    "_checked": true
                },
                {
                    "date": "2022-01-16",
                    "_checked": true
                },
                {
                    "date": "2022-01-17",
                    "_checked": false
                },
                {
                    "date": "2022-01-18",
                    "_checked": true
                },
                {
                    "date": "2022-01-19",
                    "_checked": true
                }
            ]
        },
        {
            "username": "사랑",
            "attendance": [
                {
                    "date": "2022-01-10",
                    "_checked": true
                },
                {
                    "date": "2022-01-11",
                    "_checked": true
                },
                {
                    "date": "2022-01-12",
                    "_checked": false
                },
                {
                    "date": "2022-01-13",
                    "_checked": false
                },
                {
                    "date": "2022-01-14",
                    "_checked": true
                },
                {
                    "date": "2022-01-15",
                    "_checked": true
                },
                {
                    "date": "2022-01-16",
                    "_checked": true
                },
                {
                    "date": "2022-01-17",
                    "_checked": true
                },
                {
                    "date": "2022-01-18",
                    "_checked": false
                },
                {
                    "date": "2022-01-19",
                    "_checked": true
                }
            ]
        },
        {
            "username": "이빈",
            "attendance": [
                {
                    "date": "2022-01-10",
                    "_checked": true
                },
                {
                    "date": "2022-01-11",
                    "_checked": false
                },
                {
                    "date": "2022-01-12",
                    "_checked": true
                },
                {
                    "date": "2022-01-13",
                    "_checked": true
                },
                {
                    "date": "2022-01-14",
                    "_checked": true
                },
                {
                    "date": "2022-01-15",
                    "_checked": true
                },
                {
                    "date": "2022-01-16",
                    "_checked": true
                },
                {
                    "date": "2022-01-17",
                    "_checked": true
                },
                {
                    "date": "2022-01-18",
                    "_checked": true
                },
                {
                    "date": "2022-01-19",
                    "_checked": true
                }
            ]
        },
        {
            "username": "춘식",
            "attendance": [
                {
                    "date": "2022-01-10",
                    "_checked": true
                },
                {
                    "date": "2022-01-11",
                    "_checked": true
                },
                {
                    "date": "2022-01-12",
                    "_checked": false
                },
                {
                    "date": "2022-01-13",
                    "_checked": true
                },
                {
                    "date": "2022-01-14",
                    "_checked": true
                },
                {
                    "date": "2022-01-15",
                    "_checked": true
                },
                {
                    "date": "2022-01-16",
                    "_checked": false
                },
                {
                    "date": "2022-01-17",
                    "_checked": false
                },
                {
                    "date": "2022-01-18",
                    "_checked": true
                },
                {
                    "date": "2022-01-19",
                    "_checked": true
                }
            ]
        }
        ])
        setMembers(attendances!.map((checks: AttendanceType) => checks.username));
        setDates(attendances![0].attendance.map((checkInfo: {date: string, _checked: boolean}) => checkInfo.date));
        setChecks(attendances!.reduce((acc: {[username: string]: {[date: string]: boolean}}, cur: AttendanceType) => {
          acc[cur.username] = cur.attendance.reduce((acc: {[date: string]: boolean}, cur: {date: string, _checked: boolean}) => {
            acc[cur.date] = cur._checked;
            return acc;
          }, {});
          return acc;
        }, {}));
      } catch (error) {
        console.error(error);
      }
    }
    
    fetchTodayAttendances();
  }, []);

  return (
    (members && dates && checks) ? (
      <AttendanceTable>
        <thead>
          <th></th>
          {members.map((member: string) => (
            <th key={member}>{member}</th>
          ))}
        </thead>
        <tbody>
          {dates.map((date: string) => {
            return (
              <tr key={date}>
                <DateCell>{date.slice(5, 10)}</DateCell>
                { members.map((member: string) => {
                  const isChecked = checks[member];
                  return (
                    isChecked && <CheckCell key={member} color={isChecked[date] ? "#94df73" : "#EF8181"}/>
                  )
                }
              )}
            </tr>
          )})}
            
        </tbody>
      </AttendanceTable>
    ) : (<p>loading...</p>)
  );
}

const AttendanceTable = styled.table`
  margin: 0 auto;
  border-spacing: 12px;
  border-collapse: separate;
`;

const DateCell = styled.td`
  font-weight: 600;
  width: 48px;
`;

const CheckCell = styled.td`
  width: 52px;
  background-color: ${props => props.color};
  border-radius: 12px;
  height: 26px;
`;


export default TotalAttendance;
