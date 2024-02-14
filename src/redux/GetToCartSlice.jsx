import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  getCart: [],
  isLoading: false,
  error: null,
};

export const getToCart = createAsyncThunk("getCarts", async () => {
  try {
    const {token} = JSON.parse(localStorage.getItem("token"));
    const { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/cart",
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
});

const getCartSlice = createSlice({
  name: "getCart",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getToCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getToCart.fulfilled, (state, action) => {
      state.getCart = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getToCart.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const getToCartReducer = getCartSlice.reducer;
