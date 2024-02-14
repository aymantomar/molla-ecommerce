import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBrands = createAsyncThunk("brands", async () => {
  const { data } = await axios.get(
    `https://ecommerce.routemisr.com/api/v1/brands`
  );
  return data;
});

const initialState = { brands: [], isLoading: false, isError: null };

const BrandsSlice = createSlice({
  name: "brands",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getBrands.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBrands.fulfilled, (state, action) => {
      state.isLoading = false;
      state.brands = action.payload;
    });
    builder.addCase(getBrands.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
  },
});

export const brandsReducer = BrandsSlice.reducer;
