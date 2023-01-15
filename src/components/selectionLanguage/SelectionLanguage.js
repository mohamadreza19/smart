import { ArrowBack, ArrowForward, CheckCircle } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { useContext, useEffect, useLayoutEffect } from "react";
import { UiContext } from "../../Uicontext/UiContext";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

export function SelectionLanguage() {
  const {
    trasnlatedConent,
    dynamicClasses,
    language,
    setLanguage,
    setCachedLanguage,
  } = useContext(UiContext);

  const CheckedCircleDynamic = ({ handllyLanguage }) => {
    return (
      <div className={`d-flex align-items-center justify-content-center  `}>
        <article
          className={dynamicClasses.me_2 + " checkCittecle-box"}
          style={{}}
        >
          {handllyLanguage === language && (
            <CheckCircle className={` fill-blue100`} fontSize="small" />
          )}
        </article>

        <Typography variant="h6">
          {handllyLanguage === "english" ? "english" : "فارسی"}
        </Typography>
      </div>
    );
  };

  const EnterButtonBox = () => {
    const Icon =
      language === "english" ? FaLongArrowAltRight : FaLongArrowAltLeft;
    return (
      <div
        onClick={() => {
          setCachedLanguage(language);
        }}
        className="w-100 d-flex justify-content-end mt-4"
      >
        <Button
          variant="contained"
          color="primary"
          className={`w-25 ${dynamicClasses.me_2}`}
        >
          <Typography variant="button">
            {trasnlatedConent.setLanguage.enter}
          </Typography>
          <Icon width="0.875rem" height="0.875rem" />
        </Button>
      </div>
    );
  };
  return (
    <div className="w-100 h_vh100 bg_primary d-flex align-items-center justify-content-center">
      <section className=" w-75 h_300px  bg-white border-radius5">
        <header className="  d-flex justify-content-center mt-3 mb-3">
          <Typography className="text-muted" variant="h4">
            {trasnlatedConent.setLanguage.title}
          </Typography>
        </header>
        <div className="w-100 d-flex flex-column">
          <article
            className="mx-4 mb-3 border-bottom d-flex align-items-center cur-pointer justify-content-space-between"
            onClick={() => {
              setLanguage("english");
              // setCachedLanguage("english");
            }}
          >
            <CheckedCircleDynamic handllyLanguage={"english"} />
            <div className="english-flag"></div>
          </article>
          <article
            className="mx-4 mb-3 border-bottom d-flex align-items-center cur-pointer justify-content-space-between"
            onClick={() => {
              setLanguage("persion");
              // setCachedLanguage("persion");
            }}
          >
            <CheckedCircleDynamic handllyLanguage={"persion"} />
            <div className="persion-flag"></div>
          </article>
          <EnterButtonBox />
        </div>
      </section>
    </div>
  );
}
