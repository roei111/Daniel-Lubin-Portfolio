import { useState } from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import ProjectForm from "./forms/ProjectForm";
import AboutForm from "./forms/AboutForm";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../firestore";
import SignIn from "./SignIn";

const AdminPanel = () => {
  const [value, setValue] = useState(1);
  const [loggedInUser, setLoggedInUser] = useState(auth.currentUser);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedInUser(user);
    } else {
      setLoggedInUser(null);
    }
  });

  const logOutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("signed out");
      })
      .catch((error) => {
        // An error happened.
        console.log("signed out error", error.message);
      });
  };

  const handleTabChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        flex: 1,
        marginTop: "45px",
      }}
    >
      {loggedInUser ? (
        <>
          <Header
            handleTabChange={handleTabChange}
            value={value}
            logOutHandler={logOutHandler}
          />
          <Box sx={{ flex: 1, bgcolor: "#eaeff1" }}>
            <TabPanel value={value} index={0}>
              <ProjectForm />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <AboutForm />
            </TabPanel>
            <TabPanel value={value} index={2}>
              Contact Form
            </TabPanel>
          </Box>
        </>
      ) : (
        <SignIn />
      )}
    </Box>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default AdminPanel;