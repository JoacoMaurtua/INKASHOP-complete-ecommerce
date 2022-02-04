import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './views/HomeScreen';
import ProductScreen from './views/ProductScreen';
import CartScreen from './views/CartScreen';
import LoginScreen from './views/LoginScreen';
import RegisterScreen from './views/RegisterScreen';
import ProfileScreen from './views/ProfileScreen';

const App = () => {
  return (
    <Router>
      <Header/>
      <main className="py-3">
        <Container>
          <Route path='/register' component={RegisterScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/product/:id' component={ProductScreen}/>
          <Route path='/cart/:id?' component ={CartScreen} />
          <Route path='/' component={HomeScreen} exact/> 
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;


