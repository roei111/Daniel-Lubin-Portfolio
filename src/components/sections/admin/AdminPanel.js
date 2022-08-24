import { useState, useContext } from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import ProjectForm from "./forms/ProjectForm";
import AboutForm from "./forms/AboutForm";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../firestore";
import SignIn from "./SignIn";
import NotificationContext from "../../../context/notification-context";
import Notification from "../../ui/Notification";
import ContactForm from "./forms/ContactForm";

const AdminPanel = () => {
  const [value, setValue] = useState(1);
  const [loggedInUser, setLoggedInUser] = useState(auth.currentUser);
  const notificationCtx = useContext(NotificationContext);

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
        notificationCtx.createNotification(
          "success",
          "Logged out successfully"
        );
      })
      .catch((error) => {
        notificationCtx.createNotification(
          "error",
          "There was an error trying to log out"
        );
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
      {notificationCtx.notification ? <Notification /> : null}
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
              <ContactForm />
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
