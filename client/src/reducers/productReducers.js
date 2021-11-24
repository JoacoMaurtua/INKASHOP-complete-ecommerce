
import {PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAIL} from '../constants/productConstants';

//Funcion reducer que gestiona el estado(en este caso el array de productos)
export const productListReducer =(state = {products:[]},action)=>{
  switch(action.type){
    case PRODUCT_LIST_REQUEST:
      return {loading:true, products: []} //retorna un objeto nuevo con el estado(array) aun vacio

    case PRODUCT_LIST_SUCCESS:
      return {loading:false, products: action.payload} //retorna un objeto nuevo con el estado(array) lleno con los datos traidos por axios de la DB

    case PRODUCT_LIST_FAIL:
      return {loading:false, error:action.payload} //retorna un objeto nuevo que contiene el error definido en productActions.js

    default: return state //retorna el mismo estado en caso no se envie una accion valida
  }
};






