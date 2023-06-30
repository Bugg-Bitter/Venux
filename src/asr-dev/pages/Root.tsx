import * as React from "react";
import Background from "../components/Background";
import { Box } from "@mui/material";
import ViewSidebarRoundedIcon from "@mui/icons-material/ViewSidebarRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import NavButton from "../components/NavButton";
import Container from "../components/Container";
import HomePage from "./HomePage";
import EmailPage from "./EmailPage";
import SettingsPage from "./SettingsPage";

const Root = () => {
  const [collapse, setCollapse] = React.useState<boolean>(true);
  const [focused, setFocused] = React.useState<string>("home");
  return (
    <Background>
      <Box
        display={"flex"}
        flexDirection={"row"}
        height={"100vh"}
        width={"100vw"}
      >
        {/* Side Nav Bar */}
        <Box
          flex={collapse ? 1 : 2}
          display={"flex"}
          flexDirection={"column"}
          alignItems={collapse ? "center" : "flex-start"}
          marginLeft={collapse ? 0 : 2}
          justifyContent={"space-evenly"}
          paddingY={10}
        >
          {/* some component */}
          <div
            onClick={() => {
              setCollapse(!collapse);
            }}
          >
            <ViewSidebarRoundedIcon
              sx={{ color: "white", height: 50, width: 50 }}
            />
          </div>
          <Box
            flex={1}
            display={"flex"}
            flexDirection={"column"}
            alignContent={"center"}
            justifyContent={"center"}
          >
            <NavButton
              Icon={HomeRoundedIcon}
              isCollapsed={collapse}
              title={"Home"}
              isFocused={focused}
              onClick={() => setFocused("home")}
            />
            <NavButton
              Icon={EmailRoundedIcon}
              isCollapsed={collapse}
              title={"Email"}
              isFocused={focused}
              onClick={() => setFocused("email")}
            />
            <NavButton
              Icon={SettingsRoundedIcon}
              isCollapsed={collapse}
              title={"Setting"}
              isFocused={focused}
              onClick={() => setFocused("setting")}
            />
          </Box>
          <NavButton
            Icon={LogoutRoundedIcon}
            isCollapsed={collapse}
            title={"Logout"}
            onClick={() => alert("Successfully Logged out!")}
          />
        </Box>

        {/* Container */}
        <Container>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-evenly"}
              height={60}
              width={"90%"}
              bgcolor={"lightgray"}
              borderRadius={25}
              marginY={2}
            ></Box>
          </div>
          {focused === "home" ? (
            <HomePage />
          ) : focused === "email" ? (
            <EmailPage />
          ) : (
            <SettingsPage />
          )}
        </Container>
      </Box>
    </Background>
  );
};

export default Root;
