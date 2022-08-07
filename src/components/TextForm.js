import React, { useState } from "react";

export default function TextForm(props) {
  const handelUpclick = () => {
    // console.log("UpperCase was clickd" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to Uppercase", "success");
  }

  const handelLoclick = () => {
    // console.log("UpperCase was clickd" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to Lowercase", "success");
  }

  function handelCopy() {
    var cpy = document.getElementById("mybox");
    cpy.select();
    navigator.clipboard.writeText(cpy.value);
    props.showAlert("Text is copid to clipboard", "success");
  }

  const handelClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear the Text", "success");
  };

  const handelonChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState(""); //Create a State
  // text = "newText" //Wrong way to change the state
  // setText = ("newText"); //right way to change the state

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            name=""
            id="mybox"
            cols="100"
            value={text}
            onChange={handelonChange}
            rows="5"
            style={{
              backgroundColor: props.mode === "dark" ? "#100505d9" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2  my-2"
          onClick={handelUpclick}
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2  my-2"
          onClick={handelLoclick}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2  my-2"
          onClick={handelCopy}
        >
          Copy text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2  my-2"
          onClick={handelClear}
        >
          Clear text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} character
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
      </div>
    </>
  );
}
