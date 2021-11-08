import React, { Component } from "react";
import { Box, Button, Container, Typography, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "emailjs-com";

class AboutMe extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      subject: "",
      feedback: "",
      loading: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      loading: true,
    });

    emailjs
      .sendForm(
        "service_31b09ar",
        "template_b60br0k",
        event.target,
        "user_h7TZnSQEoKtsXhleO6H3m"
      )
      .then(
        (result) => {
          alert("SUCCESS! Your message has been sent!");
          console.log(result.text);

          this.setState({
            loading: false,
          });
        },
        (error) => {
          alert("OH NO! Something went wrong! Please try again.");
          console.log(error.text);

          this.setState({
            loading: false,
          });
        }
      );

    this.setState({
      name: "",
      email: "",
      subject: "",
      feedback: "",
    });
  }

  render() {
    const { name, email, subject, feedback, loading } = this.state;
    const { handleChange, handleSubmit } = this;

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
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "20px",
            marginBottom: "50px",
          }}
        >
          <Box>
            <img
              src="https://i.imgur.com/JPtVp73b.jpg"
              alt="Profile Picture"
              width="300px"
              height="300px"
              style={{
                borderRadius: "150px",
                marginBottom: "25px",
                boxShadow: "1px 1px 15px black",
              }}
            />
          </Box>

          <Box sx={{ marginLeft: "25px" }}>
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
              Hey! Have we met? Well, just in case you haven’t we haven’t, let
              me introduce myself, my name is Nicole Buendia and I love all
              things art and design. I’ve been a professional bartender for the
              past 10 years where I’ve been able to express my creativity
              through my cocktails. Learning to bartend was fun, exciting and I
              always found myself learning something new even after all those
              years.
              <br />
              <br />
              About a year ago I began to teach myself C# to be able to develop
              games from start to finish and quickly realized not only do I love
              art and design but going though the process of bugs in code,
              rewriting and adjusting motivated me to learn JavaScript and enter
              a bootcamp where I learned a stack of new technologies. In a short
              3 months I worked in many new projects, learned to work in a team
              and ventured into a world of endless possibilities.
              <br />
              <br />I now can confidently say, I am a Software engineer and I’ll
              never stop trying to learn more and be better. Like what you see
              here? Checkout my GitHub and LinkedIn in the footer or send me an
              email below! Can’t wait to hear from you!
            </Typography>
          </Box>
        </Box>

        <Box>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Architects Daughter",
              textShadow: "10px 1px 10px black",
              opacity: "0.8",
              marginBottom: "25px",
            }}
          >
            <u>GET IN TOUCH</u>
          </Typography>

          <form autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              color="primary"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              label="Name"
              variant="outlined"
              fullWidth
              required
              sx={{
                marginBottom: "10px",
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": {
                    borderColor: "white",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
              }}
            />

            <TextField
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              label="Email"
              variant="outlined"
              fullWidth
              required
              sx={{
                marginBottom: "10px",
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": {
                    borderColor: "white",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
              }}
            />

            <TextField
              type="text"
              name="subject"
              value={subject}
              onChange={handleChange}
              label="Subject"
              variant="outlined"
              fullWidth
              required
              sx={{
                marginBottom: "10px",
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": {
                    borderColor: "white",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
              }}
            />

            <TextField
              type="text"
              name="feedback"
              value={feedback}
              onChange={handleChange}
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={5}
              required
              sx={{
                marginBottom: "10px",
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": {
                    borderColor: "white",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
              }}
            />

            <LoadingButton
              variant="outlined"
              color="primary"
              type="submit"
              loading={loading}
              loadingPosition="end"
              endIcon={<SendIcon />}
            >
              SEND EMAIL
            </LoadingButton>
          </form>
        </Box>
      </Container>
    );
  }
}

export default AboutMe;
