import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    width: "90vw",
    height: "15vh",
    marginTop: "12vh",
    [theme.breakpoints.up("lg")]: {
      height: "25vh",
      width: "40vw",
      marginTop: "55vh",
    },
  },
  svg: {
    width: "auto",
    alignSelf: "flex-start",
    "& path": {
      stroke: "white",
      strokeWidth: "5",
      fill: (props) =>
        //If the theme has changed one or more times, the fill will be without animation - to prevent animation repetition
        props.isThemeChanged ? "white" : null,
    },
  },
}));