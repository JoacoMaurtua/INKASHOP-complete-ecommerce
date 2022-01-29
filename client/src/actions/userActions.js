import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL
} from '../constants/userConstants';

import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = { //analogo de huachao-mao
      headers: {
        //headers de los tokens
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/login',
      { email, password },
      config
    )

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    })

    localStorage.setItem('userInfo', JSON.stringify(data));

  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  };

}


export const logout =()=>(dispatch)=>{
  localStorage.removeItem('userInfo')
  dispatch({
    type: USER_LOGOUT
  })
}


//REGISTER

export const register = (name,email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = { //analogo de huachao-mao
      headers: {
        //headers de los tokens
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/register',
      {name, email, password },
      config
    )

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data
    })
    //Cuando nos logueamos o registramos obtenemos el mismo objeto
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    })

    localStorage.setItem('userInfo', JSON.stringify(data));

  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  };

}