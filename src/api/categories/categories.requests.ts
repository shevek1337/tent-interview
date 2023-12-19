import axios, { AxiosError, AxiosResponse } from "axios";
import { IMainErrorObject } from "../global.types";
import { IGetCategoriesResponse } from "./categories.types";
import { globalUnexpectedApiError } from "..";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getCategoriesRequest =
  async (): Promise<IGetCategoriesResponse> => {
    try {
      const response: AxiosResponse<IGetCategoriesResponse> =
        await axios.get<IGetCategoriesResponse>(`${API_BASE_URL}/cats/get`);
      return response.data;
    } catch (error) {
      let customError: IMainErrorObject;
      if (axios.isAxiosError(error)) {
        const serverResponse = error as AxiosError<IMainErrorObject>;
        if (serverResponse.response) {
          customError = serverResponse.response.data;
        } else {
          customError = globalUnexpectedApiError;
        }
      } else {
        customError = globalUnexpectedApiError;
      }

      console.error("Error getting categories: ", customError);
      throw customError;
    }
  };
