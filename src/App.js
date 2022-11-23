import "./App.css";
// import Accordion from "./components/Accordion";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import AlertBox from "./components/AlertBox";
import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState({message:'',type:""});
  const showMsg = (msg, type) => {
    setAlert({
      message: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert({message:'',type:""});
    }, 2000);
  };
  const modeToggler = (color) => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = color;
      document.body.style.color = "white";
      setTimeout(showMsg("Success : dark mode enabled", "dark"), 3000);
      document.title = " Text Util Dark mode";
      // setInterval(() => (document.title = "Virus virus"), 1300);
      // setInterval(() => (document.title = "Bug bug"), 1100);
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
      {/* <BrowserRouter> */}
      <Navbar Mode={Mode} modeToggler={modeToggler} />
      <AlertBox alert={alert} />
      {/* <Routes> */}
      {/* <Route path="/About" element={<Accordion Mode={Mode} />} /> */}

      {/* <Route */}
      {/* path="/" */}
      {/* element={ */}
      <TextArea
        heading="Write your suggestions below"
        Mode={Mode}
        showMsg={showMsg}
      />
      {/* } */}
      {/* /> */}
      {/* </Routes> */}
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
