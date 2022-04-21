import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
} from '../constants/productConstants';


import axios from 'axios';

//Funcion asincrona creadora de acciones
export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST }); //dispatch() envia la accion al store

    const { data } = await axios.get('/api/products'); //se extrae los datos de la API productos

    dispatch({
      type: PRODUCT_LIST_SUCCESS, //tipo de accion a realizar
      payload: data, //array que contiene todos los objetos producto en la base de datos
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message //mismo error que apareceria en mongoDB atlas
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listDetailsProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST }); //dispatch() envia la accion al store

    const { data } = await axios.get(`/api/product/${id}`); //se extrae los datos de la API productos

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS, //tipo de accion a realizar
      payload: data, //array que contiene todos los objetos producto en la base de datos
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message //mismo error que apareceria en mongoDB atlas
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/order/delete/${id}`, config);

    dispatch({
      type: PRODUCT_DELETE_SUCCESS,
    });

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload: message,
    });
  }
};
