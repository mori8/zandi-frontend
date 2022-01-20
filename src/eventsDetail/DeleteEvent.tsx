import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const DeleteEvent = (props: {id: string | undefined}) => {
  const { id } = props;

  const confirmDelete = () => {
    if (window.confirm("정말로 잔디 프로젝트를 삭제하겠습니까? 삭제하면 복구할 수 없습니다.")) {
      deleteEvent();
    } else {
      return;
    }
  };

  const deleteEvent = () => {
    axios.delete(`http://34.64.124.151:8080/events?id=${id}`).then(res => {
      console.log(res);
      alert('삭제되었습니다.');
      window.location.href = '/';
    }).catch(err => {
      console.log(err);
      alert('삭제에 실패했습니다. 다시 시도해 주세요.');
    })
  };

  return (
    <DeleteEventButton onClick={confirmDelete}>
      프로젝트 삭제
    </DeleteEventButton>
  );
}

const DeleteEventButton = styled.button`
  background-color: #ea4335;
  border: none;
  color: white;
  border-radius: 4px;
  padding: 0.6rem 1.2rem;
`;

export default DeleteEvent;