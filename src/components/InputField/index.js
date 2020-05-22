import React, { useState } from "react";
import css from "./InputField.module.css";

function InputField({ input, setInput, addToArray, setPubs, pubs }) {
  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      addToArray();
    }
  }

  function addToArray() {
    setPubs([...pubs, input]);
    setInput("");
  }

  return (
    <div className={css.container}>
      <input
        placeholder="Add to the spinner..."
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      ></input>
    </div>
  );
}

export default InputField;
