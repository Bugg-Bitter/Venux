import { Box, Typography } from "@mui/material";
import NavBar from "./NavBar";
import GraphCard from "./cards/GraphCard";
import ReportCard from "./cards/ReportCard";
import BarCard from "./cards/BarCard";

const Container = () => {
  return (
    <>
      <Box
        flexDirection="column"
        bgcolor="#DDE6ED"
        borderRadius="12px"
        boxShadow="2"
        width="1060px"
        height="550px"
      >
        <NavBar />

        <Box
         
          sx={{
            display: "start",
            flexWrap: "wrap",
            flexDirection:"column",
            height: "240px",
          }}
        >
          <Typography variant="h6"sx={{ml:2,mt:1}}>Hi, Evan</Typography>
          <Typography variant="h6"sx={{ml:2,mt:0}}>Check your health Today</Typography>
          <GraphCard
            backgroundColor={"white"}
            width={"150px"}
            height={"150px"}
            radius={"10px"}
            mTop={0}
            mleft={2}
            mbottom={1}
            majorParam="g/dl"
            majorScale={16.4}
            subtitle="Haemoglobin"
          />
          <GraphCard
            backgroundColor={"white"}
            width={"150px"}
            height={"150px"}
            radius={"10px"}
            mTop={-20}
            mleft={25}
            mbottom={1}
            majorParam="g/dl"
            majorScale={16.4}
            subtitle="Haemoglobin"
          />
        </Box>
        <Box
          flexDirection="column-reverse"
          sx={{
            justifyContent: "space-evenly",
            display: "flex",
            flexWrap: "wrap",
            height: "240px",
          }}
        >
          <ReportCard
            backgroundColor={"white"}
            width={"400px"}
            height={"250px"}
            radius={"10px"}
            mleft={2}
            mbottom={2}
            heading={"Recomendation"}
            title={"Get Own Health Data with Vix"}
            img={"https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/05/13204533/Teamwork.png"}
          />
          <BarCard
            backgroundColor={"white"}
            width={"350px"}
            height={"450px"}
            radius={"10px"}
            mTop={0}
            mleft={0}
            mbottom={1}
            majorParam="% Retails"
            majorScale={32.6}
            subtitle="May Face the Loss of health"
          />
          
        </Box>
      </Box>
    </>
  );
};

export default Container;
