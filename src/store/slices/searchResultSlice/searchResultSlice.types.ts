import * as API from "../../../api";

interface IModels {
  [key: string]: {
    manufacturerName: string;
    data: API.IGetManufacturerModelsResponse["data"];
  };
}

export interface ISearchResultSliceState {
  products: API.IGetProductsResponse;
  productsError?: API.IMainErrorObject;
  currentProductFilters: API.IGetProductsParams;
  manufacturers: API.IGetManufacturersResponse["manufacturers"];
  selectedManufacturers: API.IGetManufacturersResponse["manufacturers"];
  models: IModels;
  selectedModels: IModels;
  categories: API.IGetCategoriesResponse["data"];
  selectedCategories: API.IGetCategoriesResponse["data"];
  isProductsLoading: boolean;
  isManufacturersLoading: boolean;
  isModelsLoading: boolean;
  isCategoriesLoading: boolean;
}
