import React, { useState } from "react";
import "./App.css";
import Header from "./Header";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const handlePlusClick = () => {
    setStep((s) => s + 1);
  };
  const handleMinusClick = () => {
    setStep((s) => (s > 1 ? s - 1 : 1));
  };

  const handleCountPlusClick = () => {
    setCount((c) => c + step);
  };

  const handleCountMinusClick = () => {
    setCount((c) => c - step);
  };

  const date = new Date("Jun 24 2024");
  date.setDate(date.getDate() + count);

  return (
    <>
      <header>
        <Header />
      </header>
      <div className="context">
        <div className="step">
          <button onClick={handleMinusClick}>-</button>
          <p>Step: {step}</p>
          <button onClick={handlePlusClick}>+</button>
        </div>
        <div className="count">
          <button onClick={handleCountMinusClick}>-</button>
          <p>Count: {count}</p>
          <button onClick={handleCountPlusClick}>+</button>
        </div>
        <div className="text">
          <p>
            {count === 0 && `Today is ${date.toDateString()}`}
            {count > 0 && `${count} days from today is ${date.toDateString()}`}
            {count < 0 &&
              `${Math.abs(count)} days ago was ${date.toDateString()}`}
          </p>
        </div>
      </div>
    </>
  );
}
