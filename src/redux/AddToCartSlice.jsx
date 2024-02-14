import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  addCart: [],
  isLoading: false,
  error: null,
};

export const addToCart = createAsyncThunk("addToCart", async (productId) => {
  try {
    const { token } = JSON.parse(localStorage.getItem("token"));

    const { data } = await axios.post(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      { productId },
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

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addToCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.addCart = action.payload;
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const addToCartReducer = addToCartSlice.reducer;
