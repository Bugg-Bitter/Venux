import { Box, Typography } from "@mui/material";
import { LineChart, Line } from 'recharts';
import barData from "../../utils/barData";

interface Props {
  backgroundColor: string;
  width: string;
  height: string;
  radius: string;
  mleft: number;
  mTop:number;
  mbottom: number;
  majorScale:number;
  majorParam:string;
  subtitle:string;
}

const BarCard = ({
  backgroundColor,
  width,
  height,
  radius,
  mleft = 0,
  mTop=0,
  mbottom = 0,
  majorParam,
  majorScale,
  subtitle
}: Props) => {
  return (
    <>
      <Box
        sx={{ ml: mleft,mb:mbottom,mt:mTop }}
        bgcolor={backgroundColor}
        width={width}
        height={height}
        borderRadius={radius}

      >
        <Box sx={{display: 'flex',alignItems: 'flex-start'}}>
        <Typography variant="h4" sx={{mt:1,ml:3}} align="left">Minor: {majorScale}</Typography>
        <Typography variant="subtitle2" sx={{mt:3,ml:1}}>{majorParam}</Typography>
        </Box>
        <Box sx={{ml:2,mt:5}}>
        <LineChart width={300} height={100} data={barData} >
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
        <Typography variant="subtitle2" sx={{mt:2,ml:1,alignItems: 'center'}}>Status : {subtitle}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default BarCard;
