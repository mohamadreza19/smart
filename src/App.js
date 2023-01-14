import logo from "./logo.svg";
import "./App.css";

import { Box, Button, ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { useImmer } from "use-immer";
import { cacheRTL, LtrTheme, RtlTheme } from "./styles/theme";
import { useContext, useEffect } from "react";

import { Translation } from "./services/Translation";
import { Route, Routes } from "react-router-dom";
import { SelectionLanguage } from "./components/selectionLanguage/SelectionLanguage";
import useLocalStorage from "react-use-localstorage";
import { selectionClass } from "./services/classApi";
import { UiContext } from "./Uicontext/UiContext";

function App() {
  const [trasnlatedConent, setTrasnlatedConent] = useImmer({
    setLanguage: {
      title: "Language selection",
    },
    login: {
      title: "Language selection",
    },
  });
  const [cachedLanguage, setCachedLanguage] = useLocalStorage(
    "cached-language",
    ""
  );
  const [language, setLanguage] = useImmer(cachedLanguage || "english");
  const [dynamicClasses, SetDynamicClasses] = useImmer({
    ms_1: "magin-left1",
    ms_2: "magin-left2",
    ms_3: "magin-left3",
    ms_4: "magin-left4",
    ms_5: "magin-left5",
  });

  useEffect(() => {
    const handleChangeDirection = () => {
      if (language === "persion") {
        document.dir = "rtl";
        setTrasnlatedConent(Translation.persion);
        SetDynamicClasses(selectionClass(language));
      } else {
        SetDynamicClasses(selectionClass(language));
        document.dir = "ltl";
        setTrasnlatedConent(Translation.english);
      }
    };
    handleChangeDirection();
  }, [language]);

  return (
    <>
      <CacheProvider value={cacheRTL}>
        <ThemeProvider theme={language === "persion" ? RtlTheme : LtrTheme}>
          <UiContext.Provider
            value={{
              dynamicClasses,
              trasnlatedConent,
              language,
              setLanguage,
              setCachedLanguage,
            }}
          >
            <Routes>
              <Route
                path="/"
                element={!cachedLanguage ? <SelectionLanguage /> : <h1>slm</h1>}
              />
            </Routes>
          </UiContext.Provider>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default App;
