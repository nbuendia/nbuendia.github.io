import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const gif = "https://i.imgur.com/dyxb2mM.gif";

const NotFound = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: {
        xs: "column",
        md: "row",
        alignItems: "center",
        textAlign: "center",
        paddingTop: "25px",
      },
    }}
  >
    <Box sx={{ marginRight: { xs: "0", md: "80px" }, padding: "10px" }}>
      <Typography variant="h3">A LITTLE LOST?</Typography>
      <br />

      <Typography variant="h5">
        Thats okay! No need to get upset,
        <br />
        it's just a{" "}
        <span style={{ textShadow: "1px 1px 5px red" }}>404 error!</span>
        <br />
        The button below will take you back home!
      </Typography>
      <br />

      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Button variant="outlined" startIcon={<KeyboardArrowLeftIcon />}>
          HOME
        </Button>
      </Link>
    </Box>

    <img src={gif} alt="404 GIF" className="gif" height="100%" />
  </Box>
);

export default NotFound;
