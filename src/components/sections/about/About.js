import { Container, Typography, Skeleton } from "@mui/material";
import { useStyles } from "./About-style";
import { useState, useEffect } from "react";
import { getData } from "../../../firestore/utils";
import DOMPurify from "dompurify";

const About = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    getData("about")
      .then((about) => {
        setAbout(about[0]);
      });
  }, []);
  const classes = useStyles();
  return (
    <Container id="about" className={classes.container}>
      <Typography className={classes.title} component="h2">
        About me
      </Typography>
      <div className={classes.aboutContent}>
        <div>
          {about ? (
            <Typography
              className={classes.aboutText}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(about.text, {
                  ALLOWED_TAGS: ["b", "br"],
                }),
              }}
            ></Typography>
          ) : (
            [...Array(10)].map((item, index) => (
              <Skeleton
                key={index}
                variant="text"
                className={classes.skeleton}
              />
            ))
          )}
        </div>
        {about && about.imageUrl ? (
          <img
            src={about.imageUrl}
            alt="about me"
            className={classes.aboutImage}
          />
        ) : (
          <Skeleton
            variant="rectangular"
            className={classes.skeleton}
            width={210}
            height={118}
          />
        )}
      </div>
    </Container>
  );
};

export default About;
