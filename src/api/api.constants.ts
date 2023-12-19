import { IMainErrorObject } from "./global.types";

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
export const API_STATIC_BASE_URL = process.env.REACT_APP_API_STATIC_BASE_URL;
// TODO: ეს ობიექტი პირობითია - API დოკუმენტაციაა საჭირო
export const globalUnexpectedApiError: IMainErrorObject = {
  errors: {
    message: "An unexpected error occured",
    details: [],
  },
};
