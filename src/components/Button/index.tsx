import { Button as ChakraButton } from "@chakra-ui/react";
import { ButtonProps } from "./button.interfaces";

const Button = ({ logout, ...props }: ButtonProps) => {
  return (
    <ChakraButton
      {...props}
      w={"100%"}
      bg={logout ? "blue.300" : "green.300"}
      _hover={{ filter: "brightness(1.2)", transition: "0.5s" }}
      _active={{ filter: "brightness(1.2)", transition: "0.5s" }}
    />
  );
};
export default Button;
