import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import {useHistory} from 'react-router-dom';
import {saveShippingAddress} from '../actions/cartActions'


const Shippingscreen = () => {

  const cart = useSelector(state => state.cart)
  const {shippingAddress} = cart;

  const [state,setState] = useState({
    address:shippingAddress.address,
    city:shippingAddress.city,
    postalCode:shippingAddress.postalCode,
    country:shippingAddress.country
  });

  const {address,city,postalCode,country} = state;

  const dispatch = useDispatch();

  const history = useHistory();

  const submitHandler = (event) => {
      event.preventDefault();
      dispatch(saveShippingAddress({
        address,
        city,
        postalCode,
        country
      }))
      history.push('/payment')
  }

  const onChangeHandler = (event) => {
    const {name,value} = event.target;
    setState({
      ...state,
      [name]:value
    })
  };

  return (
    <FormContainer>
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
      <Form.Group controlId="address">
          <Form.Label>Address: </Form.Label>
          <Form.Control
            style={{marginBottom:'1rem'}}
            type="text"
            placeholder="Enter your address"
            name='address'
            value={address}
            required
            onChange={onChangeHandler}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>City: </Form.Label>
          <Form.Control
            style={{marginBottom:'1rem'}}
            type="text"
            placeholder="Enter your city"
            name='city'
            value={city}
            required
            onChange={onChangeHandler}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="postalCode">
          <Form.Label>Postal Code: </Form.Label>
          <Form.Control
            style={{marginBottom:'1rem'}}
            type="text"
            placeholder="Enter your Postal Code"
            name='postalCode'
            value={postalCode}
            required
            onChange={onChangeHandler}
          ></Form.Control>
        </Form.Group>
        
        <Form.Group controlId="country">
          <Form.Label>Country: </Form.Label>
          <Form.Control
            style={{marginBottom:'1rem'}}
            type="text"
            placeholder="Enter your Country"
            name='country'
            value={country}
            required
            onChange={onChangeHandler}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
            Continue
        </Button>
      </Form>
    </FormContainer>
  );
}

export default Shippingscreen;
