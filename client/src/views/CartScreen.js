import React, { useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  ListGroup,
  Image,
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
    if (id) {
      dispatch(addCart(id, qty)); //envio estos parametros al actions
    }
  }, [dispatch, id, qty]);

  const removeFromHandler = (id) =>{
    console.log('remove');
  }

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>{item.price}</Col>
                  <Col md={2}>
                    <Form.Select
                      value={qty}
                      onChange={(e) =>
                        dispatch(addCart(item.product, Number(e.target.value)))
                      }
                    >
                      {' '}
                      {/* cambia el estado*/}
                      {[...Array(item.countInStock).keys()].map(
                        (
                          x /* Crear un arreglo con el numero de posiciones que tanga el stock */
                        ) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        )
                      )}
                    </Form.Select>
                  </Col>
                  <Col md={2}>
                      <Button type='button' variant='light' onClick={()=>removeFromHandler(item.product)}>
                        <i className="fa fa-trash"></i>
                      </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>

      <Col md={2}></Col>

      <Col md={2}></Col>
    </Row>
  );
};

export default Cartscreen;
