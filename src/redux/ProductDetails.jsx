import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productsDetails: {},
  error: null,
  isLoading: false,
};

export const getAllDetails = createAsyncThunk("productsDetails", async (id) => {
  const { data } = await axios.get(
    `https://ecommerce.routemisr.com/api/v1/products/${id}`
  );
  return data;
});

const productsDetailsSlice = createSlice({
  name: "productsDetails",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllDetails.fulfilled, (state, action) => {
      state.productsDetails = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getAllDetails.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

export const productDetailsReducer = productsDetailsSlice.reducer;
