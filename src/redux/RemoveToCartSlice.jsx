import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  removeCart: [],
  isLoading: false,
  error: null,
};

export const removeToCart = createAsyncThunk("removeToCart", async (productId) => {
    const { token } = JSON.parse(localStorage.getItem("token"));
    try {
      const { data } = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
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

const removeToCartSlice = createSlice({
  name: "removeToCart",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(removeToCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(removeToCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.removeCart = action.payload;
    });
    builder.addCase(removeToCart.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const removeToCartReducer = removeToCartSlice.reducer;
