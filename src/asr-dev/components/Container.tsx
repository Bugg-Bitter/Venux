import { Box } from "@mui/material";

const Container = ({ children, style }: any) => {
  return (
    <Box
      bgcolor={"white"}
      flex={18}
      margin={"20px"}
      borderRadius={5}
      sx={style}
    >
      {children}
    </Box>
  );
};

export default Container;
