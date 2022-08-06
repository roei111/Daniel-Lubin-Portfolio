import About from "../components/sections/about/About";
import { useStyles } from "../components/sections/about/About-style";

const AboutPage = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.aboutPage}></div>
      <About />
    </>
  );
};

export default AboutPage;
