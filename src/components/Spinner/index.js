import React, { useState } from "react";
import Button from "../Button";
import InputField from "../InputField";
import css from "./Spinner.module.css";

export default function Spinner() {
  const [toggleArray, setToggleArray] = useState(false);
  const [pubs, setPubs] = useState([
    "The Old Crown",
    "Digbeth Dining Club",
    "The Ruin",
    "Digbrew",
    "Floodgate",
    "Birdies",
    "The Roxy",
  ]);
  const [bootcampers, setBootcampers] = useState([
    "Alexa",
    "Helen",
    "Patrick",
    "James",
  ]);
  const [input, setInput] = useState("");
  const [number, setNumber] = useState(null);

  function selectPub() {
    setNumber(Math.floor(Math.random() * pubs.length));
  }

  function selectRound() {
    setNumber(Math.floor(Math.random() * bootcampers.length));
  }

  function handleDisplay() {
    setToggleArray(!toggleArray);
  }

  return (
    <div className={css.content}>
      {toggleArray ? (
        <ul style={{ "list-style-type": "none" }}>
          {pubs.map((item, i) => {
            return (
              <li key={item + i} style={{ color: i === number && "red" }}>
                {item}
              </li>
            );
          })}
        </ul>
      ) : (
        <ul style={{ "list-style-type": "none" }}>
          {bootcampers.map((item, i) => {
            return (
              <li key={item + i} style={{ color: i === number && "red" }}>
                {item}
              </li>
            );
          })}
        </ul>
      )}

      <Button selectPub={selectPub} selectRound={selectRound} />
      <InputField
        setBootcampers={setBootcampers}
        bootcampers={bootcampers}
        setPubs={setPubs}
        pubs={pubs}
        input={input}
        setInput={setInput}
      />
      {toggleArray ? (
        <button onClick={handleDisplay}>Who's round is it?</button>
      ) : (
        <button onClick={handleDisplay}>Where are we going?</button>
      )}
    </div>
  );
}
