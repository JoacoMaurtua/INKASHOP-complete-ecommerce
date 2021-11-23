import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {productListReducer} from './reducers/productReducers';
//variable que engloba a los reducers(funciones) y combina sus propiedades en un solo objeto
const reducer = combineReducers({
  productList: productListReducer,
});

const initialState = {};

const middleware = [thunk] // middlerarw para hacer llamadas asincronas

const store = createStore(reducer,initialState,composeWithDevTools(
  applyMiddleware(...middleware)
));

export default store;







