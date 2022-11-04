import React, { useState } from "react";
import Counter from "./components/counter/Counter";
import "./index.scss";
import { ImCalculator, ImCross } from "react-icons/im";

function App() {
  const [open, setOpen] = useState(false);
  //==== counter =====
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [value, setValue] = useState("");

  const hendleOpen = () => {
    setCount(0);
    setStep(1);
    setValue("");
    setOpen(true);
  };

  const hendleClose = () => {
    setOpen(false);
  };

  //==== counter =====

  //клик на плюс
  function handleClickPlus() {
    setCount(count + step);
  }

  //клик на минус
  function handleClickMinus() {
    setCount(count - step);
  }

  //Обнуление
  const handleClickZeroing = () => {
    setCount(0);
  };

  //значения из input в counter
  const handleChange = (e) => {
    setValue(e.target.value);
    setStep(Math.round(Number(e.target.value)));
  };

  return (
    <div className="App">
      <button onClick={hendleOpen} className="open-modal-btn">
        <ImCalculator />
        Счетчик
      </button>
      <div className={`overlay animated ${open ? "show" : ""}`}>
        <div className="modal">
          <ImCross onClick={hendleClose} />
          <Counter
            handleClickPlus={handleClickPlus}
            handleClickMinus={handleClickMinus}
            handleClickZeroing={handleClickZeroing}
            handleChange={handleChange}
            count={count}
            value={value}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
