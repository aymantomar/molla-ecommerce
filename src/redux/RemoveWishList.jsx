import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  remWishList: [],
  isLoading: false,
  error: null,
};

export const removeWishList = createAsyncThunk("removeWishList", async (id) => {
  const { token } = JSON.parse(localStorage.getItem("token"));
  try {
    const { data } = await axios.delete(
      `https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
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

const removeWishListSlice = createSlice({
  name: "removeWishList",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(removeWishList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(removeWishList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.remWishList = action.payload;
    });
    builder.addCase(removeWishList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const removeWishListReducer = removeWishListSlice.reducer;
