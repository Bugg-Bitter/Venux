import { Box, Typography } from "@mui/material";

interface Props {
  backgroundColor: string;
  width: string;
  height: string;
  radius: string;
  mleft: number;
  mbottom: number;
  heading:string;
  title:string;
  img:any;
}
const ReportCard = ({
  backgroundColor,
  width,
  height,
  radius,
  mleft = 0,
  mbottom = 0,
  heading,
  title,
  img,
}: Props) => {
  return (
    <>
      <Box
        sx={{ ml: mleft,mb:mbottom }}
        bgcolor={backgroundColor}
        width={width}
        height={height}
        borderRadius={radius}
        color="black"
        flexDirection="column"
      >
        <Typography variant="subtitle2" sx={{ml:2,mt:2}} color="gray">{heading}</Typography>
        <Typography variant="h5" sx={{ml:2,mt:1}} color="black">{title}</Typography>
        <Box component="img" src={img} alt={"caption"} sx={{ height: "150px", width: "380px" }} borderRadius={2} borderColor="black"/>
        </Box>
    </>
  );
};

export default ReportCard;
