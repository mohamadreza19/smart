import axios from "axios";
export const Translation = {
  english: {
    setLanguage: {
      title: "Language selection",
      // enter: "enter",
    },
    login: {
      title: "enter to website",
    },
  },
  persion: {
    setLanguage: {
      title: "انتخاب زبان",
      // enter: "ورود",
    },
    login: {
      title: "ورود به سایت",
    },
  },
};

const backApi = "http://185.110.190.84:1123/api";
export const get_Interface_Language = async () => {
  const url = `${backApi}/interface-languages`;
  return axios.get(url);
};
