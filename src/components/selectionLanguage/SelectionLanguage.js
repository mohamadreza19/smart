import {
  ArrowBack,
  ArrowForward,
  ArrowRightAlt,
  CheckCircle,
} from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { useContext, useEffect, useLayoutEffect } from "react";
import { UiContext } from "../../Uicontext/UiContext";
import {
  FaAdversal,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
} from "react-icons/fa";
import {
  get_files_publicById,
  get_Interface_Language,
} from "../../services/Translation";
import { LoadingSpinner } from "../loading/LoadingSpinner";

export function SelectionLanguage() {
  const {
    trasnlatedConent,
    dynamicClasses,
    language,
    setLanguage,
    setCachedLanguage,
    setInterfaceLanguages,
    interfaceLanguages,
    loading,
    setLoading,
  } = useContext(UiContext);

  useEffect(() => {
    const callApiForGet_InterfaceLanguages = async () => {
      try {
        setLoading(true);
        const response = await get_Interface_Language();
        // for set defualt language

        if (response.status === 200) {
          let array = [];

          // const availableLanguage =
          response.data.items.forEach(async (value, index) => {
            array.push({
              name: value.name,
              icon: value.icon.id,
            });
          });

          setInterfaceLanguages(array);
          setLoading(false);
        } else {
          setLoading(false);
          throw "text";
        }
      } catch (error) {
        if ("code" in error && error.code === "ERR_NETWORK") {
          throw new Error(trasnlatedConent.error.not200);
        }
      }
    };
    callApiForGet_InterfaceLanguages();
  }, []);

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

        <Typography variant="h6">{handllyLanguage}</Typography>
      </div>
    );
  };
  const EnterButtonBox = () => {
    const Icon = language !== "فارسی" ? ArrowRightAlt : FaLongArrowAltLeft;

    return (
      <div
        onClick={() => {
          setCachedLanguage(language);
        }}
        className="w-100 d-flex justify-content-end mt-4"
      >
        <Button
          variant="contained"
          color="secondary"
          className={`w-25 ${dynamicClasses.me_2} text-color-white100 fill-black100 border-radius45`}
        >
          <Typography variant="button" className="text-color-white100">
            {trasnlatedConent.setLanguage.enter}
          </Typography>
          {/* <Icon
            className="icon"
             width="0.875rem " height="0.875rem "
          /> */}
          {language !== "فارسی" ? (
            <ArrowForward className="icon fill-white100" />
          ) : (
            <ArrowBack className="icon fill-white100" />
          )}
          {/* <FaLongArrowAltRight width="0.875rem !important" height="0.875rem" /> */}
        </Button>
      </div>
    );
  };
  const ShowAvailableLanguage = () => {
    return (
      <div className="w-100 d-flex flex-column">
        {interfaceLanguages.map((item, index) => {
          return (
            <article
              key={index}
              className="mx-4 mb-3 border-bottom d-flex align-items-center cur-pointer justify-content-space-between"
              onClick={() => {
                setLanguage(item.name);
                // setCachedLanguage("english");
              }}
            >
              <CheckedCircleDynamic handllyLanguage={item.name} />
              <div>
                <img
                  className="flag"
                  src={`http://185.110.190.84:1123/api/files/public/${item.icon}`}
                />
              </div>
            </article>
          );
        })}
        <EnterButtonBox />
      </div>
    );
  };

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="w-100 h_vh100 bg_primary d-flex align-items-center justify-content-center">
          <section className=" w-75 h_300px  bg-white border-radius5">
            <header className="  d-flex justify-content-center mt-3 mb-3">
              <Typography className="text-muted" variant="h4">
                {trasnlatedConent.setLanguage.title}
              </Typography>
            </header>
            <ShowAvailableLanguage />
          </section>
        </div>
      )}
    </>
  );
}
