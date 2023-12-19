import {
  API_BASE_URL,
  IGetProductsParams,
  IGetProductsResponse,
  formatGetProductsQueryParams,
  globalUnexpectedApiError,
} from "..";
import { IMainErrorObject } from "../global.types";
import axios, { AxiosError, AxiosResponse } from "axios";

export const getProductsRequest = async (
  params: IGetProductsParams
): Promise<IGetProductsResponse> => {
  try {
    const response: AxiosResponse<IGetProductsResponse> =
      await axios.get<IGetProductsResponse>(
        `${API_BASE_URL}/products/?${formatGetProductsQueryParams(params)}`
      );
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

    console.error("Error getting products: ", customError);
    throw customError;
  }
};
