import { useState } from "react";
import "./index.scss";

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const [step, setStep] = useState(1);
  // для будущей валидации
  // const asc = "Введиде число!";

  function handleClickPlus() {
    setCount(count + step);
  }

  function handleClickMinus() {
    setCount(count - step);
  }

  const handleChange = (e) => {
    setValue(e.target.value);
    setStep(Number(e.target.value));
  };

  const handleClickЯeroing = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <input
          value={value}
          placeholder="Введите шаг"
          onChange={handleChange}
        />
        <h1>{count}</h1>

        <button onClick={handleClickMinus} className="minus">
          - Минус
        </button>
        <button onClick={handleClickPlus} className="plus">
          Плюс +
        </button>
        <button onClick={handleClickЯeroing} className="plus">
          Обнулить
        </button>
      </div>
    </div>
  );
}

export default App;
