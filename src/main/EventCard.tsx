import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { EventCardType } from './main';


const EventCard = (props: EventCardType) => {
  return (
    <StyledEventCard>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>{props.starts} ~ {props.ends}</p>
      <p>{props.participants}명 참여중</p>
    </StyledEventCard>
  );
}

EventCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  starts: PropTypes.string,
  ends: PropTypes.string,
  participants: PropTypes.number,
  status: PropTypes.number
}


const StyledEventCard = styled.div`
  background-color: #fff;
  padding: 1rem;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
  width: 20rem;
`;

export default EventCard;