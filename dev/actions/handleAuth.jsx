import React from 'react';
import axios from 'axios';
import {AUTH_USER} from './types.js';

const BASE_URL = 'http://localhost:4000/api'

export default function handleAuth(credentials, callback){
  console.log("Inside handleAuth", credentials)
  
  const {email, password} = credentials;
  
  let toSend = {email, password};
  
  return function(dispatch){
    axios.post(`${BASE_URL}/signup`, toSend)
      .then(response => {
        console.log("the response inside handleAuth ", response);
        dispatch({type: AUTH_USER});

        localStorage.setItem('token', response.data.token);

        callback();

      })
      .catch(error => {
        console.log("The error from handleAuth axios is ", error);
      });
  }
}