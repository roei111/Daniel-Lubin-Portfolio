import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "2rem !important",
    fontWeight: "700 !important",
    textAlign: "center",
    marginBottom: "1rem !important",
  },
  contactText: {
    textAlign: "center",
  },
  icons: {
    color: "#000",
    textDecoration: "none !important",
    "& svg": {
      color: "#000",
    },
  },
}));
