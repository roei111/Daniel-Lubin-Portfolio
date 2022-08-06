import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import { useStyles } from "./Navbar-style";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Works", href: "/works" },
  { name: "Contact", href: "/contact" },
];

const navVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};
const linkVariants = {
  hidden: (index) => ({
    y: -30,
    opacity: 0,
  }),
  visible: (index) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: index * 0.2,
      duration: 2,
      ease: "easeInOut",
    },
  }),
};

const activeNavStyle = { borderBottom: "3px solid" };

const Navbar = (props) => {
  const classes = useStyles();
  let { pathname } = useLocation();
  let navigate = useNavigate();

  const backToTop = () => {
    if (pathname === "/") scroll.scrollToTop();
    else navigate("/");
  };
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky" color="default" className={classes.navbar}>
      <Toolbar
        disableGutters
        component={motion.nav}
        className={classes.toolbar}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <Typography
          className={classes.logo}
          variant="h7"
          color="text.primary"
          onClick={backToTop}
        >
          Daniel Lubin
        </Typography>
        {navLinks.map((item, index) => (
          <NavLink
            className={`${classes.navlink} ${classes.hideLinks}`}
            style={({ isActive }) =>
              isActive && item.name !== "Home" ? activeNavStyle : undefined
            }
            to={item.href}
            key={item.name}
            component={motion.a}
            custom={index}
            variants={linkVariants}
            initial="hidden"
            animate="visible"
          >
            {item.name}
          </NavLink>
        ))}
        <IconButton className={classes.menuIcon} onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div
          onClick={() => setOpen(false)}
          onKeyPress={() => setOpen(false)}
          role="button"
          tabIndex={0}
        >
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {navLinks.map((item) => (
            <React.Fragment key={item.name}>
              <ListItem>
                <NavLink
                  className={classes.navlink}
                  style={({ isActive }) =>
                    isActive && item.name !== "Home"
                      ? activeNavStyle
                      : undefined
                  }
                  to={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </NavLink>
              </ListItem>
              <Divider variant="middle" />
            </React.Fragment>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
};

export default Navbar;
