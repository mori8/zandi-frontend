import React from 'react';
import Main from './main/main';
import EventsDetail from './eventsDetail/EventsDetail';
import Login from './Auth/Login';
import Footer from './main/Footer'
import styled from 'styled-components'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <ContentWrapper className="App">
        <BodyWrapper>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/:id/*" element={<EventsDetail/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
          <Footer/>
        </BodyWrapper>
      </ContentWrapper>
    </Router>
  );
}

const ContentWrapper = styled.div`
  position: relative;
`;

const BodyWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  width: 68rem;
  margin: 0 auto;
  font-family: 'Pretendard';
  backgronud-color: transparent;
`;
//   box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.1) 0px 30px 60px -30px;
export default App;
