import React from "react";

import Container from "react-bootstrap/Container";
import ButtonsShowcase from "./components/Buttons";
import ToastsShowcase from "./components/Toasts";

function App() {
  return (
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <h1 className="header">Welcome To React-Bootstrap TypeScript Example</h1>
      </Container>
      <h2>Buttons</h2>
      <ButtonsShowcase />
      <h2>Toasts</h2>
      <ToastsShowcase />
    </Container>
  );
}

export default App;
