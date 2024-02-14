import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  whishList: [],
  isLoading: false,
  error: null,
};

export const getWhishList = createAsyncThunk("getWhishList", async () => {
  try {
    const { token } = JSON.parse(localStorage.getItem("token"));
    const { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/wishlist",
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

const getWhishListSlice = createSlice({
  name: "getWhishList",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getWhishList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getWhishList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.whishList = action.payload;
    });
    builder.addCase(getWhishList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const getWhishListReducer = getWhishListSlice.reducer;
