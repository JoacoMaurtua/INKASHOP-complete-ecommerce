import React from 'react';
import {Row,Col} from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products'

const Homescreen = () => {
  return (
    <>
      <h1 style={{margin:'2rem 0'}}>Latest Products</h1>
      <Row>
        {products.map(((product,index) => (
          <Col key={index} sm={12} md={6} lg={4} xl={3}>
              <Product product={product}/>
          </Col>
        )))}
      </Row>
    </>
  );
}

export default Homescreen;
