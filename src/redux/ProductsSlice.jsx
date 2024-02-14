import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  error: null,
  isLoading: false,
};

export const getAllData = createAsyncThunk("products", async () => {
  const { data } = await axios.get(
    "https://ecommerce.routemisr.com/api/v1/products"
  );
  return data;
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllData.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getAllData.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

export const productsReducer = productsSlice.reducer