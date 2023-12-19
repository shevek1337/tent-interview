import { ISearchResultSliceState } from "./searchResultSlice.types";
import * as API from "../../../api";

export const searchResultSliceStateInit: ISearchResultSliceState = {
  products: {
    data: {
      items: [],
      meta: {} as API.IGetProductsResponse["data"]["meta"],
    },
    statusCode: 0,
    statusMessage: "",
  },
  currentProductFilters: {
    args: {
      Mans: {},
      Cats: [],
      ForRent: API.ForRentEnum.FOR_SALE,
      Page: 1,
    },
  },
  manufacturers: [],
  selectedManufacturers: [],
  models: {},
  selectedModels: {},
  categories: [],
  selectedCategories: [],
  isProductsLoading: true,
  isManufacturersLoading: true,
  isModelsLoading: true,
  isCategoriesLoading: true,
};
