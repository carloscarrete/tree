import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  networks : []
}

export const socialSlice = createSlice({
  name: 'networks',
  initialState,
  reducers: {
    add: (state, action) => {
        state.networks.push(action.payload);
    },
    load: (state, action) => {
      state.networks = action.payload;
    },
    deleteN: (state, action) => {
      state.networks = state.networks.filter(ntw => ntw._id !== action.payload);
    }
  }
})

// Action creators are generated for each case reducer function
export const { add, load, deleteN } = socialSlice .actions