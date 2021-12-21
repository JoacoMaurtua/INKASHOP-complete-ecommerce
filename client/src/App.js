import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './views/HomeScreen';
import ProductScreen from './views/ProductScreen';
import CartScreen from './views/CartScreen';

const App = () => {
  return (
    <Router>
      <Header/>
      <main className="py-3">
        <Container>
          <Route exact path='/' component={HomeScreen}/>
          <Route exact path='/product/:id' component={ProductScreen}/>
          <Route exact path='/cart/:id?' component ={CartScreen} /> 
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;


