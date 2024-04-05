import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

function App() {
  return (
    <>
      <Navbar />
      <Section />
    </>
  );
}

export default App;
