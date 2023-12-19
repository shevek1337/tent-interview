import {
  getManufacturerModels,
  updateModels,
  useAsyncDispatch,
  useSearchResultSelector,
} from "../store";
import * as API from "../api";
import { useCallback, useEffect } from "react";

export const useGetModels = () => {
  const dispatch = useAsyncDispatch();
  const { models, isModelsLoading, selectedManufacturers } =
    useSearchResultSelector();

  const getModels = useCallback(
    (params: API.IGetManufacturerModelsParams) => {
      dispatch(getManufacturerModels(params));
    },
    [dispatch]
  );

  useEffect(() => {
    const selectedManufacturersIds = selectedManufacturers.map((i) => i.man_id);
    selectedManufacturersIds.forEach((id) => {
      if (models[id]) return;
      getModels({ args: { man_id: Number(id) } });
    });

    const newModels = Object.entries(models).reduce(
      (acc, [id, { manufacturerName, data }]) => {
        if (selectedManufacturersIds.includes(id)) {
          acc[id] = { manufacturerName, data };
        }
        return acc;
      },
      {} as typeof models
    );
    dispatch(updateModels(newModels));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedManufacturers, getModels, dispatch]);

  return { models, isModelsLoading };
};
