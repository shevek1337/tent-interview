import {
  updateSelectedCategoriesReducer,
  updateSelectedManufacturersReducer,
  updateSelectedModelsReducer,
} from "./searchResultSlice.reducers";
import {
  getCategories,
  getManuFacturers,
  getManufacturerModels,
  getProducts,
} from "./searchResultSlice.thunks";
import { searchResultSliceStateInit } from "./searchResultSlice.constants";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const searchResultSlice = createSlice({
  name: "searchResult",
  initialState: searchResultSliceStateInit,
  reducers: {
    updateSelectedManufacturers: (state, action: PayloadAction<string>) =>
      updateSelectedManufacturersReducer(state, action),
    updateModels: (state, action) => {
      state.models = action.payload;
    },
    updateDealType: (state, action) => {
      state.currentProductFilters.args.ForRent = action.payload;
    },
    updateSelectedModels: (state, action) => {
      updateSelectedModelsReducer(state, action);
    },
    updateSelectedCategories: (state, action) => {
      updateSelectedCategoriesReducer(state, action);
    },
    updatePriceFrom: (state, action) => {
      state.currentProductFilters.args.PriceFrom = action.payload;
    },
    updatePriceTo: (state, action) => {
      state.currentProductFilters.args.PriceTo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // getProducts
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.currentProductFilters = action.meta.arg;
        state.isProductsLoading = false;
        state.productsError = undefined;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.productsError = action.payload;
        state.currentProductFilters = action.meta.arg;
        state.isProductsLoading = false;
      })
      .addCase(getProducts.pending, (state) => {
        state.isProductsLoading = true;
      })
      // getManufacturers
      .addCase(getManuFacturers.fulfilled, (state, action) => {
        state.manufacturers = action.payload.manufacturers;
        state.isManufacturersLoading = false;
      })
      .addCase(getManuFacturers.rejected, (state) => {
        state.isManufacturersLoading = false;
      })
      .addCase(getManuFacturers.pending, (state) => {
        state.isManufacturersLoading = true;
      })
      // getManufacturerModels
      .addCase(getManufacturerModels.fulfilled, (state, action) => {
        state.models[action.meta.arg.args.man_id] = {
          manufacturerName:
            state.manufacturers.find(
              (m) => Number(m.man_id) === action.meta.arg.args.man_id
            )?.man_name || "",
          data: action.payload.data,
        };
        state.isModelsLoading = false;
      })
      .addCase(getManufacturerModels.rejected, (state) => {
        state.isModelsLoading = false;
      })
      .addCase(getManufacturerModels.pending, (state) => {
        state.isModelsLoading = true;
      })
      // getCategories
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload.data;
        state.isCategoriesLoading = false;
      })
      .addCase(getCategories.rejected, (state) => {
        state.isCategoriesLoading = false;
      })
      .addCase(getCategories.pending, (state) => {
        state.isCategoriesLoading = true;
      });
  },
});

export const {
  updateSelectedManufacturers,
  updateDealType,
  updateModels,
  updateSelectedModels,
  updateSelectedCategories,
  updatePriceFrom,
  updatePriceTo,
} = searchResultSlice.actions;

export default searchResultSlice.reducer;
