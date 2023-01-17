import { Typography } from "@mui/material";
import { useContext } from "react";
import ReactLoading from "react-loading";
import { UiContext } from "../../Uicontext/UiContext";
export const LoadingSpinner = ({ message = "خطای نامشخص" }) => {
  const { trasnlatedConent } = useContext(UiContext);
  return (
    <div className="fallback-component">
      <Typography variant="h6">{trasnlatedConent.loading}</Typography>
      <ReactLoading
        type={"spin"}
        color="#ffa100"
        height={"40px"}
        width={"40px"}
      />
    </div>
  );
};
