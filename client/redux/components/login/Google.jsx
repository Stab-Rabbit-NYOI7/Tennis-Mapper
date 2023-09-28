import React, { useEffect, useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useDispatch } from 'react-redux';
import { login } from '../../reducers/authSlice.js'


const fetcher = (input, method) => {
  let defaultHeader = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(input)
  }
  
  let header = Object.assign({}, defaultHeader, method)
  
  fetch('/api/google', header)
    .then((data) => data.json())
    .then((data) => {return data})
    .catch((err) => console.error(err))
}


const google = () => {

  const dispatch = useDispatch()

    return (
        <GoogleLogin
            onSuccess={credentialResponse => {
              let decodedResponse = jwt_decode(credentialResponse.credential)
              // console.log('DECODED RESPONSE', decodedResponse);
              const { name, email, picture, sub } = decodedResponse;
              // console.log('DECONSTRUCTED RESPONSE', name, email, picture, sub)
              const newObj = {
                name: name,
                email: email,
                picture: picture,
                sub: sub
              }
              fetcher(newObj, {method: 'POST'});
              if (sub) {
                dispatch(login())
              }
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />

    )
}

export default google;