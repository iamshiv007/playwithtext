import React, { useState } from "react";

export default function TextArea(props) {
  const [text, setText] = useState("");
  const changeToUpperCase = () => {
    let finalOutput = text.toUpperCase();
    setText(finalOutput);
    props.showMsg("Text Changed in to Uppercase successfully","success")
  };
  const changeToLowerCase = () => {
    let finalOutput = text.toLowerCase();
    setText(finalOutput);
    props.showMsg("Text Changed in to Lowercase successfully","success")
  };
  const clearText = () => {
    setText("");
    props.showMsg("Text Cleared successfully","danger")
  };
  const copyText = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select(); //hightLight the copied text
    navigator.clipboard.writeText(text.value);
    props.showMsg("Text copied to Clipboard successfully","info")
    //navigator.clipboard.writeText(text); //eska bhi use kar sakte
  };
  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showMsg(" Extra spaces Removed successfully","info")
  };
  const writtingInput = (event) => {
    setText(event.target.value);
  };
  let khaaliText = text.split(" ").filter(word => word==="");
  return (
    <>
      <div className="container col-10">
        <div className="mb-3">
          <h2>{props.heading}</h2>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            onChange={writtingInput}
            value={text}
            style={
              props.Mode === "light"
                ? { backgroundColor: "white", color: "black" }
                : { backgroundColor: "#202c68", color: "white" }
            }
          ></textarea>
        </div>
        <button className="btn btn-primary m-1" onClick={changeToUpperCase}>
          Change to Uppercase
        </button>
        <button className="btn btn-primary m-1" onClick={changeToLowerCase}>
          Change to Lowercase
        </button>
        <button className="btn btn-primary m-1" onClick={clearText}>
          clearText
        </button>
        <button className="btn btn-primary m-1" onClick={copyText}>
          copyText
        </button>
        <button className="btn btn-primary m-1" onClick={removeExtraSpaces}>
          removeExtraSpaces
        </button>
      </div>
      <div className="container col-10">
        <h2>Text Summary</h2>
        <p>
          <span className="p-1 fs-5 fw-bold">Total Words : </span>
          <span className="border border-dark p-1">
            {text.split(" ").length-khaaliText.length}
          </span>
        </p>
        <p>
          <span className="p-1 fs-5 fw-bold">Total Characters : </span>
          <span className="border border-dark p-1">{text.length}</span>
        </p>
        <p>
          <span className="p-1 fs-5 fw-bold">Reading Time : </span>
          <span className="border border-dark p-1">
            {(text.split(" ").length-khaaliText.length) * 0.04} Minuts
          </span>
        </p>
        <h2>Review</h2>
        <p>{text === "" ? "Write something in the box for review !" : text}</p>
      </div>
    </>
  );
}
