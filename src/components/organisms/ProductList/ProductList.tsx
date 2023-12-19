import React from "react";
import { StyledProductList } from "./ProductList.styled";
import { IProductListProps } from "./ProductList.types";
import { Stack } from "../../atoms/Stack";
import { Card } from "../../molecules/Card";
import {
  generateImageUrl,
  generatePeriodFilterOptions,
  generateSortFilterOptions,
} from "../../../utils/dataGenerators";
import { useTranslation } from "react-i18next";
import { Typography } from "../../atoms/Typography";
import { SingleSelect } from "../../molecules/SingleSelect";
import * as API from "../../../api";
import Pagination from "../../molecules/Pagination/Pagination";

export const ProductList = ({
  products,
  updatePeriod,
  updateSortOrder,
  currentProductFilters,
}: IProductListProps) => {
  const { t } = useTranslation();
  return (
    <StyledProductList>
      <Stack className="justify-between items-center">
        <Typography size="sm" color="black800">
          {t("NUMBER_LISTINGS", { number: products.data.meta.total })}
        </Typography>
        <Stack className="gap-2">
          <SingleSelect
            variant="secondary"
            onChange={(value: API.PeriodEnum) => updatePeriod(value)}
            label=""
            options={generatePeriodFilterOptions(t)}
            value={currentProductFilters.args.Period || ""}
            placeholder={t("PERIOD")}
          />
          <SingleSelect
            variant="secondary"
            onChange={(value: API.SortOrderEnum) => updateSortOrder(value)}
            label=""
            options={generateSortFilterOptions(t)}
            value={currentProductFilters.args.SortOrder || ""}
            placeholder={t("SORTING")}
          />
        </Stack>
      </Stack>

      <Stack className="gap-2.5 flex-col">
        {products.data.items.map((item) => (
          <Card
            key={item.car_id}
            carImageSrc={generateImageUrl(
              item.photo,
              item.car_id,
              item.photo_ver
            )}
            carName={"LAND ROVER Range Rover Evoque"}
            year={t("YEAR_NUMBER", { number: item.prod_year })}
            customsPrice="4,324"
            carRunKm={item.car_run_km}
            engineVolume={item.engine_volume}
            price={item.price_value}
            orderDate={item.order_date}
            views={item.views}
            rightWheel={item.right_wheel}
            isCustomsCleared={item.customs_passed}
          />
        ))}
        <Pagination currentProductFilters={currentProductFilters} />
      </Stack>
    </StyledProductList>
  );
};
