import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: null,
  profilePicture: null,
  profileBackgroundPicture: null,
  verified: false,
  networks: [],
  biography: null
}

export const profileUserSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    loadPictures: (state, action) => {
        state.username = action.payload.username;
        state.profilePicture = action.payload.profilePicture;
        state.profileBackgroundPicture = action.payload.profileBackgroundPicture;
        state.networks = action.payload.networks,
        state.verified = action.payload.verified
        state.biography = action.payload.biography
    }          
  },
})

// Action creators are generated for each case reducer function
export const { loadPictures } = profileUserSlice .actions