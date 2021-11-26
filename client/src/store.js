import {createStore, combineReducers, applyMiddleware} from 'redux'; //crea el store, agrupa todos los reducers, middleware
import thunk from 'redux-thunk'; //middleware
import {composeWithDevTools} from 'redux-devtools-extension'; //metodo para que las redux dev tools del browser se apliquen al proyecto
import {productListReducer} from './reducers/productReducers';
//Variable que engloba a los reducers y combina sus propiedades en un solo objeto
const reducer = combineReducers({ 
  productList: productListReducer, //activael redux-devtools-extension
});

const initialState = {}; //estado inicial de la aplicacion(recibira los datos de la API) || estado inicial de cada reducer

const middleware = [thunk] // middleware para hacer llamadas asincronas en el mundo de redux

const store = createStore(reducer,initialState,composeWithDevTools( //Creamos la unica store de la aplicacion || tercer argumento unicamente para la extensión de chrome psandole todos los middlewares
  applyMiddleware(...middleware) //accedemos a la funcionalidad del middleware thunk, store es el que gestiona todo
));

export default store;





/* 
Store -> Un estado globalizado
Action -> Lo que quieres hacer, por ejemplo: clic en un evento
Reducer -> Describe como tu acción transfiere el estado al siguiente estado. Comprueba qué acción ha tenido lugar y en base a la acción actualiza el store.
Dispatch -> Manera de ejecutar la acción. Despachar la acción al reductor. Entonces el reducer comprobará qué hacer y el store se actualiza.

*/

