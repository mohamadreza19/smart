import { createElement } from "react";

export const loginclass = {
  root: "w-100 h_vh100 bg_primary d-flex align-items-center justify-content-center",
  LoginMainBox: "w-75 h_300px bg-white border-radius5 d-flex flex-column ps-2",
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
// export const LoginTilteBox = (props) => {
//   return createElement(
//     "div",
//     {
//       className: loginclass.LoginTilteBox,
//     },
//     props.children
//   );
// };
