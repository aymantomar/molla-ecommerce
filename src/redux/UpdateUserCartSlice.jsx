import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  updateUser: {},
  isLoading: false,
  error: null,
};

export const updateUserCart = createAsyncThunk(
  "updateUserCart",
  async (productId, count) => {
    // Pass an object with payload and meta fields
    try {
      const { token } = JSON.parse(localStorage.getItem("token"));
      const { data } = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        { count },
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

const updateUserCartSlice = createSlice({
  name: "updateUserCart",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(updateUserCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateUserCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.updateUser = action.payload;
    });
    builder.addCase(updateUserCart.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const updateUserCartReducer = updateUserCartSlice.reducer;
