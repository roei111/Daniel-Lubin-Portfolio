import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./HomeButtons-style";
import { motion } from "framer-motion";

const HomeButtons = () => {
  const classes = useStyles();
  let navigate = useNavigate();

  const worksBtnClickHandler = () => {
    navigate("/works");
  };

  const contactBtnClickHandler = () => {
    navigate("/contact");
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: "30px",
    },
    visible: {
      opacity: 1,
      y: "0",
      transition: {
        duration: 1.5,
        ease: [0.42, 0, 0.58, 1],
        delay: 1,
      },
    },
  };

  return (
    <div className={classes.homeButtonsWrapper}>
      <Button
        variant="contained"
        color="secondary"
        className={`${classes.homeButton} ${classes.workButton}`}
        component={motion.div}
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        onClick={worksBtnClickHandler}
      >
        My Works
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.homeButton}
        component={motion.div}
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        onClick={contactBtnClickHandler}
      >
        Contact Me
      </Button>
    </div>
  );
};

export default HomeButtons;
