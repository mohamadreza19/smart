import * as yup from "yup";

export const translatedLoginValidate = (language) => {
  console.log(language);
  if (language === "فارسی") {
    return yup.object().shape({
      email: yup
        .string()
        // .required("ادرس ایمیل الزامی میباشد")
        .email("آدرس ایمیل معبر نمی باشد"),
      password: yup
        .string()
        .min(4, "پسور باید حداق دارای چهار کارکتر باشد")
        .max(12, "پسور باید حداکثر دارای 12 کارکتر بتشد")
        .matches(
          /^.*(?=.*\d)((?=.*[a-zA-Z]+){1}).*$/,
          "رمز عبور باید حداقل شامل  کارکتر انگیسی و عدد باشد"
        )
        .required("پسورد الزامی میباشد"),
    });
  } else if (language === "English") {
    return yup.object().shape({
      email: yup
        .string()
        // .required("ادرس ایمیل الزامی میباشد")
        .email(),
      password: yup
        .string()
        // .min(4, "Password must have at least four characters")
        // .max(12, "The password must have a maximum of 12 characters")
        .matches(
          /^.*(?=.*\d)((?=.*[a-zA-Z]+){1}).*$/,
          "The password must contain at least English characters and numbers"
        )
        // .required("Password is required"),
        .required(),
    });
  }
};

export const LoginValidate = yup.object().shape({
  email: yup
    .string()
    // .required("ادرس ایمیل الزامی میباشد")
    .email("آدرس ایمیل معبر نمی باشد"),
  password: yup
    .string()
    .min(4, "پسور باید حداق دارای چهار کارکتر باشد")
    .max(12, "پسور باید حداکثر دارای 12 کارکتر بتشد")
    .matches(
      /^.*(?=.*\d)((?=.*[a-zA-Z]?){1}).*$/,
      "رمز عبور باید حداقل شامل  کارکتر انگیسی و عدد باشد"
    )
    .required("پسورد الزامی میباشد"),
});
// ("پسور باید شامل ");

// /^.*(?=.{8})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
// "Password must contain at least 8 characters, one uppercase, one number and one special case character"
