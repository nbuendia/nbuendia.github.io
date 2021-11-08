import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import WebOutlinedIcon from "@mui/icons-material/WebOutlined";

class Home extends Component {
  render() {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "stretch",
          textAlign: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "calc(50% - 5vh)" },
            boxShadow: 15,
          }}
        >
          <Card
            sx={{
              height: "100%",
              backgroundColor: "#30302f",
              boxShadow: 10,
              transition: "transform 0.15s ease-in-out",
              "&:hover": {
                transform: "scale3d(1.05, 1.05, 1)",
              },
              paddingBottom: "25px",
            }}
          >
            <CardMedia
              component="img"
              alt="pacman game view"
              height="75%"
              image="https://i.imgur.com/wFlMDyY.png"
            />

            <CardContent sx={{ marginBottom: "-10px" }}>
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: "25px", md: "18px", lg: "20px" } }}
              >
                GAMES
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontSize: { xs: "20px", md: "12px", lg: "15px" } }}
              >
                STEP INTO MY PIXEL PERFECT WORLD OF GAMES
              </Typography>
            </CardContent>

            <CardActions style={{ justifyContent: "center" }}>
              <Link to={"/games"} style={{ textDecoration: "none" }}>
                <Button
                  startIcon={<SportsEsportsOutlinedIcon />}
                  variant="outlined"
                  color="primary"
                  sx={{ fontSize: { xs: "large", md: "small", lg: "large" } }}
                >
                  VIEW PROJECTS
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", md: "calc(50% - 5vh)" },
            boxShadow: 15,
          }}
        >
          <Card
            sx={{
              height: "100%",
              backgroundColor: "#30302f",
              boxShadow: 10,
              transition: "transform 0.15s ease-in-out",
              "&:hover": {
                transform: "scale3d(1.05, 1.05, 1)",
              },
              paddingBottom: "25px",
            }}
          >
            <CardMedia
              component="img"
              alt="pacman game view"
              height="75%"
              image="https://i.imgur.com/ItDUWXc.png"
            />

            <CardContent sx={{ marginBottom: "-10px" }}>
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: "25px", md: "18px", lg: "20px" } }}
              >
                WEBSITES
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontSize: { xs: "20px", md: "12px", lg: "15px" } }}
              >
                WECOME TO THE LAND OF CREATIVITY
              </Typography>
            </CardContent>

            <CardActions style={{ justifyContent: "center" }}>
              <Link to={"/websites"} style={{ textDecoration: "none" }}>
                <Button
                  endIcon={<WebOutlinedIcon />}
                  variant="outlined"
                  color="primary"
                  sx={{ fontSize: { xs: "large", md: "small", lg: "large" } }}
                >
                  VIEW PROJECTS
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Box>
      </Box>
    );
  }
}

export default Home;
