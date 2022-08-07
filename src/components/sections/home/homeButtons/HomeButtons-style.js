import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  homeButtonsWrapper: {
    marginTop: "1rem !important",
  },
  homeButton: {
    fontWeight: "800 !important",
    letterSpacing: "0.1em !important",
    "&:hover": {
      opacity: "1",
      transition: "all 0.2s ease-in-out",
    },
  },
  workButton: {
    marginRight: "1rem !important",
  },
}));
