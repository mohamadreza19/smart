import { useContext, useEffect, useLayoutEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UiContext } from "../../Uicontext/UiContext";

export function Main() {
  const { isLogin } = useContext(UiContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, []);

  return <div>main</div>;
}
