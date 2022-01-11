import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


type PropsType = {
  close: () => void,
}

type ValueType = {
  name: string,
  content: string,
  started_at: string,
  ended_at: string,
  users: Array<JSON>
}

const CreateEventsModal = (props: PropsType) => {
  const [values, setValues] = useState<ValueType[]>([]);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues(values => values.map(value => (value.name === name ? { ...value, [name]: value } : value)))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);
  }

  return (
    <Modal>
      <CloseButton onClick={props.close}>x</CloseButton>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <StyledLabel>이번 잔디 프로젝트의 이름은 무엇인가요?</StyledLabel>
          <StyledInput></StyledInput>
        </InputWrapper>
        <InputWrapper>
          <StyledLabel>프로젝트에 대한 설명을 적어주세요.</StyledLabel>
          <StyledInput></StyledInput>
        </InputWrapper>
        <InputWrapper>
          <StyledLabel>시작일</StyledLabel>
          <StyledInput></StyledInput>
        </InputWrapper>
        <InputWrapper>
          <StyledLabel>종료일</StyledLabel>
          <StyledInput></StyledInput>
        </InputWrapper>
        <InputWrapper>
          <StyledLabel>이 프로젝트에 함께 할 멤버를 추가해 주세요.</StyledLabel>
          <StyledInput></StyledInput>
        </InputWrapper>
      </form>
    </Modal>
  );
}

const Modal = styled.div`
  width: 40rem;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  border-radius: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  z-index: 99;
`;

const InputWrapper = styled.div`

`;

const StyledLabel = styled.label`

`;

const StyledInput = styled.input`

`;

const CloseButton = styled.button`

`;

export default CreateEventsModal;