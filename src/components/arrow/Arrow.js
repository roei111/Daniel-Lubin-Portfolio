import "./arrow-style.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Arrow = () => {
  return (
    <Link
      className="arrow"
      to="about"
      spy={true}
      smooth={true}
      offset={-50}
      duration={500}
    >
      <span></span>
      <span></span>
      <span></span>
    </Link>
  );
};

export default Arrow;
