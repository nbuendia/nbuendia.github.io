import React, { Component } from "react";
import { Box, Container, Typography, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "emailjs-com";

class Contact extends Component {
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
        <Box sx={{ marginBottom: "35px" }}>
          {/* <Typography
            variant="h4"
            color="cyan"
            sx={{
              textShadow: "10px 1px 10px black",
              opacity: "0.8",
              marginBottom: "15px",
            }}
          >
            <u>ABOUT ME</u>
          </Typography> */}

          <Typography
            variant="body1"
            sx={{
              textShadow: "10px 1px 10px black",
              opacity: "0.8",
              marginBottom: "35px",
              fontSize: "22px",
            }}
          >
            Like what you see here? Checkout my GitHub and LinkedIn in the
            footer or send me an email below!
            <br />
            Can’t wait to hear from you!
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h4"
            color="cyan"
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

export default Contact;
