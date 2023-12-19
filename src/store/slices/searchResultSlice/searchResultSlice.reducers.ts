import { ISearchResultSliceState } from "../..";
import { PayloadAction } from "@reduxjs/toolkit";

export const updateSelectedManufacturersReducer = (
  state: ISearchResultSliceState,
  action: PayloadAction<string>
) => {
  const manufacturerExists = !!state.selectedManufacturers.find(
    (i) => i.man_id === action.payload
  );

  if (manufacturerExists) {
    removeManufacturer(state, action.payload);
  } else {
    addManufacturer(state, action.payload);
  }
};

const removeManufacturer = (
  state: ISearchResultSliceState,
  manufacturerId: string
) => {
  state.selectedManufacturers = state.selectedManufacturers.filter(
    (i) => i.man_id !== manufacturerId
  );
  delete state.selectedModels[manufacturerId];
  delete state.currentProductFilters.args.Mans?.[Number(manufacturerId)];
};

const addManufacturer = (
  state: ISearchResultSliceState,
  manufacturerId: string
) => {
  const manufacturer = state.manufacturers.find(
    (m) => m.man_id === manufacturerId
  );
  if (manufacturer) {
    state.selectedManufacturers.push(manufacturer);
    state.currentProductFilters.args.Mans![Number(manufacturerId)] =
      state.currentProductFilters.args.Mans![Number(manufacturerId)] || [];
  }
};

export const updateSelectedModelsReducer = (
  state: ISearchResultSliceState,
  action: PayloadAction<string>
) => {
  const modelId = Number(action.payload);
  const selectedModelEntry = Object.entries(state.selectedModels).find(
    ([, value]) => value.data.some((i) => i.model_id === modelId)
  );

  if (selectedModelEntry) {
    removeModel(state, selectedModelEntry, modelId);
  } else {
    addModel(state, modelId);
  }
};

const removeModel = (
  state: ISearchResultSliceState,
  selectedModelEntry: [string, any],
  modelId: number
) => {
  const [selectedModelKey] = selectedModelEntry;
  state.selectedModels = {
    ...state.selectedModels,
    [selectedModelKey]: {
      ...state.selectedModels[selectedModelKey],
      data: state.selectedModels[selectedModelKey].data.filter(
        (i) => i.model_id !== modelId
      ),
    },
  };

  state.currentProductFilters.args.Mans![Number(selectedModelKey)] =
    state.currentProductFilters.args.Mans![Number(selectedModelKey)].filter(
      (i) => i !== modelId
    );
};

const addModel = (state: ISearchResultSliceState, modelId: number) => {
  const selectedModelManufacturerId = Object.entries(state.models).find(
    ([, value]) => value.data.some((i) => i.model_id === modelId)
  )![0];
  const selectedModel = state.models[selectedModelManufacturerId].data.find(
    (i) => i.model_id === modelId
  );

  if (selectedModel) {
    state.selectedModels = {
      ...state.selectedModels,
      [selectedModelManufacturerId]: {
        ...state.models[selectedModelManufacturerId],
        data: [
          ...(state.selectedModels[selectedModelManufacturerId]?.data || []),
          selectedModel,
        ],
      },
    };
  }

  state.currentProductFilters.args.Mans![Number(selectedModelManufacturerId)] =
    [
      ...(state.currentProductFilters.args.Mans![
        Number(selectedModelManufacturerId)
      ] || []),
      modelId,
    ];
};

export const updateSelectedCategoriesReducer = (
  state: ISearchResultSliceState,
  action: PayloadAction<string>
) => {
  const categoryId = Number(action.payload);
  const categoryExists = !!state.selectedCategories.find(
    (i) => i.category_id === categoryId
  );

  if (categoryExists) {
    removeCategory(state, categoryId);
  } else {
    addCategory(state, categoryId);
  }
};

const removeCategory = (state: ISearchResultSliceState, categoryId: number) => {
  state.selectedCategories = state.selectedCategories.filter(
    (i) => i.category_id !== categoryId
  );
  state.currentProductFilters.args.Cats =
    state.currentProductFilters.args.Cats!.filter((i) => i !== categoryId);
};

const addCategory = (state: ISearchResultSliceState, categoryId: number) => {
  const category = state.categories.find((m) => m.category_id === categoryId);
  if (category) {
    state.selectedCategories.push(category);
    state.currentProductFilters.args.Cats!.push(categoryId);
  }
};
