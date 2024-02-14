import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const initialState = {
  register: {},
  isLoading: false,
  error: null,
};

export const registerApi = createAsyncThunk("register", async (values) => {
  try {
    const { data } = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/auth/signup",
      values
    );
    return data;
  } catch (error) {
    return toast.error(error.response.data.message);
  }
});

export const registerSlice = createSlice({
  name: "register",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(registerApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerApi.fulfilled, (state, action) => {
      state.register = action.payload;
      state.isLoading = false;
    });
    builder.addCase(registerApi.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

export const registerReducer = registerSlice.reducer;
