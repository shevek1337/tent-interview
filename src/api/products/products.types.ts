interface IGetProductsDataMeta {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
}

export interface IGetProductsDataItem {
  car_id: number;
  dealer_user_id: number;
  paid_add: number;
  photo: string;
  prod_year: number;
  prod_month: number;
  man_id: number;
  price_usd: number;
  price_value: number;
  car_run_km: number;
  engine_volume: number;
  customs_passed: boolean;
  model_id: number;
  tech_inspection: boolean;
  for_rent: boolean;
  prom_color: number;
  order_date: string;
  photo_ver: number;
  views: number;
  right_wheel: boolean;
}

export interface IGetProductsResponse {
  statusCode: number;
  statusMessage: string;
  data: {
    items: IGetProductsDataItem[];
    meta: IGetProductsDataMeta;
  };
}
