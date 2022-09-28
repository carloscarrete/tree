import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'not-authenticated',
  uid: null,
  email: null,
  displayName: null,
  errorMessage: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const {payload} = action;
      state.status = 'authenticated';
      state.uid = payload.id;
      state.displayName = payload.username;
      state.email = payload.email;
    },
    logout: () => initialState ,
    checkAuth: (state, action) => {
      state.status = 'checking...'
    }
  },
})

// Action creators are generated for each case reducer function
export const { login, logout, checkAuth } = authSlice .actions