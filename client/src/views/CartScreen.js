import React, { useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, image, Form, Button, Card } from 'react-bootstrap';
import Message from '../components/Message';
import { addCart } from '../actions/cartActions';

const Cartscreen = () => {
  const {id} = useParams();

  const location = useLocation();
  const qty = (location.search) ? Number(location.search.split('=')[1]) : 1;

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart

  console.log(cartItems);
  useEffect(() => {
    if(id){
      dispatch(addCart(id, qty));
    }
  }, [id, qty, dispatch]);
  
  console.log(qty);
  //useEffect()
  return (
    <div>
      Cart
    </div>
  );
}

export default Cartscreen;