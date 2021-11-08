import React from "react";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//PAGE CONTENTS
import Routes from "./Routes";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00FFFF", //CYAN
    },
    secondary: {
      main: "#FF00FF", //MAGENTA
    },
    info: {
      main: "#121111", //BLACKish
    },
    text: {
      primary: "#dbdbdb", //OFFWHITE
    },
  },
  typography: {
    fontFamily: "Architects Daughter",
    fontWeightRegular: "400",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ marginTop: "125px", marginBottom: "125px" }}>
        <Nav />
        <Routes />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
