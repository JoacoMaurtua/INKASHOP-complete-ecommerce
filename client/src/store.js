import {createStore, combineReducers, applyMiddleware} from 'redux'; //crea el store, agrupa todos los reducers, middleware
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'; //metodo para que las redux dev tools del browser se apliquen al proyecto
import {productListReducer, productListDetailsReducer} from './reducers/productReducers';
import {cartReducer} from './reducers/cartReducers';

//Variable que engloba a los reducers y combina sus propiedades en un solo objeto
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productListDetailsReducer,
  cart: cartReducer
});

const cartItemsFromStorage = localStorage.getItem('cartItems')? 
JSON.parse( localStorage.getItem('cartItems')): []

const initialState = {
  cart: {cartItems: cartItemsFromStorage}
}; //estado inicial de la aplicacion(recibira los datos de la API)

const middleware = [thunk] // middleware para hacer llamadas asincronas en el mundo de redux

const store = createStore(reducer,initialState,composeWithDevTools( //Creamos la unica store de la aplicacion
  applyMiddleware(...middleware) //accedemos a la funcionalidad del middleware thunk, store es el que gestiona todo
));

export default store;








