import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  footer: {
    height: "100%",
    backgroundColor: "#121212",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    backgroundImage:
      "linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))",
    marginTop: "3rem",
  },
  icons: {
    width: "20%",
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    margin: "0 auto !important",
    marginTop: "1rem !important",
    "& svg": {
      color: "#FFF",
      opacity: "70%",
    },
  },
  copyright: {
    color: "#FFF",
    fontSize: "0.7rem",
    width: "70%",
    margin: "0 auto",
    marginBottom: "0.2rem",
    opacity: "70%",
  },
}));
