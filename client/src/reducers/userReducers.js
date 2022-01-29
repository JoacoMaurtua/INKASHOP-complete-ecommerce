import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGOUT,
} from '../constants/userConstants';

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true }; //retorna un objeto nuevo con el estado(array) aun vacio

    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload }; //retorna un objeto nuevo con el estado(array) lleno con los datos traidos por axios de la DB

    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }; //retorna un objeto nuevo que contiene el error definido en productActions.js

    case USER_LOGOUT:
      return {};

    default:
      return state; //retorna el mismo estado en caso no se envie una accion valida
  }
};


export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true }; //retorna un objeto nuevo con el estado(array) aun vacio

    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload }; //retorna un objeto nuevo con el estado(array) lleno con los datos traidos por axios de la DB

    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload }; //retorna un objeto nuevo que contiene el error definido en productActions.js

    default:
      return state; //retorna el mismo estado en caso no se envie una accion valida
  }
};