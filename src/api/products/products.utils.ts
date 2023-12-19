import { IGetProductsParams } from "./products.params";

export const formatGetProductsQueryParams = (
  params: IGetProductsParams
): string => {
  const { args } = params;

  const parsedParams = Object.entries(args)
    .filter(([, value]) => Boolean(value))
    .map(([key, value]) => {
      if (key === "Mans") {
        let resultString = "";
        Object.entries(value).forEach(([k, v], index, array) => {
          if (v.length > 0) {
            const valuesString = v.join(".");
            resultString += `${k}.${valuesString}`;
          } else {
            resultString += k;
          }
          if (index < array.length - 1) {
            resultString += "-";
          }
        });

        return `${key}=${resultString}`;
      }
      const formattedValue = Array.isArray(value) ? value.join(".") : value;
      return `${key}=${formattedValue}`;
    });

  return parsedParams.join("&");
};
