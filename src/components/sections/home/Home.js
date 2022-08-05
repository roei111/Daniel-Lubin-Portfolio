import AnimationName from "./animationName/AnimationName";
import { Container } from "@mui/material";
import Arrow from "../../arrow/Arrow";
import { useStyles } from "./Home-style";

const Home = (props) => {
  const classes = useStyles();
  return (
    <section className={classes.home} id="home">
      <Container className={classes.container}>
        <AnimationName {...props} />
      </Container>
      <Arrow />
    </section>
  );
};

export default Home;
