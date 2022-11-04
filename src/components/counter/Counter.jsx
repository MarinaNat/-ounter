import React from 'react'
import './Counter.scss'

const Counter = ({
	handleClickPlus, 
	handleClickMinus, 
	handleClickZeroing,
	handleChange,
	count,
	value
}) => {

  return (
	<div className="counter">
      <div>
        <h2>Счетчик:</h2>
		<p>Введите целое число:</p>
        <input
          value={value}
          placeholder="Введите шаг"
          onChange={handleChange}
		  type='number'
        />
        <h1>{count}</h1>

        <button onClick={handleClickMinus} className="minus">
          - Минус
        </button>
        <button onClick={handleClickPlus} className="plus">
          Плюс +
        </button>
        <button onClick={handleClickZeroing} className="plus">
          Обнулить
        </button>
      </div>
    </div>
  )
}

export default Counter