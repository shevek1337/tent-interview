export enum ForRentEnum {
  FOR_SALE = "0",
  FOR_RENT = "1",
}

export enum PeriodEnum {
  "1_HOUR" = "1h",
  "2_HOURS" = "2h",
  "3_HOURS" = "3h",
  "1_DAY" = "1d",
  "2_DAYS" = "2d",
  "3_DAYS" = "3d",
  "1_WEEK" = "1w",
  "2_WEEKS" = "2w",
  "3_WEEKS" = "3w",
}

export enum SortOrderEnum {
  DATE_DESC = 1,
  DATE_ASC = 2,
  PRICE_DESC = 3,
  PRICE_ASC = 4,
  MILEAGE_DESC = 5,
  MILEAGE_ASC = 6,
}

export interface IGetProductsParams {
  args: {
    ForRent: ForRentEnum;
    Mans?: {
      [key: number]: number[];
    };
    Cats?: number[];
    PriceFrom?: string;
    PriceTo?: string;
    Period?: PeriodEnum;
    SortOrder?: SortOrderEnum;
    Page?: number;
  };
}
