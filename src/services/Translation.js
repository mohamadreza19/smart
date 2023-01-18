import axios from "axios";
export const Translation = {
  english: {
    loading: "Loading please be patient",
    setLanguage: {
      title: "Language selection",
      enter: "enter",
    },
    login: {
      title: "enter to website",
      email: "enter the email",
      enterPassword: "enter password",
      forgetPassword: "forgetPassword",
      enter: "enter",
      Membership: "Membership",
    },
    error: {
      not200: "There is a problem with the server connection",
      is401: "The email or password is incorrect",
    },
  },
  persion: {
    loading: "در حال بارگذاری لطفا صبور باشید",
    setLanguage: {
      title: "انتخاب زبان",
      enter: "ورود",
    },
    login: {
      title: "ورود به سایت",
      email: "ایمیل را وارد نمایید",
      enterPassword: "پسورد را وارد نماید",
      forgetPassword: "فراموشی رمز عبور",
      enter: "ورود",
      Membership: "عضویت",
    },
    error: {
      not200: "مشکلی در بر قراری با سرور رخ داده است",
      is401: "ایمیل یا پسورد اشتباه میباشد",
    },
  },
};

const backApi = "http://185.110.190.84:1123/api";
export const get_Interface_Language = async () => {
  const url = `${backApi}/interface-languages`;
  return axios.get(url);
};
export const get_files_publicById = async (file_id) => {
  const url = `${backApi}/files/public/${file_id}`;
  return axios.get(url);
};
export const post_User_login = async (body) => {
  const url = `${backApi}/users/login`;
  return axios.post(url, body);
};
