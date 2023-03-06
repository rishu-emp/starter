/* eslint-disable @typescript-eslint/no-empty-function */
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AuthStateType } from 'types/AuthState.type';

// Initial state
const initialState: AuthStateType = {
  authStatus: '',
  email: '',
};

// Actual Slice
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getUserInfoRequest: (state) => {
      state.authStatus = 'loading';
    },

    getUserInfoSucceed: (state, action) => {
      state.email = action.payload;
      state.authStatus = 'complete';
    },

    signoutUser: (state) => {
      state.email = '';
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { signoutUser, getUserInfoRequest, getUserInfoSucceed } = authSlice.actions;

export default authSlice.reducer;
