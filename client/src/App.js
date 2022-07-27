import React, { useEffect, useState } from 'react';

import axios from 'axios';

function App() {

  const [ state, setState ] = useState('')
  const [ stateItem, setStateItem ] = useState([])

  useEffect(() => {
    getData()
  }, [ setStateItem, state ])

  const getData = async() => {
    const resp = await axios.get('http://localhost:4444/iecho/all')
    setStateItem( resp.data )
  }

  const handleSubmit = async( e ) => {
    try {
      e.preventDefault();
      await axios.get(`http://localhost:4444/iecho?text=${ state }`)
      setState('')
    } catch (error) {
      console.log(error.response.data)
    }
  }
  console.log(stateItem)
  return (
    <>
      <div className="App">
        <form onSubmit={ handleSubmit }>
          <input 
            type="text"
            value={ state }
            placeholder='Enter a new text'
            onChange={e => setState(e.target.value)}
          />
          <button type='submit'>send</button>
        </form>
      </div>

    </>
  );
}

export default App;
