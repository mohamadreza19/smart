import { useFormik } from "formik";

import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useImmer } from "use-immer";
import {
  LoginMainBox,
  loginclass,
  LoginRoot,
  LoginTilteBox,
  TextFieldBox,
  ForgetPasswordBox,
  AcionButtonBox,
} from "../../styles/Login/login";
import { UiContext } from "../../Uicontext/UiContext";

import { post_User_login } from "../../services/Translation";
import { LoadingSpinner } from "../loading/LoadingSpinner";
import { translatedLoginValidate } from "../../validation/validation";

export function Login() {
  const {
    trasnlatedConent,
    language,
    dynamicClasses,
    setLoding,
    loading,
    setLoading,
  } = useContext(UiContext);
  const [loginInputs, setLoginInputs] = useImmer({
    email: {
      value: " ",
      error: { message: " ", isError: false },
      name: "email",
    },
    password: {
      value: " ",
      error: { message: " ", isError: false },
      name: "password",
    },
  });
  useEffect(() => {
    // return () => {
    //   Object.keys(loginInputs).forEach((key) => {
    //     loginInputs[key].value = " ";
    //     loginInputs[key].error.message = " ";
    //     loginInputs[key].error.isError = false;
    //   });
    // };
  });

  // const handle
  const handleEmailChange = (event) => {
    setLoginInputs((draft) => {
      draft.email.value = event.target.value;
      draft.email.error.message = " ";
      draft.email.error.isError = false;
    });
  };
  const handlePasswordChange = (event) => {
    setLoginInputs((draft) => {
      draft.password.value = event.target.value;
      draft.password.error.message = " ";
      draft.password.error.isError = false;
    });
  };
  const handleSubmut = async () => {
    console.log(loginInputs.email.value);
    try {
      setLoading(true);
      const inputValue = {
        email: loginInputs.email.value,
        password: loginInputs.password.value,
      };

      await translatedLoginValidate(language).validate(inputValue, {
        abortEarly: false,
      });
      const body = {
        email: loginInputs.email.value,
        password: loginInputs.password.value,
      };
      const response = await post_User_login(body);
      if (response.statusCode == 401) {
        Object.keys((key) => {
          setLoginInputs((draft) => {
            draft[key].error.message = trasnlatedConent.error.is401;
          });
        });
        setLoading(false);
      }

      // console.log("logged");
      // console.log(response);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
      if ("response" in error && error.response.status == 401) {
        Object.keys(loginInputs).forEach((key) => {
          console.log(key);
          setLoginInputs((draft) => {
            draft[key].error.message = trasnlatedConent.error.is401;
            draft[key].error.isError = true;
          });
        });
      }
      error.inner &&
        error.inner.forEach((err) => {
          console.log(err);

          setLoginInputs((draft) => {
            draft[err.path].error.message = err.message;
            draft[err.path].error.isError = true;
          });
        });
      setLoading(false);
    }
  };
  const LoginTilteBox = () => {
    return (
      <div className="d-flex align-items-center mb-3 mt-3">
        <Typography className={dynamicClasses.ps_2}>
          {trasnlatedConent.login.title}
        </Typography>
      </div>
    );
  };
  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <LoginRoot>
          <LoginMainBox>
            <LoginTilteBox />

            <TextFieldBox>
              <TextField
                className="border-radius45 w-75"
                size="small"
                id="outlined-basic"
                label={trasnlatedConent.login.email}
                value={loginInputs.email.value}
                onChange={handleEmailChange}
                helperText={loginInputs.email.error.message}
                error={loginInputs.email.error.isError}
              />
            </TextFieldBox>
            <TextFieldBox>
              <TextField
                className="border-radius45 w-75"
                size="small"
                id="outlined-basic"
                label={trasnlatedConent.login.enterPassword}
                helperText={loginInputs.password.error.message}
                error={loginInputs.password.error.isError}
                onChange={handlePasswordChange}
              />
            </TextFieldBox>
            <ForgetPasswordBox dynamicClasses={dynamicClasses.ps_2}>
              <Link className={dynamicClasses.ps_2} to="/forget-password">
                <Typography variant="body1">
                  {trasnlatedConent.login.forgetPassword}
                </Typography>
              </Link>
            </ForgetPasswordBox>
            <AcionButtonBox>
              <Button
                onClick={handleSubmut}
                className="w-25 mb-2"
                variant="contained"
                color="primary"
              >
                {trasnlatedConent.login.enter}
              </Button>
              <Button className="w-25" variant="contained" color="primary">
                {trasnlatedConent.login.Membership}
              </Button>
            </AcionButtonBox>
          </LoginMainBox>
        </LoginRoot>
      )}
    </>
  );
}
