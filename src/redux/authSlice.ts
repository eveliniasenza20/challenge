import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  user: null | { id: string; name: string; role: string };
  data: any;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  data: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(
      state,
      action: PayloadAction<{ id: string; name: string; role: string }>
    ) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
    storeData(state, action: PayloadAction<any>) {
      state.data = action.payload;
    },
  },
});

export const { login, logout, storeData } = authSlice.actions;
export default authSlice.reducer;
