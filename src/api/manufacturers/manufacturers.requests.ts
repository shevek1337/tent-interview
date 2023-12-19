import {
  API_STATIC_BASE_URL,
  IMainErrorObject,
  IGetManufacturersResponse,
  globalUnexpectedApiError,
  IGetManufacturerModelsResponse,
  API_BASE_URL,
} from "..";
import axios, { AxiosError, AxiosResponse } from "axios";
import { IGetManufacturerModelsParams } from "./manufacturers.params";

export const getManufacturersRequest =
  async (): Promise<IGetManufacturersResponse> => {
    try {
      const response: AxiosResponse<
        IGetManufacturersResponse["manufacturers"]
      > = await axios.get<IGetManufacturersResponse["manufacturers"]>(
        `${API_STATIC_BASE_URL}/js/mans.json`
      );
      return { manufacturers: response.data };
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

      console.error("Error getting manufacturers: ", customError);
      throw customError;
    }
  };

export const getManufacturerModelsRequest = async (
  params: IGetManufacturerModelsParams
): Promise<IGetManufacturerModelsResponse> => {
  try {
    const response: AxiosResponse<IGetManufacturerModelsResponse> =
      await axios.get<IGetManufacturerModelsResponse>(
        `${API_BASE_URL}/getManModels?man_id=${params.args.man_id}`
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

    console.error("Error getting manufacturer models: ", customError);
    throw customError;
  }
};
