import { createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "../../../api";

export const getProducts = createAsyncThunk<
  API.IGetProductsResponse,
  API.IGetProductsParams,
  { rejectValue: API.IMainErrorObject }
>(
  "searchResult/getProducts",
  async (params: API.IGetProductsParams, { rejectWithValue }) => {
    try {
      const response = await API.getProductsRequest(params);
      return response;
    } catch (err) {
      return rejectWithValue(err as API.IMainErrorObject) as any;
    }
  }
);

export const getManuFacturers = createAsyncThunk<
  API.IGetManufacturersResponse,
  void,
  { rejectValue: API.IMainErrorObject }
>("searchResult/getManufacturers", async (_, { rejectWithValue }) => {
  try {
    const response = await API.getManufacturersRequest();
    return response;
  } catch (err) {
    return rejectWithValue(err as API.IMainErrorObject) as any;
  }
});

export const getManufacturerModels = createAsyncThunk<
  API.IGetManufacturerModelsResponse,
  API.IGetManufacturerModelsParams,
  { rejectValue: API.IMainErrorObject }
>(
  "searchResult/getManufacturerModels",
  async (params: API.IGetManufacturerModelsParams, { rejectWithValue }) => {
    try {
      const response = await API.getManufacturerModelsRequest(params);
      return response;
    } catch (err) {
      return rejectWithValue(err as API.IMainErrorObject) as any;
    }
  }
);

export const getCategories = createAsyncThunk<
  API.IGetCategoriesResponse,
  void,
  { rejectValue: API.IMainErrorObject }
>("searchResult/getCategories", async (_, { rejectWithValue }) => {
  try {
    const response = await API.getCategoriesRequest();
    return response;
  } catch (err) {
    return rejectWithValue(err as API.IMainErrorObject) as any;
  }
});
