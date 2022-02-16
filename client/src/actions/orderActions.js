import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
} from '../constants/orderConstants';
import axios from 'axios';

export const createOrder = (order) => async (dispatch, getState) => { //objeto gigante con toda la info de lo que estas comprando
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
    })

    //Autorizacion del token y su uso para lo que sea
    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`/api/order`, order, config)

    
    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    })
   
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}


export const getOrderDetails = (id) => async (dispatch, getState) => { //objeto gigante con toda la info de lo que estas comprando
  try {
    dispatch({
      type: ORDER_DETAILS_REQUEST,
    })

    //Autorizacion del token y su uso para lo que sea
    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/order/${id}`, config)

    
    dispatch({
      type: ORDER_DETAILS_SUCCESS,
      payload: data,
    })
   
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}


export const payOrder = (orderId, paymentResult) => async (dispatch, getState) => { //paymentResult viene de Paypal
  try {
    dispatch({
      type: ORDER_PAY_REQUEST,
    })

    //Autorizacion del token y su uso para lo que sea
    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type':'application.json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(`/api/order/${orderId}/pay`,paymentResult, config)

    
    dispatch({
      type: ORDER_PAY_SUCCESS,
      payload: data,
    })
   
  } catch (error) {
    dispatch({
      type: ORDER_PAY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}






