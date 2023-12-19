export interface IDropdownButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  placeholder: string;
  isOpen: boolean;
  displayValue: string;
  disabled?: boolean;
  onClick: () => void;
  variant?: "primary" | "secondary";
}
