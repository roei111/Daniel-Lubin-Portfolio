import { useState, useContext } from "react";
import { Snackbar, Alert } from "@mui/material";
import NotificationContext from "../../context/notification-context";

const Notification = () => {
  const [open, setOpen] = useState(true);
  const notificationCtx = useContext(NotificationContext);
  const { alert, message } = notificationCtx.notification;
  
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    notificationCtx.closeNotification();
  };

  return (
    <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        variant="filled"
        severity={alert}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
