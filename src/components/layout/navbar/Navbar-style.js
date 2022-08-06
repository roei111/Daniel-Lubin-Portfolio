import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  navbar: {
    height: "45px !important",
    position: "fixed !important",
  },
  toolbar: {
    minHeight: "45px !important",
  },
  navlink: {
    padding: "5px 20px",
    fontWeight: "600 !important",
    cursor: "pointer",
    textDecoration: "none",
    color: "#000",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      textAlign: "center",
    },
    [theme.breakpoints.up("md")]: {
      "&:hover": {
        transition: "color 0.3s linear, border-bottom 0.2s ease-in-out",
        borderBottom: "3px solid",
      },
    },
  },

  activeNavLink: {
    borderBottom: "3px solid",
  },
  hideLinks: {
    display: "none",
    [theme.breakpoints.up("md")]: { display: "block" },
  },
  logo: {
    marginRight: "auto !important",
    fontWeight: "600 !important",
    padding: "5px",
    cursor: "pointer",
  },
  menuIcon: {
    display: "visible",
    [theme.breakpoints.up("md")]: { visibility: "hidden" },
  },
}));
