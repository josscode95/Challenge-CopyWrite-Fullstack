import React from 'react'
import { useSelector } from 'react-redux'

export const ShowTable = () => {

  const texts = useSelector(store => store.txtSend.texts) 

  return (
    <table className="table container">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Results</th>
          <th scope="col">Palindromo</th>
        </tr>
      </thead>
      <tbody>
        {
          texts.length === 0 
          ? <tr>
              <td>Escribe algo para mostrar...</td>
            </tr>
          : texts?.map(({ text, palindrome }, index) => {
              if( palindrome ){
                return <tr key={ index }>
                  <th scope="row">{ index + 1 }</th>
                  <td>{ text }</td>
                  <td>true</td>
                </tr>
              }else{
                return <tr key={ index }>
                  <th scope="row">{ index + 1 }</th>
                  <td>{ text }</td>
                  <td>false</td>
                </tr>
              }
              
            })
        }
      </tbody>
    </table>
  )
}
