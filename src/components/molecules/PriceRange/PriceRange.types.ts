import { CurrencyToggleSelectOptionsEnum } from "../CurrencyToggle/CurrencyToggle.types";

export interface IPriceRangeProps {
  selectedCurrency: CurrencyToggleSelectOptionsEnum;
  fromValue: string;
  toValue: string;
  fromOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
