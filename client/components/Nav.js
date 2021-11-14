import React from "react";
import { Link } from "react-router-dom";

import { AppBar, Box, Typography, Button, Tooltip, Fade } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import InfoIcon from "@mui/icons-material/Info";
const Nav = () => (
  <Box>
    <AppBar>
      <Box
        style={{
          display: "flex",
          backgroundColor: "#30302f",
          justifyContent: "space-between",
          position: "fixed",
          top: 0,
          alignItems: "center",
          width: "100%",
          height: "100px",
        }}
      >
        <Box sx={{ margin: "25px" }}>
          <Typography
            sx={{
              textShadow: "1px 1px 10px cyan",
              opacity: ".7",
              fontSize: { xs: "30px", md: "40px", lg: "50px" },
            }}
            color="info"
            variant="h3"
          >
            <b>NICOLE BUENDIA</b>
          </Typography>
        </Box>

        <Box sx={{ margin: "25px" }}>
          <Tooltip title="HOME PAGE" TransitionComponent={Fade}>
            <Link to={"/"}>
              <Button color="info">
                <HomeIcon sx={{ fontSize: { xs: "30px", md: "35px" } }} />
              </Button>
            </Link>
          </Tooltip>

          <Tooltip title="ABOUT ME" TransitionComponent={Fade}>
            <Link to={"/aboutme"}>
              <Button color="info">
                <InfoIcon sx={{ fontSize: { xs: "30px", md: "35px" } }} />
              </Button>
            </Link>
          </Tooltip>

          <Tooltip title="CONTACT INFORMATION" TransitionComponent={Fade}>
            <Link to={"/contact"}>
              <Button color="info">
                <AssignmentIndIcon
                  sx={{ fontSize: { xs: "30px", md: "35px" } }}
                />
              </Button>
            </Link>
          </Tooltip>

          <Tooltip title="DOWNLOAD RESUME PDF" TransitionComponent={Fade}>
            <a
              href="https://drive.google.com/file/d/1If7qRPZcuRAVvN1zwkSpO8fiT84P29cz/view?usp=sharing"
              download
              target="_blank"
              rel="noopener"
            >
              <Button color="info">
                <StickyNote2Icon
                  sx={{ fontSize: { xs: "30px", md: "35px" } }}
                />
              </Button>
            </a>
          </Tooltip>
        </Box>
      </Box>
    </AppBar>
  </Box>
);

export default Nav;
