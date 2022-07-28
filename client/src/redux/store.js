import { configureStore } from '@reduxjs/toolkit'
import textReducer from './features/textSend';

const store = configureStore({
  reducer: {
    txtSend: textReducer
  }
});

export default store;