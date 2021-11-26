import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap';
import Rating from '../components/Rating';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listDetailsProduct } from '../actions/productActions';

const Productscreen = () => {

  const [qty,setQty] = useState(0); //cantidad en el stock

  const { id } = useParams();

  const history = useHistory();

  const dispatch = useDispatch();

  const productDetailList = useSelector((state) => state.productDetails); //extrae datos del estado del store, en este caso la propiedad productList
  const { loading, error, product } = productDetailList;

  useEffect(() => {
    dispatch(listDetailsProduct(id));
  }, [dispatch, id]);

  const addToCart = () =>{
    history.push(`/cart/${id}?qty=${qty}`)
  }


  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Link className="btn btn-dark my-3" to="/">
            Go Back
          </Link>
          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Price: ${product.price}</strong>
                </ListGroup.Item>
                <ListGroup.Item>
                  Description: {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {product.countInStock > 0 && (
                      <ListGroup.Item>
                        <Row>
                          <Col>Qty</Col>
                          <Col>
                            <Form.Select as='select' value={qty} onChange={(e)=>
                            setQty(e.target.value)}> {/* cambia el estado*/}
                            {
                           
                              [...Array(product.countInStock).keys()].map(x => (
                               
                                <option key={x+1} value={x+1}>
                                    {x+1}
                                </option>
                             
                            ))}
                            </Form.Select>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                  )}

                  <ListGroup.Item>
                    <Button
                      onClick = {addToCart}
                      className="btn-block"
                      type="button"
                      style={{ width: '100%' }}
                      disabled={product.countInStock === 0}
                    >
                      Add to Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default Productscreen;
