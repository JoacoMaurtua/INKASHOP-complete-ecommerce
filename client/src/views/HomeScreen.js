import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; //dispatch || call action, seleccionar partes del state
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { listProducts } from '../actions/productActions'; //traemos las acciones de products
//import axios from 'axios';

const Homescreen = () => {
  /*METODO CON USESTATE:
  const [products,setProducts] = useState([]); 
   useEffect(() =>{
    const fetchDataProducts = async()=>{
      const {data} = await axios.get('/api/products') //{data} en lugar de data.data
      setProducts(data)
    };
    fetchDataProducts();
  },[]) 
  console.log('products: ',products);*/

  const dispatch = useDispatch(); //devuelve una referencia al dispatch enviado por la accion al store || envia una acción específica al reducer

  const productList = useSelector(state => state.productList); //extrae datos del estado (reducer) del store, en este caso la propiedad productList
  const { loading, error, products } = productList; //extrae las propiedades del objeto que devuelve el productReducer

  useEffect(() => {
    dispatch(listProducts()); //llamo a la funcion creadora de acciones la cual despacha la data del API
  }, [dispatch]);

  return (
    <>
      <h1 style={{ margin: '2rem 0' }}>Latest Products</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {products.map((product, index) => (
            <Col key={index} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Homescreen;
