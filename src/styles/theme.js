import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: {
      500: "#8aa63a",
      400: "#7EB637",
      300: "#8DC63F",
      200: "#C7E3A1",
      100: "#F2F8E8",
    },
    white: {
      100: "#F7F7F7",
    },
    blue: {
      300: "#2196F3",
      100: "#0DA5C080",
    },
    newY: {
      500: "#FFC107",
      100: "#FFF8E1",
    },
    purple: {
      500: "#673AB7",
      100: "#EDE7F6",
    },
  },
  textStyles: {
    Regular: {
      fontSize: "1.2rem",
      fontWeight: "regular",
    },
    Medium: {
      fontSize: "1.2rem",
      fontWeight: "medium",
    },
    Bold: {
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
  },
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Roboto, sans-serif",
  },
});
