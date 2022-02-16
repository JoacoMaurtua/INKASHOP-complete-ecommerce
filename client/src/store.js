import {createStore, combineReducers, applyMiddleware} from 'redux'; //crea el store, agrupa todos los reducers, middleware
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'; //metodo para que las redux dev tools del browser se apliquen al proyecto
import {productListReducer, productListDetailsReducer} from './reducers/productReducers';
import {cartReducer} from './reducers/cartReducers';
import { userLoginReducer,userRegisterReducer,userDetailsReducer,userUpdateProfileReducer } from './reducers/userReducers';
import { orderCreateReducer,orderDetailsReducer, orderPayReducer } from './reducers/orderReducers';
//Variable que engloba a los reducers y combina sus propiedades en un solo objeto

//ESTADO GLOBAL:
const reducer = combineReducers({
  productList: productListReducer, //pedazos del estado
  productDetails: productListDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile:userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,

});

//Almacenar la data del carrito de compras en el local storage
const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

//Almacenar la data del usuario en el local storage
const userInfoFromStorage = localStorage.getItem('userInfo')
? JSON.parse(localStorage.getItem('userInfo'))
: null


const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
? JSON.parse(localStorage.getItem('shippingAddress'))
: {}

const initialState = {
  cart: {cartItems: cartItemsFromStorage, shippingAddress: shippingAddressFromStorage},
  userLogin: {userInfo: userInfoFromStorage},
}; 

const middleware = [thunk] // middleware para hacer llamadas asincronas en el mundo de redux

const store = createStore(reducer,initialState,composeWithDevTools( //Creamos la unica store de la aplicacion
  applyMiddleware(...middleware) //accedemos a la funcionalidad del middleware thunk, store es el que gestiona todo
));

export default store;








