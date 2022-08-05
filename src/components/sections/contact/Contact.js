import { Container, Typography, Divider } from "@mui/material";
import { useStyles } from "./Contact-style";

const Contact = () => {
  const classes = useStyles();
  return (
    <Container id="contact">
      <Divider variant="middle" style={{ margin: "1rem" }} />
      <Typography className={classes.title} component="h2">
        Contact
      </Typography>
      {/* <div className={classes.aboutContent}>
        <div>
          <Typography className={classes.aboutText}>
          Hi! Thanks for finding me.<br/>

My name is <b>Daniel Lubin</b> and I write music. In my work, I am interested in the challenge of stimulating a <b>meaningful</b> emotional response to the language of contemporary music.<br/>

Formerly an electronic musician yet classically trained, My creative input draws upon a wide range of genres - from EDM and Jazz to today’s modern composition world. My goal is to create an <b>exciting fusion</b> of those influences in the <b>concert hall</b>.<br/>

Under the mentorship of <b>John Corigliano</b>, I am currently pursuing a Bachelor of Music in Composition from <b>The Juilliard School</b>. 

          </Typography>
        </div>
        <img
          src={
            "https://res.cloudinary.com/dq6iduc79/image/upload/v1659701636/Daniel%20Lubin%20Portfolio/Headshot_psz4l7_o6ml5z.jpg"
          }
          alt="about me"
          className={classes.aboutImage}
        />
      </div> */}
    </Container>
  );
};

export default Contact;
