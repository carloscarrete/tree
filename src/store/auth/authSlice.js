import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'not-authenticated',
  uid: null,
  email: null,
  displayName: null,
  errorMessage: null,
  profilePicture: null,
  profileBackgroundPicture: null,
  biography: null,
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
    },
    addInfo: (state, action) => {
      state.biography = action.payload.biography;
      state.profilePicture = action.payload.profilePicture;
      state.profileBackgroundPicture = action.payload.profileBackgroundPicture
    }
  },
})

// Action creators are generated for each case reducer function
export const { login, logout, checkAuth, addInfo } = authSlice .actions