import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  home: {
    height: "100vh",
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url('https://res.cloudinary.com/dq6iduc79/image/upload/v1659642497/Daniel%20Lubin%20Portfolio/Cover_photo_gzqggr.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    [theme.breakpoints.up("lg")]: {
      backgroundImage:
        "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1)), url('https://res.cloudinary.com/dq6iduc79/image/upload/v1659642663/Daniel%20Lubin%20Portfolio/Cover_photo_ua4xsf.jpg')",
    },
  },
  container: {
    display: "flex !important",
    flexDirection: "column",
    height: "55%",
    zIndex: 1,
    [theme.breakpoints.up("lg")]: {
      marginLeft: "60vw !important",
    },
  },
  text: {
    padding: "1rem",
    paddingInline: "0",
    alignSelf: "flex-start",
    fontSize: "1.5rem !important",
    fontWeight: "700 !important",
  },
  homeButtonsWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "95%",
  },
  homeButton: {
    fontWeight: "800 !important",
    letterSpacing: "0.1em !important",
    "&:hover": {
      opacity: "0.85",
      transition: "all 0.2s ease-in-out",
    },
  },
}));
