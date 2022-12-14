import { motion } from "framer-motion";
import { useStyles } from "./AnimationName-style";

const pathVariants = {
  hidden: () => ({
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  }),
  visible: () => ({
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
    transition: {
      pathLength: { duration: 3, ease: "easeInOut" },
      fill: {
        duration: 2,
        ease: [1, 0, 0.8, 1],
        delay: 1,
      },
    },
  }),
};

const pathAttributes = {
  initial: "hidden",
  animate: "visible",
};

const AnimationName = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <svg
        width="626"
        height="100%"
        viewBox="0 0 626 253"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={classes.svg}
      >
        <motion.path
          d="M36.336 5.63203C47.28 5.63203 56.736 7.69603 64.704 11.824C72.768 15.856 78.912 21.664 83.136 29.248C87.456 36.832 89.616 45.76 89.616 56.032C89.616 66.304 87.456 75.232 83.136 82.816C78.912 90.304 72.768 96.064 64.704 100.096C56.736 104.032 47.28 106 36.336 106H5.08801V5.63203H36.336ZM36.336 95.2C49.296 95.2 59.184 91.792 66 84.976C72.816 78.064 76.224 68.416 76.224 56.032C76.224 43.552 72.768 33.808 65.856 26.8C59.04 19.792 49.2 16.288 36.336 16.288H18.192V95.2H36.336Z"
          variants={pathVariants}
          {...pathAttributes}
        />
        <motion.path
          d="M166.229 83.68H122.453L114.389 106H100.565L136.853 6.20803H151.973L188.117 106H174.293L166.229 83.68ZM162.485 73.024L144.341 22.336L126.197 73.024H162.485Z"
          variants={pathVariants}
          {...pathAttributes}
        />
        <motion.path
          d="M282.844 106H269.74L217.036 26.08V106H203.932V5.48804H217.036L269.74 85.264V5.48804H282.844V106Z"
          variants={pathVariants}
          {...pathAttributes}
        />
        <motion.path
          d="M318.286 5.63203V106H305.182V5.63203H318.286Z"
          variants={pathVariants}
          {...pathAttributes}
        />
        <motion.path
          d="M353.723 16.288V49.84H390.299V60.64H353.723V95.2H394.619V106H340.619V5.48804H394.619V16.288H353.723Z"
          variants={pathVariants}
          {...pathAttributes}
        />
        <motion.path
          d="M427.551 95.344H462.687V106H414.447V5.63203H427.551V95.344Z"
          variants={pathVariants}
          {...pathAttributes}
        />
        <motion.path
          d="M18.192 236.344H53.328V247H5.08801V146.632H18.192V236.344Z"
          variants={pathVariants}
          {...pathAttributes}
        />
        <motion.path
          d="M80.0603 146.632V210.136C80.0603 219.064 82.2203 225.688 86.5403 230.008C90.9563 234.328 97.0523 236.488 104.828 236.488C112.508 236.488 118.508 234.328 122.828 230.008C127.244 225.688 129.452 219.064 129.452 210.136V146.632H142.556V209.992C142.556 218.344 140.876 225.4 137.516 231.16C134.156 236.824 129.596 241.048 123.836 243.832C118.172 246.616 111.788 248.008 104.684 248.008C97.5803 248.008 91.1483 246.616 85.3883 243.832C79.7243 241.048 75.2123 236.824 71.8523 231.16C68.5883 225.4 66.9563 218.344 66.9563 209.992V146.632H80.0603Z"
          variants={pathVariants}
          {...pathAttributes}
        />
        <motion.path
          d="M214.672 195.304C218.32 195.88 221.632 197.368 224.608 199.768C227.68 202.168 230.08 205.144 231.808 208.696C233.632 212.248 234.544 216.04 234.544 220.072C234.544 225.16 233.248 229.768 230.656 233.896C228.064 237.928 224.272 241.144 219.28 243.544C214.384 245.848 208.576 247 201.856 247H164.416V146.632H200.416C207.232 146.632 213.04 147.784 217.84 150.088C222.64 152.296 226.24 155.32 228.64 159.16C231.04 163 232.24 167.32 232.24 172.12C232.24 178.072 230.608 183.016 227.344 186.952C224.176 190.792 219.952 193.576 214.672 195.304ZM177.52 189.976H199.552C205.696 189.976 210.448 188.536 213.808 185.656C217.168 182.776 218.848 178.792 218.848 173.704C218.848 168.616 217.168 164.632 213.808 161.752C210.448 158.872 205.6 157.432 199.264 157.432H177.52V189.976ZM200.704 236.2C207.232 236.2 212.32 234.664 215.968 231.592C219.616 228.52 221.44 224.248 221.44 218.776C221.44 213.208 219.52 208.84 215.68 205.672C211.84 202.408 206.704 200.776 200.272 200.776H177.52V236.2H200.704Z"
          variants={pathVariants}
          {...pathAttributes}
        />
        <motion.path
          d="M265.833 146.632V247H252.729V146.632H265.833Z"
          variants={pathVariants}
          {...pathAttributes}
        />
        <motion.path
          d="M367.078 247H353.974L301.27 167.08V247H288.166V146.488H301.27L353.974 226.264V146.488H367.078V247Z"
          variants={pathVariants}
          {...pathAttributes}
        />
      </svg>
    </div>
  );
};

export default AnimationName;


