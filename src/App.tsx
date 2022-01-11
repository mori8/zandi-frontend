import React from 'react';
import Main from './main/main';
import EventsDetail from './eventsDetail/EventsDetail';
import Footer from './main/Footer'
import styled from 'styled-components'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div className="App">
        <BodyWrapper>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/:id/*" element={<EventsDetail/>}/>
          </Routes>
          <Footer/>
        </BodyWrapper>
      </div>
    </Router>
  );
}

const BodyWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  width: 68rem;
  margin: 0 auto;
`;

export default App;
