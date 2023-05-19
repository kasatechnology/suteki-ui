export type ButtonVariant = "default" | "alternative" | "warning" | "success";

export interface BaseButtonProps {
  disabled?: boolean;
  loading?: boolean;
  secondary?: boolean;
  variant?: ButtonVariant;
}
