import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "2rem !important",
    fontWeight: "700 !important",
    textAlign: "center",
    marginBottom: "1rem !important",
  },
  aboutText: {
    fontSize: "1.2rem !important",
  },
  aboutImage: {
    width: "50%",
    marginTop: "1rem",
    [theme.breakpoints.only("sm")]: {
      width: "100%",
    },
  },
  colorText: {
    color: [theme.palette.primary.main],
  },
  aboutContent: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
}));