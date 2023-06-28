import { List } from "@mui/material";
import Items from "./Items";
import Home from "@mui/icons-material/Home";

const FeaturesList = () => {
  return (
    <>
      <List sx={{ justifyContent: "space-between", color: "white" }}>
        {Items({ label: "Home", icon: <Home /> })}
        {Items({ label: "Reports", icon: <Home /> })}
        {Items({ label: "Preset", icon: <Home /> })}
        {Items({ label: "Console", icon: <Home /> })}
        {Items({ label: "Minors", icon: <Home /> })}
        {Items({ label: "Majors", icon: <Home /> })}
      </List>
    </>
  );
};

export default FeaturesList;
