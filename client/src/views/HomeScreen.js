import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { listProducts } from '../actions/productActions'; //traemos las acciones de products
import Message from '../components/Message';
import Loader from '../components/Loader';

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

  const dispatch = useDispatch(); //devuelve una referencia al dispatch enviado por la accion al store

  const productList = useSelector((state) => state.productList); //extrae datos del estado del store, en este caso la propiedad productList
  const { loading, error, products } = productList; //extrae las propiedades del objeto que devuelve el productReducer

  useEffect(() => {
    dispatch(listProducts()); //llamo a la funcion creadora de acciones la cual despacha la data del API
  }, [dispatch]);

  return (
    <>
      <h1 style={{ margin: '2rem 0' }}>Latest Products</h1>
      {loading ? ( //Si la data esta cargando(loading:true en el reducer)
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message> //Si hubo un error se activa la accion PRODUCT_LIST_FAIL
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
