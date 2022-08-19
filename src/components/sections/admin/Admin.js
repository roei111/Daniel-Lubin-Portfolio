import { useState } from "react";
import SignIn from "./SignIn";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../firestore";
import ProjectForm from "./forms/ProjectForm";
import { Button, Container } from "@mui/material";
import AboutForm from "./forms/AboutForm";

const Admin = () => {
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
  return (
    <Container sx={{ minHeight: "100vh", marginTop: "4rem" }}>
      {loggedInUser ? (
        <>
          <Button variant="contained" onClick={logOutHandler}>
            Log Out
          </Button>
          <ProjectForm />
          <AboutForm />
        </>
      ) : (
        <SignIn />
      )}
    </Container>
  );
};

export default Admin;
