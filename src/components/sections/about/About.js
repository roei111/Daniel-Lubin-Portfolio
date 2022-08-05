import { Container, Typography, Divider } from "@mui/material";
import { useStyles } from "./About-style";

const About = () => {
  const classes = useStyles();
  return (
    <Container id="about">
      <Divider variant="middle" style={{ margin: "1rem" }} />
      <Typography className={classes.title} component="h2">
        About me
      </Typography>
      <div className={classes.aboutContent}>
        <div>
          <Typography className={classes.aboutText}>
          Hi! Thanks for finding me. 

My name is Daniel Lubin and I write music. In my work, I am interested in the challenge of stimulating a meaningful emotional response to the language of contemporary music.

Formerly an electronic musician yet classically trained, My creative input draws upon a wide range of genres - from EDM and Jazz to today’s modern composition world. My goal is to create an exciting fusion of those influences in the concert hall.

Under the mentorship of John Corigliano, I am currently pursuing a Bachelor of Music in Composition from The Juilliard School. 

          </Typography>
        </div>
        <img
          src={
            "https://res.cloudinary.com/dq6iduc79/image/upload/v1659641246/Daniel%20Lubin%20Portfolio/Headshot_psz4l7.jpg"
          }
          alt="about me"
          className={classes.aboutImage}
        />
      </div>
    </Container>
  );
};

export default About;
