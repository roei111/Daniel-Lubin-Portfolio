import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  wrapperDiv: {
    display: "flex",
    justifyContent: "end",
  },
  fab: {
    position: "fixed !important",
    bottom: "2vh",
    right: "2vh",
    zIndex: "100",
    backgroundColor: "#000 !important",
    color: "#FFF !important",
  },
});
