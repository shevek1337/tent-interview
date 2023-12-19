import { SortOrderEnum } from "../products";

interface IManufacturer {
  man_id: string;
  man_name: string;
  is_car: "1" | "0";
  is_spec: "1" | "0";
  is_moto: "1" | "0";
}

interface IManufacturerModel {
  model_id: number;
  man_id: number;
  model_name: string;
  model_group: string;
  sort_order: SortOrderEnum;
  cat_man_id: number;
  cat_model_id: number;
  cat_modif_id: number;
  is_car: boolean;
  is_moto: boolean;
  is_spec: boolean;
  show_in_salons: number;
  shown_in_slider: number;
}

export interface IGetManufacturersResponse {
  manufacturers: IManufacturer[];
}

export interface IGetManufacturerModelsResponse {
  data: IManufacturerModel[];
}
