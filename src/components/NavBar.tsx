import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Stack,
  Avatar,
  Button,
} from "@mui/material";

const NavBar = () => {
  return (
    <>
      <Box sx={{ borderRadius: "16px" }}>
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6">Be Healthy</Typography>
            <Box sx={{ width: "10px" }} />
            <Box sx={{ height: "15px", width: "1px" }} bgcolor="white" />
            <Box sx={{ width: "10px" }} />
            <Stack direction="row" spacing={2} flexGrow={1}>
              <Button variant="text" color="inherit">
                Dashboard
              </Button>
              <Button variant="text" color="inherit">
                Report
              </Button>
              <Button variant="text" color="inherit">
                Account
              </Button>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <Button variant="text" color="inherit">
                Profile
              </Button>
              <Button variant="text" color="inherit">
                Settings
              </Button>
              <Avatar
                alt="Remy Sharp"
                src="https://th.bing.com/th/id/R.fc18c73c0a22c1b1398aae47a996850d?rik=JIMHiYrpmI7tng&pid=ImgRaw&r=0"
              />
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
