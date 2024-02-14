import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cashOrder: {},
  error: null,
  isLoading: false,
};

export const cashPayment = createAsyncThunk(
  "cashOrder",
  async (cartId, values) => {
    try {
      const { token } = JSON.parse(localStorage.getItem("token"));
      const { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
        { shippingAddress: values },
        {
          headers: {
            token,
          },
        }
      );
      return data;
    } catch (error) {
      return error;
    }
  }
);

const cashOrderSlice = createSlice({
  name: "cashOrder",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(cashPayment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(cashPayment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cashOrder = action.payload;
      })
      .addCase(cashPayment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const cashOrderReducer = cashOrderSlice.reducer;
