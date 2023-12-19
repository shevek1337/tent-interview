import * as API from "../../../api";

export interface IProductListProps {
  products: API.IGetProductsResponse;
  currentProductFilters: API.IGetProductsParams;
  updatePeriod: (period: API.PeriodEnum) => void;
  updateSortOrder: (sortOrder: API.SortOrderEnum) => void;
}
