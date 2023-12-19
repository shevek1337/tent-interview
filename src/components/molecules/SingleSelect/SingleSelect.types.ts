export interface ISingleSelectProps<T> {
  label: string;
  placeholder: string;
  value: T | string;
  options: {
    value: T;
    label: string;
  }[];
  onChange: (value: T) => void;
  variant?: "primary" | "secondary";
}
