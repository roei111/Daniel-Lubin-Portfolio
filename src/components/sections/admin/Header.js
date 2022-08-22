import { Button, Tab, Tabs, AppBar } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Header(props) {
  const { value, handleTabChange, logOutHandler } = props;

  const changeTab = (event, value) => {
    handleTabChange(value);
  };

  const logOut = () => {
    logOutHandler();
  };

  return (
    <AppBar
      component="div"
      position="static"
      elevation={0}
      sx={{
        zIndex: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Tabs
        value={value}
        textColor="inherit"
        onChange={changeTab}
        indicatorColor="secondary"
      >
        <Tab label="Works" {...a11yProps(1)} />
        <Tab label="About" {...a11yProps(2)} />
        <Tab label="Contact" {...a11yProps(3)} />
      </Tabs>
      <Button
        variant="containd"
        endIcon={<LogoutIcon />}
        size="small"
        onClick={logOut}
      >
        Log Out
      </Button>
    </AppBar>
  );
}

export default Header;
