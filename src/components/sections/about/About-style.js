import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    margin: "1rem",
  },
  title: {
    fontSize: "2rem !important",
    fontWeight: "700 !important",
    textAlign: "center",
    marginBottom: "1rem !important",
  },
  aboutText: {
    lineHeight: "1.7 !important",
    [theme.breakpoints.up("lg")]: {
      marginInline: "2rem !important",
      lineHeight: "2 !important",
    },
    [theme.breakpoints.only("md")]: {
      lineHeight: "2 !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.2rem !important",
    },
  },
  aboutImage: {
    width: "50%",
    marginTop: "1rem",
    [theme.breakpoints.down("md")]: {
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
  skeleton: {
    fontSize: "1rem",
    margin: "0.5rem 2rem !important",
    width: "90vw !important",
    [theme.breakpoints.up("md")]: {
      margin: "1.5rem 2rem !important",
      width: "400px !important",
    },
    [theme.breakpoints.up("lg")]: {
      width: "500px !important",
    },
  },
}));
