import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { EventCardType } from './main';


const EventCard = (props: EventCardType) => {
  return (
    <StyledEventCard color={props.color}>
      <StyledEventTitle>{props.title}</StyledEventTitle>
      <StyledDiscription>{props.description}</StyledDiscription>
      <BottomWrapper>
        <StyledDates>{props.starts} ~ {props.ends}</StyledDates>
        <PhraseWrapper>
          <i className="material-icons md-18">groups</i> <span>ㅤ{props.participants}</span>
        </PhraseWrapper>
      </BottomWrapper>
      <CornerButton color={props.color}>
        <StyledArrow className="go-arrow">
          →
        </StyledArrow>
      </CornerButton>
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
  status: PropTypes.number,
  color: PropTypes.string,
}


const StyledEventCard = styled.div`
  display: block;
  cursor: pointer;
  position: relative;
  max-width: 262px;
  background-color: #f5f7f9;
  border-radius: 4px;
  padding: 24px 24px;
  margin: 12px;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: ${props => props.color};
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.25s ease-out;
  }

  &:hover:before {
    transform: scale(25);
  }

  &:hover {
    p {
      transition: all 0.3s ease-out;
      color: rgba(255, 255, 255, 0.8);
    }
    h3 {
      transition: all 0.3s ease-out;
      color: #ffffff;
    }
    div {
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;

const StyledDiscription = styled.p`
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap:break-word; 
  line-height: 24px;
  height: 48px;
  margin-bottom: 4px;
  font-size: 0.9rem;
`;

const StyledEventTitle = styled.h3`
  font-size: 1.2rem;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  margin: 1rem 0;
`;

const StyledDates = styled.p`
  font-size: 0.8rem;
  color: #333;
`;

const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CornerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 32px;
  height: 32px;
  overflow: hidden;
  top: 0;
  right: 0;
  background-color: ${props => props.color};
  border-radius: 0 4px 0 32px;
`;

const StyledArrow = styled.div`
  margin-top: -4px;
  margin-right: -4px;
  color: white;
  font-family: courier, sans;
`;

const PhraseWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #333;
  font-size: 0.8rem;
`;

export default EventCard;