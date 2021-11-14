import React, { Component } from "react";
import { Box, Container, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faHtml5,
  faCss3Alt,
  faReact,
  faNode,
  faGit,
} from "@fortawesome/free-brands-svg-icons";

class AboutMe extends Component {
  render() {
    return (
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "20px",
            marginBottom: "50px",
          }}
        >
          <img
            src="https://i.imgur.com/KSEKmHNm.jpg"
            alt="Profile Picture"
            width="300px"
            height="300px"
            style={{
              borderRadius: "150px",
              marginBottom: "25px",
              boxShadow: "1px 1px 15px black",
            }}
          />

          <Typography
            variant="h4"
            sx={{
              textShadow: "10px 1px 10px black",
              opacity: "0.8",
              marginBottom: "15px",
            }}
          >
            <u>ABOUT ME</u>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              textShadow: "10px 1px 10px black",
              opacity: "0.8",
              marginBottom: "35px",
            }}
          >
            Hey! Have we met? Well, just in case we haven’t, let me introduce
            myself, my name is Nicole Buendia and I love all things art and
            design. I’ve been a professional bartender for the past 10 years
            where I’ve been able to express my creativity through my cocktails.
            Bartending was always fun, exciting and I always found myself
            learning something new even after all those years.
            <br />
            <br />
            About 2 years ago I began to reminisce on my art and talent I once
            coveted and decided to once again start exploring my fine art
            skills. After much thought I began to realize that it’s now a new
            era and digital art is the way to go. With so many new programs and
            softwares available I was slightly overwhelmed on where to begin and
            as I browsed through online courses I came across game development.
            I never thought of this as an option but as I looked into it more
            and more I realized that I can accomplish this and how much I would
            enjoy this. After a few short months I learned the fundamentals of
            C# and even started to build a game of my own.
            <br />
            <br />
            How did I end up learning JavaScript you ask? Im almost there… bare
            with me. Approximately a year ago, I began to wonder what else I can
            learn and what other types of projects I can build.{" "}
            <i>JavaScript enters the chat.</i> I hit the books{" "}
            <i>(Not real books… more like websites & online courses)</i> and
            thought I can definitely get used to this. I began to research
            schools and bootcamps to get a more in depth education and after
            much deliberation, I chose the Grace Hopper Program at Fullstack
            Academy.
            <br />
            <br />
            With the help of The Grace Hopper Program and my therapist{" "}
            <i>(just kidding… or am I?)</i> I graduated the program in just a
            few short months. The program turned me into a well-rounded
            full-stack web developer with extensive knowledge in,
            <br />
            <Box
              component={"span"}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginLeft: { xs: "50px", md: "100px", lg: "200px" },
                marginRight: { xs: "50px", md: "100px", lg: "200px" },
              }}
            >
              <FontAwesomeIcon
                icon={faJs}
                color="#87ff42"
                style={{ fontSize: "35px" }}
              />
              <FontAwesomeIcon
                icon={faHtml5}
                color="#ff5d1c"
                style={{ fontSize: "35px" }}
              />
              <FontAwesomeIcon
                icon={faCss3Alt}
                color="#2e82ff"
                style={{ fontSize: "35px" }}
              />
              <FontAwesomeIcon
                icon={faReact}
                color="#66dffa"
                style={{ fontSize: "35px" }}
              />
              <FontAwesomeIcon
                icon={faNode}
                color="#87ff42"
                style={{ fontSize: "35px" }}
              />
              <FontAwesomeIcon
                icon={faGit}
                color="#ff0000"
                style={{ fontSize: "35px" }}
              />
            </Box>
            among other technologies. (of which I can’t seem to find the icons
            for… *sad face*)
            <br />
            <br />
            The past two years have been a total rollercoaster and I’m unsure
            how I made it through but I did. I poured my blood, sweat, tears and
            bank account into my education and I don’t regret it, I can finally
            see the light at the end of the tunnel and it feels great! Do you
            remember where we started? Let me recap, Art and design, Games and
            C# programming, JavaScript, Bootcamp admission, More JavaScript,
            many other technologies and graduation! Here I am now, a confident
            Software Developer who will never stop trying to learn more and be a
            better engineer than I was yesterday.
          </Typography>
        </Box>
      </Container>
    );
  }
}

export default AboutMe;
