import AnimationName from "./animationName/AnimationName";
import { Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Arrow from "../../arrow/Arrow";
import { useStyles } from "./Home-style";

const textVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: "0",
    transition: {
      duration: 4,
      ease: "easeInOut",
    },
  },
};

const Home = (props) => {
  const classes = useStyles();
  return (
    <section className={classes.home} id="home">
      <Container className={classes.container}>
        <AnimationName {...props} />
        <Typography
          component={motion.div}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          color="white"
          className={classes.text}
        >
          Musician | Composer
        </Typography>
      </Container>
      <Arrow />
    </section>
  );
};

export default Home;
