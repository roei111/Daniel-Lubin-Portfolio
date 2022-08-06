import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./HomeButtons-style";

const HomeButtons = () => {
  const classes= useStyles();
  let navigate = useNavigate();

  const worksBtnClickHandler = () => {
    navigate("/works");
  };

  const contactBtnClickHandler = () => {
    navigate("/contact");
  };
  return (
    <div>
      <Button
        variant="contained"
        className={classes.homeButton}
        // component={motion.div}
        // variants={buttonVariants}
        // initial="hidden"
        // animate="visible"
        onClick={worksBtnClickHandler}
      >
        My Works
      </Button>
      <Button
        variant="contained"
        className={classes.homeButton}
        onClick={contactBtnClickHandler}
      >
        Contact Me
      </Button>
    </div>
  );
};

export default HomeButtons;
