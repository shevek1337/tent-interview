import { TFunction } from "i18next";
import * as API from "../api";

export const generateImageUrl = (
  photo: API.IGetProductsDataItem["photo"],
  car_id: API.IGetProductsDataItem["car_id"],
  photo_ver: API.IGetProductsDataItem["photo_ver"]
) => {
  return `https://static.my.ge/myauto/photos/${photo}/thumbs/${car_id}_1.jpg?v=${photo_ver}`;
};

export const generatePeriodFilterOptions = (tFn: TFunction) => {
  return [
    {
      value: API.PeriodEnum["1_HOUR"],
      label: tFn("LAST_NUMBER_HOURS", { number: 1 }),
    },
    {
      value: API.PeriodEnum["2_HOURS"],
      label: tFn("LAST_NUMBER_HOURS", { number: 2 }),
    },
    {
      value: API.PeriodEnum["3_HOURS"],
      label: tFn("LAST_NUMBER_HOURS", { number: 3 }),
    },
    {
      value: API.PeriodEnum["1_DAY"],
      label: tFn("LAST_NUMBER_DAYS", { number: 1 }),
    },
    {
      value: API.PeriodEnum["2_DAYS"],
      label: tFn("LAST_NUMBER_DAYS", { number: 2 }),
    },
    {
      value: API.PeriodEnum["3_DAYS"],
      label: tFn("LAST_NUMBER_DAYS", { number: 3 }),
    },
    {
      value: API.PeriodEnum["1_WEEK"],
      label: tFn("LAST_NUMBER_WEEKS", { number: 1 }),
    },
    {
      value: API.PeriodEnum["2_WEEKS"],
      label: tFn("LAST_NUMBER_WEEKS", { number: 2 }),
    },
    {
      value: API.PeriodEnum["3_WEEKS"],
      label: tFn("LAST_NUMBER_WEEKS", { number: 3 }),
    },
  ];
};

export const generateSortFilterOptions = (tFn: TFunction) => {
  return [
    {
      value: API.SortOrderEnum.DATE_DESC,
      label: tFn("DATE_DESC"),
    },
    {
      value: API.SortOrderEnum.DATE_ASC,
      label: tFn("DATE_ASC"),
    },
    {
      value: API.SortOrderEnum.PRICE_DESC,
      label: tFn("PRICE_DESC"),
    },
    {
      value: API.SortOrderEnum.PRICE_ASC,
      label: tFn("PRICE_ASC"),
    },
    {
      value: API.SortOrderEnum.MILEAGE_DESC,
      label: tFn("MILEAGE_DESC"),
    },
    {
      value: API.SortOrderEnum.MILEAGE_ASC,
      label: tFn("MILEAGE_ASC"),
    },
  ];
};
