import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postData } from '../redux/features/textSend';

import Swal from "sweetalert2";

export const SubmitContainer = () => {

  const [ state, setState ] = useState('')
  const dispatch = useDispatch();

  const handleSubmit = async( e ) => {
    try {
      e.preventDefault();
      if( state.trim().length > 2){
        dispatch( postData( state ) )
        setState('')
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Hubo un error',
          text: 'Tiene que mandar un texto y mayor a 2 caracteres...'
        })
      }
    } catch (error) {
      console.log(error.response.data.error)
    }
  }

  return (
    <form 
      className='formContainer'
      onSubmit={ handleSubmit }
    >
      <div className="input-group mb-3 mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a new text"
          aria-label="Recipient's username"
          aria-describedby="button-addon2" 
          value={ state }
          onChange={e => setState(e.target.value)}
        />
        <button type="submit">Send</button>
      </div>
    </form>
  )
}
