import {
  getCategories,
  getManuFacturers,
  getProducts,
  updateDealType,
  updatePriceFrom,
  updatePriceTo,
  updateSelectedCategories,
  updateSelectedManufacturers,
  updateSelectedModels,
} from "../../../store";
import Container from "../../atoms/Container/Container";
import SearchSidebar from "../../organisms/SearchSidebar/SearchSidebar";
import { StyledSearchTemplateGrid } from "./SearchTemplate.styled";
import { useTranslation } from "react-i18next";
import { RootState, useAsyncDispatch } from "../../../store/store";
import { useSelector } from "react-redux";
import { useGetModels } from "../../../hooks/useGetModels";
import { SearchSidebarMultiSelectEnum } from "../../molecules/MultiSelect";
import { useEffect } from "react";
import { ForRentEnum } from "../../../api";
import { ProductList } from "../../organisms/ProductList";
import { Overlay } from "../../atoms/Overlay";

export const SearchTemplate = () => {
  const {
    products,
    manufacturers,
    selectedManufacturers,
    selectedModels,
    currentProductFilters,
    categories,
    selectedCategories,
    isProductsLoading,
  } = useSelector((state: RootState) => state.searchResult);
  const dispatch = useAsyncDispatch();
  const { models } = useGetModels();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getProducts(currentProductFilters));
    dispatch(getManuFacturers());
    dispatch(getCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const manufacturersDisplayValue = selectedManufacturers
    .map((i) => i.man_name)
    .join(", ");

  const modelsDisplayValue = Object.values(selectedModels)
    .map((i) => i.data.map((j) => j.model_name))
    .flat()
    .join(", ");

  const categoriesDisplayValue = selectedCategories
    .map((i) => i.title)
    .join(", ");

  const selectedModelsLabelValueParis = Object.entries(selectedModels)
    .map(([key, value]) =>
      value.data.map((val) => ({
        label: val.model_name,
        value: String(val.model_id),
      }))
    )
    .flat();

  return (
    <>
      <Overlay isVisible={isProductsLoading} />
      <Container>
        <StyledSearchTemplateGrid>
          <SearchSidebar
            sidebarSingleSelects={{
              dealType: {
                label: t("DEAL_TYPE"),
                options: [
                  { label: t("FOR_SALE"), value: ForRentEnum.FOR_SALE },
                  { label: t("FOR_RENT"), value: ForRentEnum.FOR_RENT },
                ],
                placeholder: t("ALL_TYPES"),
                onChange: (val) => dispatch(updateDealType(val)),
                value: currentProductFilters.args.ForRent,
              },
            }}
            sidebarMultiSelects={{
              manufacturers: {
                label: t("MANUFACTURER"),
                options: manufacturers.map((i) => ({
                  label: i.man_name,
                  value: i.man_id,
                })),
                placeholder: t("ALL_MANUFACTURERS"),
                displayValue: manufacturersDisplayValue,
                selectedItems: selectedManufacturers.map((i) => ({
                  label: i.man_name,
                  value: i.man_id,
                })),
                onClick: (val) => dispatch(updateSelectedManufacturers(val)),
              },
              models: {
                label: t("MODEL"),
                options: models,
                placeholder: t("ALL_MODELS"),
                displayValue: modelsDisplayValue,
                selectedItems: selectedModelsLabelValueParis,
                onClick: (val) => dispatch(updateSelectedModels(val)),
                variant: SearchSidebarMultiSelectEnum.MODELS,
              },
              categories: {
                label: t("CATEGORY"),
                options: categories.map((i) => ({
                  label: i.title,
                  value: String(i.category_id),
                })),
                placeholder: t("ALL_CATEGORIES"),
                displayValue: categoriesDisplayValue,
                selectedItems: selectedCategories.map((i) => ({
                  label: i.title,
                  value: String(i.category_id),
                })),
                onClick: (val) => dispatch(updateSelectedCategories(val)),
              },
            }}
            priceRange={{
              fromValue: currentProductFilters.args.PriceFrom || "",
              toValue: currentProductFilters.args.PriceTo || "",
              fromOnChange: (e) => dispatch(updatePriceFrom(e.target.value)),
              toOnChange: (e) => dispatch(updatePriceTo(e.target.value)),
            }}
          />

          <ProductList
            products={products}
            currentProductFilters={currentProductFilters}
            updatePeriod={(value) =>
              dispatch(
                getProducts({
                  args: { ...currentProductFilters.args, Period: value },
                })
              )
            }
            updateSortOrder={(value) =>
              dispatch(
                getProducts({
                  args: { ...currentProductFilters.args, SortOrder: value },
                })
              )
            }
          />
        </StyledSearchTemplateGrid>
      </Container>
    </>
  );
};
