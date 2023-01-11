import { Box, createTheme, styled, ThemeProvider } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";

import createCache from "@emotion/cache";
import { prefixer } from "stylis";

const colors = {
  primary: "#FFA100",
  title_v1: "secondary",
  title_v2: "#838383",
  text_v1: "#404040",
  black: "#000000",
};

export const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export const RtlTheme = createTheme({
  direction: "rtl",
});
export const LtrTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#010101",
        },
      },
    },
  },
  typography: {},
  palette: {
    primary: {
      main: "#FFA100",
    },
  },
});
