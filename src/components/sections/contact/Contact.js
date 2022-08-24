import { Container, Typography, Skeleton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useStyles } from "./Contact-style";
import { useState, useEffect } from "react";
import { getData } from "../../../firestore/utils";

const Contact = () => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    getData("contact").then((contact) => {
      setContact(contact[0]);
    });
  }, []);
  const classes = useStyles();
  return (
    <Container id="contact" className={classes.container}>
      <Typography className={classes.title} component="h2">
        Contact
      </Typography>
      <div className={classes.contactText}>
        <Typography variant="h6">
          <b>Email</b>
        </Typography>
        {contact ? (
          <Typography variant="h7">{contact.email}</Typography>
        ) : (
          <Skeleton variant="text" className={classes.skeleton} />
        )}
        <Typography variant="h6" style={{ marginTop: "1rem" }}>
          <b>Instagram</b>
        </Typography>
        {contact ? (
          <a
            className={classes.icons}
            href={`https://www.instagram.com/${contact.instagramUser}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className={classes.icons} fontSize="medium" />
            <br />
            <Typography variant="h7">
              {contact.instagramUser}
              <OpenInNewIcon fontSize="small" />
            </Typography>
          </a>
        ) : (
          <Skeleton variant="text" className={classes.skeleton} />
        )}
      </div>
    </Container>
  );
};

export default Contact;
