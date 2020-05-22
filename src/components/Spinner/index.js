import React, { useState } from "react";
import Button from "../Button";
import InputField from "../InputField";
import css from "./Spinner.module.css";

export default function Spinner() {
  const [pubs, setPubs] = useState([
    "The Old Crown",
    "Digbeth Dining Club",
    "The Ruin",
    "Digbrew",
    "Floodgate",
    "Birdies",
    "The Roxy"
  ]);
  const [input, setInput] = useState("");
  const [number, setNumber] = useState(null);

  function selectPub() {
    setNumber(Math.floor(Math.random() * pubs.length));
  }

  return (
    <div className={css.content}>
      <ul style={{ "list-style-type": "none" }}>
        {pubs.map((item, i) => {
          return (
            <li key={item + i} style={{ color: i === number && "red" }}>
              {item}
            </li>
          );
        })}
      </ul>
      <Button selectPub={selectPub} />
      <InputField
        setPubs={setPubs}
        pubs={pubs}
        input={input}
        setInput={setInput}
      />
    </div>
  );
}
