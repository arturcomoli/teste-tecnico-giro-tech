import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { InputProps } from "./input.interfaces";

const Input = ({
  name,
  label,
  error,
  icon: Icon,
  helperText,
  register,
  ...props
}: InputProps) => {
  return (
    <FormControl>
      <FormLabel mb={1} color={"gray.900"}>
        {label}
      </FormLabel>
      <InputGroup>
        {Icon && (
          <InputLeftElement>
            <Icon />
          </InputLeftElement>
        )}
        <ChakraInput
          name={name}
          size={"md"}
          border={"2px solid"}
          borderColor={"gray.300"}
          color={"gray.900"}
          bg={"gray.200"}
          outline={"none"}
          {...register(name)}
          {...props}
        />
      </InputGroup>
      {!error ? (
        <FormHelperText mt={1}>{helperText}</FormHelperText>
      ) : (
        <FormHelperText mt={1} color={"red.500"}>
          {error.message}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default Input;
