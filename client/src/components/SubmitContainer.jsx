import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postData } from '../redux/features/textSend';

export const SubmitContainer = () => {

  const [ state, setState ] = useState('')
  const dispatch = useDispatch();

  const handleSubmit = async( e ) => {
    try {
      e.preventDefault();
      dispatch( postData( state ) )
      setState('')
    } catch (error) {
      console.log(error.response.data)
    }
  }

  return (
    <form onSubmit={ handleSubmit }>
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
        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">send</button>
      </div>
    </form>
  )
}
