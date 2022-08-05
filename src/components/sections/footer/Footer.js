import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useStyles } from "./Footer-style";

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
        <a
        className={classes.icons}
        href="https://www.linkedin.com/in/roei-yaacobi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon fontSize="medium" />
      </a>
        <p className={classes.copyright}>ROEI YAACOBI - WEB DEVELOPER <br/>COPYRIGHT © 2022 ALL RIGHTS RESERVE</p>
    </footer>);
};

export default Footer;
