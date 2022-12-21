import { useState } from "react";
import "./styles.css";

export default function App() {
  const [birthDate, setBirthDate] = useState("");
  const [luckyNumber, setLuckyNumber] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const checkLuckyNumber = () => {
    if (!birthDate || !luckyNumber) {
      return setError("Please fill both birthdate and lucky number");
    }
    const dob = birthDate.split("-").join("");
    // "1234" => ['1','2','3','4'] = > [1,2,3,4]=> 10
    let dobSum = dob
      .split("")
      .map((val) => parseInt(val, 10))
      .reduce((prevVal, currVal) => prevVal + currVal);
    if (dobSum % luckyNumber === 0) {
      setResult(`YaY!! ${luckyNumber} Its a lucky number 🥳 🥳`);
    } else {
      setResult(`${luckyNumber} is not that lucky 😕`);
    }
    setError("");
  };
  return (
    <div className="App">
      <h1 className="app-heading">
        Is your birthday Lucky{" "}
        <span role="img" aria-label="wondering">
          {" "}
          🤔
        </span>
      </h1>
      <div className="container">
        <p className="title">Date of Birth</p>
        <div className="error">{error}</div>
        <input
          type="date"
          className="date-input"
          value={birthDate}
          onChange={(e) =>{ setResult(""); setBirthDate(e.target.value)}}
        />
        <p className="title">Lucky Number</p>
        <input
          type="number"
          className="lucky-number"
          placeholder="Enter a number"
          value={luckyNumber}
          onChange={(e) => {setResult(""); setLuckyNumber(e.target.value)}}
        />
        <button className="action-btn" onClick={checkLuckyNumber}>
          Check Number
        </button>
        <div className="result">{result}</div>
      </div>
    </div>
  );
}
