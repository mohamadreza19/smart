import {
  Box,
  createTheme,
  responsiveFontSizes,
  styled,
  ThemeProvider,
  Typography,
} from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";

import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import { Link } from "react-router-dom";

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
export const cacheLtr = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export const RtlTheme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: ["IRANSens_v2"],
    },
    palette: {
      primary: {
        main: "#FFA100",
      },
      secondary: {
        main: "#404040",
      },
      info: {
        main: "#FFFFFF",
      },
    },
  })
);
export const LtrTheme = responsiveFontSizes(
  createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            color: "#010101",
          },
        },
      },
    },
    typography: {
      fontFamily: ["IRANSens_v2"],
    },
    palette: {
      primary: {
        main: "#FFA100",
      },
      secondary: {
        main: "#404040",
      },
      info: {
        main: "#FFFFFF",
      },
    },
  })
);
export const MycacheProider = (props) => {
  return props.language === "فارسی" ? (
    <CacheProvider value={cacheRTL}>{props.children}</CacheProvider>
  ) : (
    <div>{props.children}</div>
  );
};
export const ErrorFallbackComponent = ({ error, language }) => {
  const data = {
    title: language === "persion" ? "مشکلی پیش امده است" : "problem happend",
  };
  return (
    <div className="fallback-component d-flex justify-content-center align-items-center flex-column">
      <Typography variant="h6">{data.title}</Typography>
      <Typography variant="body1">{error.message || " "}</Typography>
      <Link to={error.redirect}>
        <Typography> try agin</Typography>
      </Link>
    </div>
  );
};
