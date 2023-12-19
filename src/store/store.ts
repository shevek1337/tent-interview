import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import searchResultSliceReducer from "./slices/searchResultSlice/searchResultSlice";

export const store = configureStore({
  reducer: {
    searchResult: searchResultSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// ! ასინქრონული დისპატჩი გამოიყენება ასინქრონული ფუნციების გამოსაძახებლად
export const useAsyncDispatch = () => useDispatch<AppDispatch>();

// selectors
export const useSearchResultSelector = () =>
  useSelector((state: RootState) => state.searchResult);
