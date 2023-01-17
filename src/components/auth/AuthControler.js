import { useContext, useLayoutEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UiContext } from "../../Uicontext/UiContext";

export function AuthControler({ isAdmin = false, redirect = "/", children }) {
  const { isLogin: isLoginUser } = useContext(UiContext);

  if (isLoginUser === false) {
    return <Navigate to={redirect} />;
  } else {
    return children;
  }
}
