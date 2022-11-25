import "./App.css";
import Accordion from "./components/Accordion";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import AlertBox from "./components/AlertBox";
import React, { useState } from "react";
import {  Routes, Route, HashRouter } from "react-router-dom";

function App() {

  // Mode or alert ko set karane ke liye state function
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState({ message: "", type: "" });
  //2 second alert show kara kar automatic hide karana
  const showMsg = (msg, type) => {
    setAlert({
      message: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert({ message: "", type: "" });
    }, 2000);
  };
  //mode light ho to dark or dark ho to light karo
  const modeToggler = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      setTimeout(showMsg("Success : dark mode enabled", "dark"), 3000);
      document.title = " Text Util Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showMsg("Success : light mode enabled", "success");
      document.title = "Text Util";
    }
  };

  return (
    <>
      <HashRouter>
      <Navbar Mode={Mode} modeToggler={modeToggler} />
      <AlertBox alert={alert} />
      <Routes>/
      <Route path="/About" element={<Accordion Mode={Mode} />} />

      <Route
      path="/"
      element={
      <TextArea
        heading="Write or paste your text below"
        Mode={Mode}
        showMsg={showMsg}
      />
      }
      />
      </Routes>
      </HashRouter>
    </>
  );
}

export default App;
