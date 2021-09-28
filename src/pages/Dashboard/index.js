import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TotalCountItem from "./components/TotalCountItem";
import LatestItem from "./components/LatestItem";


function Dashboard({ queryRef }) {
  return (
    <>
      <Box mb={4}>
        <TotalCountItem />
      </Box>
      <Box mb={4}>
        <LatestItem />
      </Box>
    </>
  );
}

export default Dashboard;
