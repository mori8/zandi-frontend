import React from 'react';
import Main from './main/main';
import Header from './main/Header'
import Footer from './main/Footer'
import styled from 'styled-components'


const App = () => {
  return (
    <div className="App">
      <Wrapper>
        <Header/>
        <Main/>
        <Footer/>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;


export default App;
