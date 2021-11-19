import React, {useState,useEffect} from 'react';
import {Row,Col} from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';

const Homescreen = () => {

  const [products,setProducts] = useState([]);

  //traermos la data
  useEffect(() =>{
    const fetchDataProducts = async()=>{
      const {data} = await axios.get('/api/products') //{data} en lugar de data.data
      setProducts(data)
    };
    fetchDataProducts();
  },[])

  console.log('products: ',products);

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
