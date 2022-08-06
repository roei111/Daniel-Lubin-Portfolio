import AnimationName from "./animationName/AnimationName";
import { Container } from "@mui/material";
import Arrow from "../../arrow/Arrow";
import { useStyles } from "./Home-style";
import HomeButtons from "./homeButtons/HomeButtons";

const Home = () => {
  const classes = useStyles();

  return (
    <section className={classes.home} id="home">
      <Container className={classes.container}>
        <AnimationName />
        <HomeButtons />
      </Container>
      <Arrow />
    </section>
  );
};

export default Home;
