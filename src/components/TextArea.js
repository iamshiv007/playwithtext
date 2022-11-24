import React, { useState } from "react";

export default function TextArea(props) {
  //text ko set karane ke liye usestate
  const [text, setText] = useState("");
  //Uppercase btn ka function
  const changeToUpperCase = () => {
    let finalOutput = text.toUpperCase();
    setText(finalOutput);
    props.showMsg("Text Changed in to Uppercase successfully", "success");
  };
  //Lowercase btn ka function
  const changeToLowerCase = () => {
    let finalOutput = text.toLowerCase();
    setText(finalOutput);
    props.showMsg("Text Changed in to Lowercase successfully", "success");
  };
  //Clear text ke liye function
  const clearText = () => {
    setText("");
    props.showMsg("Text Cleared successfully", "danger");
  };
  //Text copy karana ka function
  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showMsg("Text copied to Clipboard successfully", "info");
    navigator.clipboard.writeText(text); //eska bhi use kar sakte
  };
  // Extra space remove karane ka function
  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showMsg(" Extra spaces Removed successfully", "info");
  };
  //Text ko typing ke sath set karane ka function
  const writtingInput = (event) => {
    setText(event.target.value);
  };
  //Sabhi \n ki jagah "" ko replace karaya
  let lineSpace = text.split(" ").map((word) => word.replaceAll("\n", ""));
  //Array main jo khali string ("") hai unhe hataya
  let finalArray = lineSpace.filter((word) => word !== "");
  console.log(finalArray);
  return (
    <>
      <div className="container col-10">
        <div className="mb-3">
          <h2>{props.heading}</h2>
          {/* //Text box */}
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
        {/* //All utility btns */}
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
        {/* //Info about text */}
        <h2>Text Summary</h2>
        <p>
          <span className="p-1 fs-5 fw-bold">Total Words : </span>
          <span className="border border-dark p-1">{finalArray.length}</span>
          <span className="ms-5">Note :- Line spacing is not counted</span>
        </p>
        <p>
          <span className="p-1 fs-5 fw-bold">Total Characters : </span>
          {console.log(finalArray.join(" "))}
          <span className="border border-dark p-1">
            {finalArray.join(" ").length}
          </span>
          <span className="ms-5">
            Note :- Line space or extra spaces between words are ignored
          </span>
        </p>
        <p>
          <span className="p-1 fs-5 fw-bold">Reading Time : </span>
          <span className="border border-dark p-1">
            {finalArray.length * 0.004} <strong> Minutes</strong>
          </span>
          <span className="ms-5">Note :- Assuming average time of reading is 250 words per minute</span>
        </p>
        <h2>Review</h2>
        <p>{text === "" ? "Write something in the box for review !" : text}</p>
      </div>
    </>
  );
}
