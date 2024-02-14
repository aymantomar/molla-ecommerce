import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  whishList: {},
  isLoading: false,
  error: null,
};

export const addToWhishList = createAsyncThunk(
  "addWhishList",
  async (productId) => {
    try {
      const { token } = JSON.parse(localStorage.getItem("token"));

      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/wishlist",
        { productId },
        {
          headers: {
            token: token,
          },
        }
      );

      return data;
    } catch (error) {
      return error;
    }
  }
);

const addWhishListSlice = createSlice({
  name: "whishList",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addToWhishList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addToWhishList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.whishList = action.payload;
    });
    builder.addCase(addToWhishList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const addWhishListReducer = addWhishListSlice.reducer;
