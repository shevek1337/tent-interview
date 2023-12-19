import {
  SearchSidebarMultiSelectEnum,
  TMultiSelectProps,
} from "../../molecules/MultiSelect";
import { ISingleSelectProps } from "../../molecules/SingleSelect";

enum SearchSidebarSingleSelectEnum {
  DEAL_TYPE = "dealType",
}

export interface ISearchSidebarProps<T> {
  sidebarMultiSelects: Record<SearchSidebarMultiSelectEnum, TMultiSelectProps>;
  sidebarSingleSelects: Record<
    SearchSidebarSingleSelectEnum,
    ISingleSelectProps<T>
  >;
  priceRange: {
    fromValue: string;
    toValue: string;
    fromOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    toOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
}
