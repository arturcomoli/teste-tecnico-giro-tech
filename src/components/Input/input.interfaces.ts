import { InputProps as ChakraInputProps } from "@chakra-ui/react";
import { FieldError } from "react-hook-form";
import { IconType } from "react-icons";

export interface InputProps extends ChakraInputProps {
  name: string;
  error?: FieldError | null;
  label?: string;
  icon?: IconType;
  helperText?: string;
  register: any;
}
