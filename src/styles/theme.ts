import { extendTheme } from "@chakra-ui/react";

const global = {
  body: {
    bg: "gray.200",
  },
};

const fonts = {
  body: "Montserrat, sans-serif",
};

const colors = {
  blue: {
    300: "#4FB9A3",
    400: "#35ABCF",
    500: "#3492D0",
  },
  green: {
    300: "#83BC2C",
  },
  purple: {
    700: "#3F4E9C",
  },
  gray: {
    200: "#F4F3F2",
  },
};

const theme = extendTheme({ global, fonts, colors });

export default theme;
