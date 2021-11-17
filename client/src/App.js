import React from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './views/HomeScreen';

function App() {
  return (
    <>
      <Header/>
      <main className="gy-3">
        <Container>
          <HomeScreen/>
        </Container>
      </main>
      <Footer/>
    </>
  );
}

export default App;
