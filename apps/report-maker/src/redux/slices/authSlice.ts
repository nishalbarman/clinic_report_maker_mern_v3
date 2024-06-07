import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type User = {
  name: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  pic: string | undefined;
  role: number | undefined;
  token: string | undefined;
};

const initialState: User = {
  name: undefined,
  email: undefined,
  phone: undefined,
  pic: undefined,
  token: undefined,
  role: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserAuthData: (state, action: PayloadAction<User>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.pic = action.payload.pic;
    },

    clearLoginSession: () => {
      return initialState;
    },
  },
});

export const { setUserAuthData, clearLoginSession } = authSlice.actions;
