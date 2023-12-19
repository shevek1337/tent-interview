export type TButtonVariant = "primary" | "secondary";

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: TButtonVariant;
  children: React.ReactNode;
}
