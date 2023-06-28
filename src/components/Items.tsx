import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";

interface Props {
  label: string;
  icon: any;
}
const Items = ({ label, icon }: Props) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
        <Typography variant="h6">{label}</Typography>
      </ListItemButton>
    </ListItem>
  );
};

export default Items;
