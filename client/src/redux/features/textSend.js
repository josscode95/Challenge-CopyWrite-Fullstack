import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getDatting = createAsyncThunk(
  'projectReducer/getDatting',
  async(args, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('https://rest-copywrite.herokuapp.com/iecho/all')
      return data.reverse();
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)

export const postData = createAsyncThunk(
  'projectReducer/postData',
  async(args, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`https://rest-copywrite.herokuapp.com/iecho?text=${ args }`)
      return data.reverse()
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)

export const textSend = createSlice({
  name: 'projectReducer',
  initialState: {
    texts: [],
    status: null
  },
  reducers: {
  },
  extraReducers: {
    [getDatting.pending]: (state, { payload }) => {
      state.status = 'loading';
    },
    [getDatting.fulfilled]: (state, { payload }) => {
      state.status = 'success';
      state.texts = payload;
    },
    [getDatting.rejected]: (state, { payload }) => {
      state.status = 'reject';
    },
    [postData.fulfilled]: (state, {payload}) => {
      state.texts = payload;
    },
  }
})

// export const { getDatting } = textSend.actions;

export default textSend.reducer;