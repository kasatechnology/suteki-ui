export type InputStatus = "default" | "invalid" | "valid";

export interface LabelProps {
  status?: InputStatus;
}

export interface BaseInputProps {
  disabled?: boolean;
  placeholder?: string;
  label?: string;
  message?: string;
  status?: InputStatus;
  type?: string;
}

export interface TextInputProps extends BaseInputProps {}

export interface TextInputWithSubmitProps extends TextInputProps {
  loading?: boolean
}

export interface BooleanInputProps extends BaseInputProps {
  showLabel?: boolean;
}

export interface SwitchInputProps extends BooleanInputProps {
  large?: boolean;
}

export interface Option {
  value: string;
  label: string;
}

export interface ComboboxInputProps extends BaseInputProps {
  options: Option[];
  multiple?: boolean;
}
