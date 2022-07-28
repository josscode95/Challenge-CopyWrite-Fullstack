import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDatting } from "../src/redux/features/textSend";
import { ShowTable } from './components/ShowTable';
import { SubmitContainer } from './components/SubmitContainer';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( getDatting() )
  }, [ dispatch ])

  return (
    <div className='container'>
      <SubmitContainer />
      <ShowTable />
    </div>
  );
}

export default App;
