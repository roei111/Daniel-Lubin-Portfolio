import AdminPanel from "../components/sections/admin/AdminPanel";
import { NotificationContextProvider } from "../context/notification-context";

const AdminPage = () => {
  return (
    <NotificationContextProvider>
      <AdminPanel />
    </NotificationContextProvider>
  );
};

export default AdminPage;
