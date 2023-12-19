export interface ICheckboxProps {
  checked: boolean;
  label: string;
  value: string | number;
  onClick: (val: string) => void;
}
