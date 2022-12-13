import { ComponentStyleConfig, extendTheme } from "@chakra-ui/react";
import constants from "./constants";

const colors = {
  brand: {
    primary: "#ff304f",
    secondary: "#002651",
    tertiary: "#28c7fa",
    grey: "#EEEEEE"
  }
};

const config = {
  initialColorMode: constants.mode,
  useSystemColorMode: true
};

const fonts = {
  body: "Manrope"
};

const Button: ComponentStyleConfig = {
  baseStyle: {
    _hover: {
      color: "var(--chakra-colors-brand-secondary)",
      background: "var(--chakra-colors-brand-grey)"
    }
  }
};

const components = {
  Button
};

const theme = extendTheme({ colors, config, fonts, components });

export default theme;
