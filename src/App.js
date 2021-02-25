import React from "react";
import { render } from "react-dom";
import Link from "../src/components/Link";
import Button from "../src/components/Button";
import Container from "../src/components/Container";
import Input from "../src/components/Input";

function App() {
  return (
    <>
      <Container>
        <Link />
        <Button />
      </Container>
    </>
  );
}

export default App;
