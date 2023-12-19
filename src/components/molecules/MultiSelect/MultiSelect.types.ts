import { ISearchResultSliceState } from "../../../store";

export enum SearchSidebarMultiSelectEnum {
  MANUFACTURERS = "manufacturers",
  MODELS = "models",
  CATEGORIES = "categories",
}

interface IBaseMultiSelect {
  variant?: SearchSidebarMultiSelectEnum;
  label: string;
  placeholder: string;
  selectedItems: { value: string; label: string }[];
  displayValue: string;
  onClick: (val: string) => void;
}

export interface IDefaultMultiSelect extends IBaseMultiSelect {
  variant?: SearchSidebarMultiSelectEnum;
  options: { value: string; label: string }[];
}

export interface IModelsMultiSelect extends IBaseMultiSelect {
  variant?: SearchSidebarMultiSelectEnum;
  options: ISearchResultSliceState["models"];
}

export type TMultiSelectProps = IDefaultMultiSelect | IModelsMultiSelect;
