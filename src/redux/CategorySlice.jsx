import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategory = createAsyncThunk("category", async () => {
  const { data } = await axios.get(
    `https://ecommerce.routemisr.com/api/v1/categories`
  );
  return data;
});

const initialState = { category: [], isLoading: false, isError: null };

const CategorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.category = action.payload;
    });
    builder.addCase(getCategory.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
  },
});

export const categoryReducer = CategorySlice.reducer;
