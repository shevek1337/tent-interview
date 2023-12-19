import {
  getProducts,
  useAsyncDispatch,
  useSearchResultSelector,
} from "../../../store";
import {
  ISearchSidebarProps,
  StyledSearchSidebar,
  StyledSearchSidebarInputs,
} from ".";
import {
  SidebarHeaderSelectOptionsEnum,
  SidebarHeader,
} from "../../molecules/SidebarHeader";
import SidebarFooter from "../../molecules/SidebarFooter/SidebarFooter";
import MultiSelect from "../../molecules/MultiSelect/MultiSelect";
import { PriceRange } from "../../molecules/PriceRange";
import { CurrencyToggleSelectOptionsEnum } from "../../molecules/CurrencyToggle/CurrencyToggle.types";
import { IDefaultMultiSelect } from "../../molecules/MultiSelect";
import { SingleSelect } from "../../molecules/SingleSelect";
import Container from "../../atoms/Container/Container";

const SearchSidebar = <T,>({
  sidebarMultiSelects,
  sidebarSingleSelects,
  priceRange,
}: ISearchSidebarProps<T>) => {
  const dispatch = useAsyncDispatch();
  const { currentProductFilters } = useSearchResultSelector();

  const handleSearchSubmit = () => {
    dispatch(getProducts({ args: currentProductFilters.args }));
  };

  return (
    <StyledSearchSidebar>
      <SidebarHeader selected={SidebarHeaderSelectOptionsEnum.CAR} />
      <Container variant="sidebar">
        <StyledSearchSidebarInputs>
          {Object.values(sidebarSingleSelects).map((item) => (
            <SingleSelect
              key={item.label}
              label={item.label}
              placeholder={item.placeholder}
              options={item.options}
              value={item.value}
              variant={item.variant}
              onChange={item.onChange}
            />
          ))}
          {Object.values(sidebarMultiSelects).map((item) => (
            <MultiSelect
              key={item.label}
              label={item.label}
              options={item.options as IDefaultMultiSelect["options"]}
              placeholder={item.placeholder}
              displayValue={item.displayValue}
              selectedItems={item.selectedItems}
              onClick={item.onClick}
              variant={item.variant}
            />
          ))}
        </StyledSearchSidebarInputs>
        <PriceRange
          selectedCurrency={CurrencyToggleSelectOptionsEnum.GEL}
          fromOnChange={priceRange.fromOnChange}
          toOnChange={priceRange.toOnChange}
          fromValue={priceRange.fromValue}
          toValue={priceRange.toValue}
        />
        <SidebarFooter handleSearchSubmit={handleSearchSubmit} />
      </Container>
    </StyledSearchSidebar>
  );
};

export default SearchSidebar;
