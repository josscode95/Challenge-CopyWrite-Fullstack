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

  return (
    <div className='container'>
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
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Textos enviados</th>
          </tr>
        </thead>
        <tbody>
          {
            stateItem.length > 0 &&
            stateItem.map(({ text }, index) => (
              <tr key={ index }>
                <th scope="row">{ index + 1 }</th>
                <td>{ text }</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
