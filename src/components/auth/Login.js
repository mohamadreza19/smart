import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
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

export function Login() {
  const { trasnlatedConent, language, dynamicClasses } = useContext(UiContext);
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
      <LoginRoot>
        <LoginMainBox>
          <LoginTilteBox />

          <TextFieldBox>
            <TextField
              className="border-radius45"
              size="small"
              id="outlined-basic"
              label={trasnlatedConent.login.email}
            />
          </TextFieldBox>
          <TextFieldBox>
            <TextField
              className="border-radius45"
              size="small"
              id="outlined-basic"
              label={trasnlatedConent.login.email}
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
            <Button className="w-25" variant="contained" color="primary">
              {trasnlatedConent.login.enter}
            </Button>
            <Button className="w-25" variant="contained" color="primary">
              {trasnlatedConent.login.Membership}
            </Button>
          </AcionButtonBox>
        </LoginMainBox>
      </LoginRoot>
    </>
  );
}
