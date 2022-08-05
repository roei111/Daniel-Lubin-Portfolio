import { Container, Typography, Divider } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useStyles } from "./Contact-style";

const Contact = () => {
  const classes = useStyles();
  return (
    <Container id="contact">
      <Divider variant="middle" style={{ margin: "1rem" }} />
      <Typography className={classes.title} component="h2">
        Contact
      </Typography>
      <div className={classes.contactText}>
        <Typography variant="h6">
          <b>Email</b>
        </Typography>
        <Typography variant="h7">daniellubin@gmail.com</Typography>
        <Typography variant="h6" style={{ marginTop: "1rem" }}>
          <b>Instagram</b>
        </Typography>
        <a
          className={classes.icons}
          href="https://www.instagram.com/daniellubin_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon className={classes.icons} fontSize="medium" />
          <br/>
          <Typography variant="h7">
            daniellubin_
            <OpenInNewIcon fontSize="small" />
          </Typography>
        </a>
      </div>
    </Container>
  );
};

export default Contact;
