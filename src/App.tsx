import React, { useState } from 'react';
import Questions from "./components/Questions"
import dataFromAPI from "./API"
import {Difficulty, QuestionState} from "./API"


function App() {

  const TOTAL_QUESTIONS = 10;

  const [loading, SetLoading] = useState(false)
  const [gameStatus, SetGameStatus] = useState(false)
  const [questionNumber, SetQuestionNumber] = useState(0)
  const [score, SetScore] = useState(0)
  const [questions, SetQuestions] = useState<QuestionState[]>([])
  const [answers, SetAnswers] = useState([])
  const [userAnswer, SetUserAnswer] = useState<AnswerObject[]>([])

  type AnswerObject = {
    question: string,
    answer: string,
    correct: boolean,
    correctAnswer: string,
  }

  const fetchQuesFromAPI = async () => {
    const newQuestions = await dataFromAPI(TOTAL_QUESTIONS, Difficulty.EASY)
    console.log("newQuestions after manipulation: ", newQuestions)
  }


  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }


  return (
    <div className="App">
      <h1>Quiz App using Typescript</h1>
      <button onClick={fetchQuesFromAPI} >Start Quiz</button>
      <h2>Score </h2>

      {/* <Questions
        question={questions[questionNumber].question }
        answers={ questions[questionNumber].answers}
        callback={ checkAnswer}
        userAnswer={ userAnswer? userAnswer[questionNumber]: undefined}
        questionNr={ questionNumber +1}
        totalQues={TOTAL_QUESTIONS} /> */}

      <button onClick={nextQuestion}> Next Question</button>

    </div>
  );
}

export default App;
