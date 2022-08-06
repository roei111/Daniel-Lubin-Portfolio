import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "4rem",
    minHeight: "100vh",
  },
  title: {
    fontSize: "2rem !important",
    fontWeight: "700 !important",
    textAlign: "center",
    marginBottom: "1rem !important",
  },
  projectsWrapper: {
    [theme.breakpoints.up("lg")]: {
      display: "grid",
      gridAutoFlow: "row",
      gridTemplateColumns: "600px 600px",
      justifyContent: "center",
    },
  },
}));
