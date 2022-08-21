import { Button as ChakraButton } from "@chakra-ui/react";

const Button = ({ ...props }) => {
  return (
    <ChakraButton
      {...props}
      w={"100%"}
      bg={"green.300"}
      _hover={{ filter: "brightness(1.2)", transition: "0.5s" }}
      _active={{ filter: "brightness(1.2)", transition: "0.5s" }}
    />
  );
};
export default Button;
