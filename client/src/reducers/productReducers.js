
import {PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAIL} from '../constants/productConstants';
//diferentes funciones reducers de products!!!
//Funcion reducer que gestiona el estado inicial (en este caso el array de productos vacio que se llenara con la data de backend) y acciones
export const productListReducer =(state = {products:[]},action)=>{
  switch(action.type){
    case PRODUCT_LIST_REQUEST:
      return {loading:true, products: []} //retorna un objeto nuevo con el estado(array) aun vacio

    case PRODUCT_LIST_SUCCESS:
      return {loading:false, products: action.payload} //retorna un objeto nuevo con el estado(array) lleno con los datos traidos por axios de la DB

    case PRODUCT_LIST_FAIL:
      return {loading:false, error:action.payload} //retorna un objeto nuevo que contiene el error definido en productActions.js  || error traido de la DB

    default: return state //retorna el mismo estado en caso (no se envie una accion valida) no figuere en los demás cases
  }
};






