import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    marginTop: "4rem",
  },
  title: {
    fontSize: "2rem !important",
    fontWeight: "700 !important",
    textAlign: "center",
    marginBottom: "1rem !important",
  },
  contactText: {
    width: "50%",
    textAlign: "center",
  },
  icons: {
    color: "#000",
    textDecoration: "none !important",
    "& svg": {
      color: "#000",
    },
  },
  skeleton: {
    margin: "0 auto",
    width: "150px"
  },
  contactImage: {
    width: "50%",
    margin: "0 auto",
    marginTop: "2rem",
    display: "block",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  content: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
}));
