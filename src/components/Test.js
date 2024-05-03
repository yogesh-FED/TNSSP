import React from "react";
import Sidenav from "./Sidenav";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
const Test = () => {
  return (
    <div>
      <Sidenav />
      <Box sx={{ display: "flex" }}>
        <Sidenav />

        <Box component="main" sx={{ flexGrow: 3, p: 3 }}>
          <h1>Test</h1>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
            ullamcorper eget nulla
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Test;
