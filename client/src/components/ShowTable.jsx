import React from 'react'
import { useSelector } from 'react-redux'

export const ShowTable = () => {

  const texts = useSelector(store => store.txtSend.texts) 

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Textos enviados</th>
        </tr>
      </thead>
      <tbody>
        {
          texts.length === 0 
          ? <tr>
              <td>Escribe algo para mostrar...</td>
            </tr>
          : texts.map(({ text }, index) => (
            <tr key={ index }>
              <th scope="row">{ index + 1 }</th>
              <td>{ text }</td>
            </tr>
            ))
        }
      </tbody>
    </table>
  )
}
