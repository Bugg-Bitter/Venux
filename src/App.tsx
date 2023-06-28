import { Box, Stack } from "@mui/material";
import Container from "./components/Container";
import FeaturesList from "./components/List";

const App = () => {
  return (
    <>
      <Box sx={{ bgcolor: "black" ,width:"fit-content"}}>
        <Stack justifyContent="end" direction="row">
          <Box justifyContent="space-between">
            <FeaturesList />
          </Box>
          <Container />
        </Stack>
      </Box>
    </>
  );
};

export default App;
