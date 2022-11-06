import React, { useState } from "react";
import Counter from "./components/counter/Counter";
import "./index.scss";
import "./App.scss";
import questions from "./data/questions";

//====== иконки из react-icons =======
import { ImCalculator, ImCross } from "react-icons/im";
import { MdOutlineQuiz } from "react-icons/md";
import Result from "./components/quiz/Result/Result";
import Game from "./components/quiz/Game/Game";

function App() {
  //==== useState открытия
  const [open, setOpen] = useState(false);
  const [openQuis, setOpenQuis] = useState(false);

  //==== counter useState =====
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [value, setValue] = useState("");

  //==== quiz useState =====
  const [stepQuestin, setStepQuestin] = useState(0);
  const [correct, setCorrect] = useState(0);
  const questin = questions[stepQuestin];

  const hendleOpen = () => {
    setCount(0);
    setStep(1);
    setValue("");
    setOpen(true);
  };

  const hendleClose = () => {
    setOpen(false);
    setOpenQuis(false);
  };

  //==== counter function=====

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

  //==== quiz function =====
  const hendleClockAnswer = (index) => {
    console.log(stepQuestin, index);
    setStepQuestin(stepQuestin + 1);
    if (index === questin.correct) {
      setCorrect(correct + 1);
    }
  };

  const hendleOpenQuiz = () => {
    setOpenQuis(true);
  };

  return (
    <div className="App">
      <button onClick={hendleOpen} className="open-modal-btn">
        <ImCalculator />
        Счетчик
      </button>
      <button onClick={hendleOpenQuiz} className="open-modal-btn">
        <MdOutlineQuiz />
        Викторина
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
      <div className={`overlay animated ${openQuis ? "show" : ""}`}>
        <div className="modal quiz">
          <ImCross onClick={hendleClose} />
          {stepQuestin < questions.length ? (
            <Game
              questin={questin}
              hendleClockAnswer={hendleClockAnswer}
              stepQuestin={stepQuestin}
            />
          ) : (
            <Result correct={correct} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
