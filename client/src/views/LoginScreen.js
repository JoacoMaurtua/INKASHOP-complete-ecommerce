import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { Login } from '../actions/userActions';
import FormContainer from '../components/FormContainer';

const Loginscreen = ({location}) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const { email, password } = state;

  const redirect = location.search ? location.search.split('=')[1]:'/'

  const submitHandler = (event) => {
    event.preventDefault();
    //USER DISPATCH
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address: </Form.Label>
          <Form.Control
            style={{marginBottom:'1rem'}}
            type="email"
            placeholder="Enter your email"
            value={email}
            //onChange={(event) => setEmail(event.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password: </Form.Label>
          <Form.Control
            style={{marginBottom:'1rem'}}
            type="password"
            placeholder="Enter your password"
            value={email}
            //onChange={(event) => setPassword(event.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Sign In
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          New Customer?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default Loginscreen;
