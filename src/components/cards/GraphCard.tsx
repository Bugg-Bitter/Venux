import { Box, Typography } from "@mui/material";
import { Pie, Tooltip, PieChart } from "recharts";
import graphData from "../../utils/graphData";

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

const GraphCard = ({
  backgroundColor,
  width,
  height,
  radius,
  mleft = 0,
  mTop=0,
  mbottom = 0,
  majorParam,
  majorScale,
  // subtitle
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
        <Typography variant="h4" sx={{mt:1,ml:1}} align="left">{majorScale}</Typography>
        <Typography variant="subtitle2" sx={{mt:3,ml:1}}>{majorParam}</Typography>
        </Box>
        <PieChart width={100} height={60}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={graphData}
            cx="50%"
            cy="50%"
            outerRadius={20}
            fill="#8884d8"
          />
          <Tooltip />
        </PieChart>
        <Typography variant="subtitle2" sx={{mt:2,ml:7,alignItems: 'center'}}>{majorParam}</Typography>
      </Box>
    </>
  );
};

export default GraphCard;
