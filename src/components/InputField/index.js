import React from "react";
import css from "./InputField.module.css";

function InputField({
  input,
  setInput,
  addToArray,
  setPubs,
  pubs,
  bootcampers,
  setBootcampers,
}) {
  function handleChange(e) {
    setInput(e.target.value);
  }
  function handleNameChange(e) {
    setInput(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      addToArray();
    }
  }
  function handleNameKeyDown(e) {
    if (e.key === "Enter") {
      addToNameArray();
    }
  }

  function addToArray() {
    setPubs([...pubs, input]);
    setInput("");
  }
  function addToNameArray() {
    setBootcampers([...bootcampers, input]);
    setInput("");
  }

  return (
    <div className={css.container}>
      <input
        placeholder="Add to the boozers..."
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      ></input>

      <input
        placeholder="Add to the squad..."
        value={input}
        onChange={handleNameChange}
        onKeyDown={handleNameKeyDown}
      ></input>
    </div>
  );
}

export default InputField;
