import { createContext, useState } from "react";

const NotificationContext = createContext({
  notification: null,
  createNotification: (alert, message) => {},
  closeNotification: () => {},
});

export const NotificationContextProvider = (props) => {
  const [notification, setNotification] = useState(null);

  const handleCreate = (alert, message) => {
    setNotification({ alert, message });
  };
  const handleClose = () => {
    setNotification(null);
  };

  return (
    <NotificationContext.Provider
      value={{
        notification,
        createNotification: handleCreate,
        closeNotification: handleClose,
      }}
    >
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
