import { TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import {
  LoginMainBox,
  loginclass,
  LoginRoot,
  LoginTilteBox,
} from "../../styles/Login/login";
import { UiContext } from "../../Uicontext/UiContext";

export function Login() {
  const { trasnlatedConent, language } = useContext(UiContext);
  const LoginTilteBox = () => {
    const Icon =
      language === "english" ? FaLongArrowAltRight : FaLongArrowAltLeft;
    return (
      <div className="d-flex align-items-center">
        <Typography>{trasnlatedConent.login.title}</Typography>
        <Icon />
      </div>
    );
  };
  return (
    <>
      <LoginRoot>
        <LoginMainBox>
          <LoginTilteBox>
            <Typography>{trasnlatedConent.login.title}</Typography>
          </LoginTilteBox>
          <TextField id="outlined-basic" label="Outlined" />
        </LoginMainBox>
      </LoginRoot>
    </>
  );
}
