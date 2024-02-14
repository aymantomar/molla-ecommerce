import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  getCheckout: [],
  isLoading: false,
  error: null,
};

export const getCheckOut = createAsyncThunk("checkout", async (userId) => {
  try {
    const { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`
    );
    return data;
  } catch (error) {
    return error;
  }
});

const getCheckOutSlice = createSlice({
  name: " checkout",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCheckOut.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCheckOut.fulfilled, (state, action) => {
      state.isLoading = false;
      state.getCheckout = action.payload;
    });
    builder.addCase(getCheckOut.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const getCheckoutReducer = getCheckOutSlice.reducer;
