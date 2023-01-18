import logo from "./logo.svg";
import "./App.css";

import { Box, Button, ThemeProvider, Typography } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { useImmer } from "use-immer";
import {
  cacheRTL,
  ErrorFallbackComponent,
  LtrTheme,
  MycacheProider,
  RtlTheme,
} from "./styles/theme";
import { useContext, useEffect } from "react";

import { get_Interface_Language, Translation } from "./services/Translation";
import { Route, Routes } from "react-router-dom";
import { SelectionLanguage } from "./components/selectionLanguage/SelectionLanguage";
import useLocalStorage from "react-use-localstorage";
import { selectionClass } from "./services/classApi";
import { UiContext } from "./Uicontext/UiContext";
import { Main } from "./components/main/Main";
import { Login } from "./components/auth/Login";
import { ErrorBoundary } from "react-error-boundary";
import { AuthControler } from "./components/auth/AuthControler";

function App() {
  const [trasnlatedConent, setTrasnlatedConent] = useImmer({
    setLanguage: {
      title: "Language selection",
    },
    login: {
      title: "Language selection",
    },
    error: {
      not200: "There is a problem with the server connection",
    },
  });
  const [loading, setLoading] = useImmer(false);
  const [cachedLanguage, setCachedLanguage] = useLocalStorage(
    "cached-language",
    ""
  );
  const [language, setLanguage] = useImmer(cachedLanguage || "English");
  const [interfaceLanguages, setInterfaceLanguages] = useImmer([
    {
      name: "init",
      icon: "7a602cb8-f099-439c-a347-63d35cff1ff0",
    },
  ]);
  const [dynamicClasses, SetDynamicClasses] = useImmer({
    ms_1: "magin-left1",
    ms_2: "magin-left2",
    ms_3: "magin-left3",
    ms_4: "magin-left4",
    ms_5: "magin-left5",
  });
  const [isLogin, setIsLogin] = useImmer(false);
  const [error, setError] = useImmer({
    status: false,
    message: "slm",
    redirect: "/",
  });

  useEffect(() => {
    const handleChangeDirection = () => {
      if (language === "فارسی") {
        document.dir = "rtl";
        setTrasnlatedConent(Translation.persion);
        SetDynamicClasses(selectionClass(language));
      }
      if (language === "English") {
        SetDynamicClasses(selectionClass(language.toLocaleLowerCase()));
        document.dir = "ltl";
        setTrasnlatedConent(Translation.english);
      }
    };
    handleChangeDirection();
  }, [language]);

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallbackComponent}
      language={language}
    >
      <MycacheProider language={language}>
        <ThemeProvider theme={language === "persion" ? RtlTheme : LtrTheme}>
          <UiContext.Provider
            value={{
              dynamicClasses,
              trasnlatedConent,
              language,
              setLanguage,
              setCachedLanguage,
              isLogin,
              setIsLogin,
              interfaceLanguages,
              setInterfaceLanguages,
              loading,
              setLoading,
              error,
              setError,
            }}
          >
            {error.status ? (
              <ErrorFallbackComponent error={error} />
            ) : (
              <>
                {!cachedLanguage ? (
                  <SelectionLanguage />
                ) : (
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <AuthControler redirect="/login">
                          <Main />
                        </AuthControler>
                      }
                    >
                      <Route
                        path="home"
                        element={
                          <AuthControler redirect="/login">
                            <h1>home</h1>
                          </AuthControler>
                        }
                      />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Login />} />
                  </Routes>
                )}
              </>
            )}
          </UiContext.Provider>
        </ThemeProvider>
      </MycacheProider>
    </ErrorBoundary>
  );
}

export default App;
