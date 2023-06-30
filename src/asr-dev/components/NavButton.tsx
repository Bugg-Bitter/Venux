import { SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface Props {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  isCollapsed: boolean;
  title: string;
  isFocused?: string;
  onClick?: () => void;
}

const NavButton = ({ Icon, isCollapsed, title, onClick, isFocused }: Props) => {
  const isCurrent: boolean = isFocused === title.toLowerCase();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
      }}
      onClick={onClick}
    >
      <Icon
        sx={{ color: isCurrent ? "white" : "grey", height: 30, width: 30 }}
      />
      {!isCollapsed && (
        <Typography
          color={isCurrent ? "white" : "grey"}
          fontSize={14}
          marginLeft={1}
        >
          {title}
        </Typography>
      )}
    </div>
  );
};

export default NavButton;
