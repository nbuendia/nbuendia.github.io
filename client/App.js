import React from "react";

//PAGE CONTENTS
import Routes from "./Routes";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
