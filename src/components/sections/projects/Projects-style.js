import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "4rem",
    minHeight: "100vh",
  },
  containerEdit: {

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
  projectCard: {
    margin: "2rem auto",
    maxWidth: "500px",
    height: "350px !important",
    borderRadius: "1%",
    [theme.breakpoints.up("lg")]: {
      width: "500px",
    },
  },
}));
