import React, { useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  ListGroup,
  image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import Message from '../components/Message';
import { addCart } from '../actions/cartActions';

const Cartscreen = () => {
  const { id } = useParams();

  const location = useLocation();

  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart; //Extraigo el arreglo que contrendra los objetos del carrito

  console.log(qty);
  console.log(location);

  useEffect(() => {
    dispatch(addCart(id, qty)); //envio estos parametros al actions
  }, [dispatch, id, qty]);

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {
          cartItems.length === 0?(
            <Message>
              Your cart is empty <Link to='/'>Go Back</Link>
            </Message>
          ):(
            <ListGroup variant='flush'></ListGroup>
          ) 
         
        }
      </Col>

      <Col md={2}></Col>

      <Col md={2}></Col>
    </Row>
  );
};

export default Cartscreen;
