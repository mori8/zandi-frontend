import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import MemberProfile from './MemberProfile';

import 'react-datepicker/dist/react-datepicker.css'


type PropsType = {
  close: () => void,
}

type ValueType = {
  name: string,
  content: string,
}

const CreateEventsModal = (props: PropsType) => {
  const [eventInfo, setEventInfo] = useState<ValueType>({
    name: '',
    content: '',
  });
  const [startDate, setStartDate] = useState<any>(new Date());
  const [endDate, setEndDate] = useState<any>(new Date());
  const [users, setUsers] = useState<Array<{ name: string; github: string; }>>([]);
  const submitButtonRef = useRef<HTMLButtonElement>(null);


  const addMember = async () => {
    const memberName = document.getElementById('member_name') as HTMLInputElement;
    const memberUsername = document.getElementById('member_username') as HTMLInputElement;
    
    if (memberName.value === '' || memberUsername.value === '') {
      alert('이름과 GitHub username을 입력해주세요.');
    } else { 
      try { /* 존재하는 GitHub 계정인지 확인 */
        await axios.get(`https://api.github.com/users/${memberUsername.value}`);
      } catch (err: any) {
        if (err.response && err.response.status === 404) {
          alert("존재하지 않는 GitHub username입니다.");
          return;
        }
      }
      /* 유효한 계정이라면 user 리스트에 추가 */
      const user = {
        name: memberName.value,
        github: memberUsername.value
      }
      setUsers([...users, user]);
    }

    memberName.value = '';
    memberUsername.value = '';
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setEventInfo({ ...eventInfo, [name]: value });
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    submitButtonRef.current!.setAttribute('disabled', 'disabled');
    submitButtonRef.current!.innerText = "생성 중...";
    submitButtonRef.current!.style.backgroundColor = '#ddd';
    submitButtonRef.current!.style.cursor = "not-allowed";
    submitButtonRef.current!.style.color = "#aaa";


    const { name, content } = eventInfo;
    const started_at = startDate.toISOString().split('T')[0];
    const ended_at = endDate.toISOString().split('T')[0];
    // console.log(name, content, started_at, ended_at, stringifiedUsers);

    const url = 'http://34.64.124.151:8080/events';
    const axiosConfig = {
      headers: {
        "Content-Type": "application/json",
      }
    };

    const sendParam = {
      "name": name,
      "content": content,
      "started_at": started_at,
      "ended_at": ended_at,
      "users": users
    };

    axios.post(url, sendParam, axiosConfig).then(res => {
      // console.log(res.data);
      submitButtonRef.current!.removeAttribute("disabled");
      submitButtonRef.current!.innerText = "프로젝트 생성";
      submitButtonRef.current!.style.backgroundColor = "#4285f4";
      submitButtonRef.current!.style.cursor = "pointer";
      submitButtonRef.current!.style.color = "#fff";
      alert('성공적으로 생성되었습니다.');
      window.location.href = '/';
    });
  }

  return (
    <Modal>
      <CloseButton onClick={props.close}>×</CloseButton>
      <h3>아래의 정보를 입력해<br/>새로운 잔디 프로젝트를 생성해 보세요 🌱</h3>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <InputWrapper>
            <StyledLabel>이번 잔디 프로젝트의 이름은 무엇인가요?</StyledLabel>
            <StyledInput name="name" id="name" value={eventInfo.name} onChange={handleChange}></StyledInput><FocusBorder/>
          </InputWrapper>
          <InputWrapper>
            <StyledLabel>프로젝트에 대한 설명을 적어주세요.</StyledLabel>
            <StyledTextArea name="content" id="content" value={eventInfo.content} onChange={handleChange}></StyledTextArea><FocusBorder/>
          </InputWrapper>
          <InputWrapper>
            <StyledLabel>프로젝트 시작 날짜를 설정해 주세요.</StyledLabel>
            <StyledDatePicker selected={startDate} onChange={(date) => setStartDate(date)} selectsStart startDate={startDate} endDate={endDate} /><FocusBorder/>
          </InputWrapper>
          <InputWrapper>
            <StyledLabel>프로젝트 종료 날짜를 설정해 주세요.</StyledLabel>
            <StyledDatePicker selected={endDate} onChange={(date) => setEndDate(date)} selectsEnd startDate={startDate} endDate={endDate} minDate={startDate} /><FocusBorder/>
          </InputWrapper>
          <InputWrapper>
            <StyledLabel>이 프로젝트에 함께 할 멤버를 추가해 주세요.</StyledLabel>
            <AddUserInputWrapper>
              <StyledInput type="text" name="member_name" id ="member_name" onChange={handleChange} placeholder='이름'></StyledInput>
              <StyledInput type="text" name="member_username" id="member_username" onChange={handleChange} placeholder='GitHub Username'></StyledInput>
              <AddUserButton onClick={addMember} type="button">추가</AddUserButton>
            </AddUserInputWrapper>
            <MemberProfileWrapper>
              {
                users.map((user, index) => {
                  return (
                    <MemberProfile key={index} name={user.name} github={user.github} />
                  )}
                )
              }
            </MemberProfileWrapper>
          </InputWrapper>
          <SubmitButton type='submit' ref={submitButtonRef}>프로젝트 생성</SubmitButton>
        </form>
      </FormContainer>
      
    </Modal>
  );
}

const Modal = styled.div`
  width: 36rem;
  padding: 3.2rem 2.8rem;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  border-radius: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  z-index: 99;
  max-height: 75%;
  overflow: scroll;
`;

const FormContainer = styled.div`
`;

const InputWrapper = styled.div`
  position: relative;
  margin: 2.8rem auto;
  width: 60%;
`;

const StyledLabel = styled.label`
  color: #333;
  font-size: 0.95rem;
`;

const FocusBorder = styled.span`
position: absolute; bottom: 0; left: 0; width: 0; height: 2px; background-color: #4285f4; transition: 0.4s;
`;

const StyledInput = styled.input`
  font: 15px/24px 'Muli', sans-serif; color: #333; width: 100%; box-sizing: border-box; letter-spacing: 1px; border: 1px solid #e6e6e6; border-radius: 4px; padding: 0.8rem 0.8rem;
  border: 0;
  padding: 7px 0;
  border-bottom: 1px solid #ccc;
  &:focus {
    outline: none;
  }

  &:focus ~ ${FocusBorder} {
    width: 100%;
    transition: 0.4s;
  }
`;

const StyledTextArea = styled.textarea`
  font: 15px/24px 'Muli', sans-serif; color: #333; width: 100%; box-sizing: border-box; letter-spacing: 1px; border: 1px solid #e6e6e6; border-radius: 4px; padding: 0.8rem 0.8rem;
  border: 0;
  padding: 7px 0;
  border-bottom: 1px solid #ccc;
  &:focus {
    outline: none;
  }

  &:focus ~ ${FocusBorder} {
    width: 100%;
    transition: 0.4s;
  }
`;

const AddUserInputWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const AddUserButton = styled.button`
  width: 6.4rem;
  background-color: #4285f4;
  color: #fff;
  border: none;
  border-radius: 4px;
  height: 2rem;
  cursor: pointer;
`;

const MemberProfileWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #eee;
  padding: 0.4rem;
  border-radius: 1rem;
  margin-top: 1rem;
  min-height: 3.2rem;
  max-height: 12.4rem;
  overflow: scroll;
`;

const SubmitButton = styled.button`
  width: 60%;
  color: #fff;
  background-color: #4285f4;
  border: none;
  margin: 2.8rem auto;
  display: block;
  padding: 1rem 0;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: bold;
  cursor: pointer;
`;

const CloseButton = styled.button`
  display: float;
  float: right;
  background-color: transparent;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
`;

const StyledDatePicker = styled(DatePicker)`
  font: 15px/24px 'Muli', sans-serif; color: #333; width: 100%; box-sizing: border-box; letter-spacing: 1px; border: 1px solid #e6e6e6; border-radius: 4px; padding: 0.8rem 0.8rem;
  border: 0;
  padding: 7px 0;
  border-bottom: 1px solid #ccc;
  &:focus {
    outline: none;
  }

  &:focus ~ ${FocusBorder} {
    width: 100%;
    transition: 0.4s;
  }
`;


export default CreateEventsModal;