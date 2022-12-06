import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/'
import { profileUserSlice } from './profileUser/profileUserSlice'
import { socialSlice } from './social-networks/socialSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    networks: socialSlice.reducer,
    profile: profileUserSlice.reducer
  },
})