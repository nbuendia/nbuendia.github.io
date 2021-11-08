import React, { Component } from "react";
import { Box, Typography } from "@mui/material";

class Websites extends Component {
  render() {
    return (
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h1"
          sx={{
            color: "black",
            textShadow: "1px 1px 10px magenta",
            opacity: "0.7",
            fontSize: {
              xs: "50px",
              md: "75px",
              lg: "100px",
            },
          }}
        >
          MORE PROJECTS COMING SOON!
        </Typography>
      </Box>
    );
  }
}

export default Websites;
