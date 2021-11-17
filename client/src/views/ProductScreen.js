import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,Image,ListGroup,Card,Button, ListGroupItem} from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';
 
const Productscreen = ({match}) => {

  const product = products.find((p) => p._id === match.params.id)

  return (
    <>
      <Link className="btn btn-dark my-3" to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid/>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
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
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Productscreen;
