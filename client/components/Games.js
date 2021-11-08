import React, { Component } from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Tooltip,
  Link,
} from "@mui/material";
import PhotoCameraBackIcon from "@mui/icons-material/PhotoCameraBack";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

import data from "../data.json";

class Games extends Component {
  constructor() {
    super();
  }

  render() {
    const games = data.filter((project) => project.type === "game");
    const defaultImg = "https://i.imgur.com/Hg5jzQOt.png";

    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {games.map((project) => (
          <Card
            key={project.id}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              backgroundColor: "#30302f",
              margin: "25px",
              boxShadow: "0px 0px 15px 0.5px black",
            }}
          >
            <CardMedia
              component="img"
              image={project.img === "" ? defaultImg : project.img}
              alt={`${project.name} project image`}
              sx={{ minWidth: { xs: "100%", md: "400px" } }}
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                margin: "10px",
              }}
            >
              <CardContent
                sx={{
                  textShadow: "1px 1px 15px black",
                  opacity: ".7",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", lg: "row" },
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h3"
                    color=""
                    gutterBottom
                    sx={{
                      fontSize: {
                        xs: "50px",
                        md: "35px",
                        lg: "45px",
                      },
                    }}
                  >
                    {project.name}
                  </Typography>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      textShadow: "1px 1px 15px magenta",
                      fontSize: {
                        xs: "30px",
                        md: "25px",
                        lg: "30px",
                      },
                    }}
                  >
                    {project.status}
                  </Typography>
                </Box>

                <Typography variant="h6">{project.description}</Typography>
              </CardContent>

              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Tooltip title="GITHUB REPO">
                  <Link href={project.github} target="_blank">
                    <Button color="info">
                      <GitHubIcon sx={{ fontSize: "40px" }} />
                    </Button>
                  </Link>
                </Tooltip>

                <Tooltip title="GAME WALK-THROUGH">
                  <Link
                    href={project.youtube === "" ? "" : project.youtube}
                    target="_blank"
                  >
                    <Button color="info">
                      <YouTubeIcon sx={{ fontSize: "40px" }} />
                    </Button>
                  </Link>
                </Tooltip>
              </CardActions>
            </Box>
          </Card>
        ))}
      </Box>
    );
  }
}

export default Games;
