import  questions from "../../../data/questions";
import './Game.scss'

function Game({ questin, hendleClockAnswer, stepQuestin }) {
	const percent = (stepQuestin / questions.length) * 100;
	return (
	  <>
		<div className="progress">
		  <div
			style={{ width: `${percent}% ` }}
			className="progress__inner"
		  ></div>
		</div>
		<h1>{questin.title}</h1>
		<ul>
		  {questin.variants.map((answer, index) => (
			<li onClick={() => hendleClockAnswer(index)} key={answer}>
			  {answer}
			</li>
		  ))}
		</ul>
	  </>
	);
  }

  export default Game