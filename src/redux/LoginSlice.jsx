import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: null,
  isLoading: false,
  isError: null,
};

export const getToken = createAsyncThunk("login", async (value) => {
  try {
    const { data } = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/auth/signin",
      value
    );
    return data;
  } catch (error) {
    return error;
  }
});

const logInSlice = createSlice({
  name: "login",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getToken.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getToken.fulfilled, (state, action) => {
      state.token = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getToken.rejected, (state, action) => {
      state.isError = action.error.message;
      state.isLoading = false;
    });
  },
});

export const loginReducer = logInSlice.reducer;
