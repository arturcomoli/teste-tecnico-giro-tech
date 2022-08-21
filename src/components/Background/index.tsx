import { Center } from "@chakra-ui/react";

const Background = ({ ...props }) => {
  return <Center w={"100vw"} h={"100vh"} flexDirection={"column"} {...props} />;
};
export default Background;
