import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    width: "90vw",
    height: "15vh",
    marginTop: "12vh",
    [theme.breakpoints.up("sm")]: {
      height: "20vh",
      width: "40vw",
    },
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
    },
  },
}));