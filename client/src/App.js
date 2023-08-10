import { Box, Container } from "@mui/material";
import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import ContactState from "./context/contact/contactState";
import Home from "./pages";
import About from "./pages/about";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Container maxWidth="lg">
        <Box component="div" sx={{ px: 3 }}>
          <ContactState>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </ContactState>
        </Box>
      </Container>
    </Fragment>
  );
};

export default App;
