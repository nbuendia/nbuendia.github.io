import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Tooltip,
  Fade,
  Button,
  Link,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => (
  <Box>
    <AppBar>
      <Toolbar
        style={{
          display: "flex",
          backgroundColor: "#30302f",
          justifyContent: "space-evenly",
          position: "fixed",
          bottom: 0,
          width: "100%",
          height: "100px",
        }}
      >
        <Tooltip title="LINKEDIN PROFILE" TransitionComponent={Fade}>
          <Link
            href="https://www.linkedin.com/in/nicole-buendia/"
            target="_blank"
            rel="noopener"
          >
            <Button color="info">
              <LinkedInIcon style={{ fontSize: 35 }} />
            </Button>
          </Link>
        </Tooltip>

        <Tooltip title="GITHUB PROFILE" TransitionComponent={Fade}>
          <Link
            href="https://github.com/nbuendia"
            target="_blank"
            rel="noopener"
          >
            <Button color="info">
              <GitHubIcon style={{ fontSize: 35 }} />
            </Button>
          </Link>
        </Tooltip>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Footer;
