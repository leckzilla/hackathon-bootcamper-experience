import React, { useState } from "react";

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
    <div>
      <input
        placeholder="Names here"
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      ></input>
    </div>
  );
}

export default InputField;
