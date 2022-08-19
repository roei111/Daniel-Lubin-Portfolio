import { Container, Typography, Skeleton } from "@mui/material";
import { useStyles } from "./About-style";
import { useState, useEffect } from "react";
import { getAbout } from "../../../firestore/utils";
import DOMPurify from "dompurify";

const About = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    getAbout().then((about) => {
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
        <img
          src={
            "https://res.cloudinary.com/dq6iduc79/image/upload/v1659701636/Daniel%20Lubin%20Portfolio/Headshot_psz4l7_o6ml5z.jpg"
          }
          alt="about me"
          className={classes.aboutImage}
        />
      </div>
    </Container>
  );
};

export default About;
