import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Home />
      </Container>
      <Footer />
    </>
  );
}

export default App;
