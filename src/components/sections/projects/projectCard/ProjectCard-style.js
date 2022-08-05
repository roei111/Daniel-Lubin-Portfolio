import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  chip: {
    margin: "0.1rem",
    color: "white",
  },
  allChips: {
    margin: "0.5rem 0.3rem",
  },
  card: {
    margin: "2rem auto",
    maxWidth: "500px",
    [theme.breakpoints.up("lg")]: {
      width: "500px",
    },
  },
  contentWrapper: {
    textAlign: "center",
  },
}));
