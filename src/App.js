import logo from "./logo.svg";
import "./App.css";

import { Box, Button, ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { useImmer } from "use-immer";
import { cacheRTL, LtrTheme, RtlTheme } from "./styles/theme";
import { useContext, useEffect } from "react";

import { Translation } from "./services/Translation";
import { Route, Routes } from "react-router-dom";
import { EnterPage } from "./components/enterpage/EnterPage";
import useLocalStorage from "react-use-localstorage";

function App() {
  const [language, setLanguage] = useImmer("english");
  const [conent, setConent] = useImmer({
    login: {
      title: "Language selection",
    },
  });
  const [username, setUsername] = useLocalStorage("cached-language", "");
  const [dynamicClasses, SetDynamicClasses] = useImmer({});

  useEffect(() => {
    const handleChangeDirection = () => {
      if (language === "persion") {
        document.dir = "rtl";
        setConent(Translation.persion);
      } else {
        document.dir = "ltl";
        setConent(Translation.english);
      }
    };
    handleChangeDirection();
  }, [language]);
  return (
    <>
      <CacheProvider value={cacheRTL}>
        <ThemeProvider theme={language === "persion" ? RtlTheme : LtrTheme}>
          <Routes>
            <Route
              path="/"
              element={!username ? <EnterPage /> : <h1>slm</h1>}
            />
          </Routes>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default App;
