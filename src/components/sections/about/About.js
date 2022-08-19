import { Container, Typography, Skeleton } from "@mui/material";
import { useStyles } from "./About-style";
import { useState, useEffect } from "react";
import { getAbout } from "../../../firestore/utils";
import DOMPurify from "dompurify";

const About = () => {
  const [about, setAbout] = useState({});

  useEffect(() => {
    getAbout().then((about) => {
      console.log(about[0].text);
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
          {/* <Typography
            className={classes.aboutText}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(about.text,  {ALLOWED_TAGS: ['b','br']}),
            }}
          >
          </Typography> */}
          <Skeleton variant="text" sx={{ fontSize: '1rem', margin: "0.5rem 2rem" }} width={"500px"} />
          <Skeleton variant="text" sx={{ fontSize: '1rem', margin: "0.5rem 2rem" }} width={"500px"} />
          <Skeleton variant="text" sx={{ fontSize: '1rem', margin: "0.5rem 2rem" }} width={"500px"} />
          <Skeleton variant="text" sx={{ fontSize: '1rem', margin: "0.5rem 2rem" }} width={"500px"} />
          <Skeleton variant="text" sx={{ fontSize: '1rem', margin: "0.5rem 2rem" }} width={"500px"} />
          <Skeleton variant="text" sx={{ fontSize: '1rem', margin: "0.5rem 2rem" }} width={"500px"} />
          <Skeleton variant="text" sx={{ fontSize: '1rem', margin: "0.5rem 2rem" }} width={"500px"} />
          <Skeleton variant="text" sx={{ fontSize: '1rem', margin: "0.5rem 2rem" }} width={"500px"} />
          <Skeleton variant="text" sx={{ fontSize: '1rem', margin: "0.5rem 2rem" }} width={"500px"} />
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
