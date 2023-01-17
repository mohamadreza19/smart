import { createElement } from "react";

export const loginclass = {
  root: "w-100 h_vh100 bg_primary d-flex align-items-center justify-content-center",
  LoginMainBox: "w-75 h_300px bg-white border-radius5 d-flex flex-column ",
  LoginTilteBox: "w-100 ",
};

export const LoginRoot = (props) => {
  return createElement(
    "div",

    {
      className: loginclass.root,
    },
    props.children
  );
};
export const LoginMainBox = (props) => {
  return createElement(
    "div",

    {
      className: loginclass.LoginMainBox,
    },
    props.children
  );
};
export const TextFieldBox = (props) => {
  return createElement(
    "div",
    {
      className: "w-100 d-flex justify-content-center mb-4",
    },
    props.children
  );
};
export const ForgetPasswordBox = (props) => {
  return createElement(
    "div",
    {
      className: "w-100 d-flex justify-content-start mb-4 ",
    },
    props.children
  );
};
export const AcionButtonBox = (props) => {
  return createElement(
    "div",
    {
      className:
        "mb-5 w-100 d-flex justify-content-center flex-column align-items-center ",
    },
    props.children
  );
};
