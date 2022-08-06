import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  homeButtonsWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "95%",
  },
  homeButton: {
    fontWeight: "800 !important",
    letterSpacing: "0.1em !important",
    // width: "40%",
    "&:hover": {
      opacity: "1",
      transition: "all 0.2s ease-in-out",
    },
  },
}));
