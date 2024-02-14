import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  checkout: {},
  error: null,
  isLoading: false,
};

export const checkoutPayment = createAsyncThunk(
  "checkout",
  async (cartId, values) => {
    try {
      const { token } = JSON.parse(localStorage.getItem("token"));
      const { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}`,
        { shippingAddress: values },
        {
          headers: {
            token,
          },
          params: {
            url: "https://aymantomar.github.io/molla-ecommerce/#",
          },
        }
      );
      return data;
    } catch (error) {
      return error;
    }
  }
);

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(checkoutPayment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkoutPayment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.checkout = action.payload;
      })
      .addCase(checkoutPayment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const checkoutReducer = checkoutSlice.reducer;
