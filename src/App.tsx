import React, { useState } from 'react';
import Questions from "./components/Questions"
import dataFromAPI from "./API"
import { Difficulty, QuestionState } from "./API"


function App() {

  const TOTAL_QUESTIONS = 10;

  const [loading, SetLoading] = useState(false)
  const [questions, SetQuestions] = useState<QuestionState[]>([])
  const [questionNumber, SetQuestionNumber] = useState(0)
  const [quizCompleted, SetQuizCompleted] = useState(true)
  const [score, SetScore] = useState(0)
  // const [answers, SetAnswers] = useState([])
  const [userAnswers, SetUserAnswers] = useState<AnswerObject[]>([])

  type AnswerObject = {
    question: string,
    answer: string,
    correct: boolean,
    correctAnswer: string,
  }

  const fetchQuesFromAPI = async () => {
    SetLoading(true);
    SetQuizCompleted(false);
    const newQuestions = await dataFromAPI(TOTAL_QUESTIONS, Difficulty.EASY)
    // console.log("newQuestions after manipulation: ", newQuestions)
    SetQuestions(newQuestions)
    SetScore(0);
    SetUserAnswers([])
    SetQuestionNumber(0)
    SetLoading(false)
  }


  const checkAnswer = (e: any) => {
    if (!quizCompleted) {
      const answer = e.currentTarget.value;

      const correct = questions[questionNumber].correct_answer === answer;

      if (correct) {
        SetScore(prevScore => prevScore + 1);
        const answerObj = {
          question: questions[questionNumber].question,
          answer: answer,
          correct: correct,
          correctAnswer: questions[questionNumber].correct_answer,
        }
        SetUserAnswers(prev => [...prev, answerObj])
      }

      if (questionNumber + 1 === TOTAL_QUESTIONS) {
        SetQuizCompleted(true)
      } else {
        SetQuestionNumber(prevQuesNr => prevQuesNr + 1)

      }
    }
  }

  // const nextQuestion = () => {

  // }


  return (
    <div className="App">
      <h1>Quiz App using Typescript</h1>

      <h2>Score:  {score}</h2>

      {quizCompleted || userAnswers.length === TOTAL_QUESTIONS ? (
        <button onClick={fetchQuesFromAPI} >Start Quiz</button>
      ) : null}

      {loading && <h2>Loading Questions...</h2>}

      {!loading && !quizCompleted &&
        <Questions
          question={questions[questionNumber].question}
          answers={questions[questionNumber].answers}
          callback={checkAnswer}
          userAnswer={userAnswers ? userAnswers[questionNumber] : undefined}
          questionNr={questionNumber + 1}
          totalQues={TOTAL_QUESTIONS} />
      }

      <br />
      {/* {!loading && !quizCompleted && userAnswers.length === questionNumber + 1 && questionNumber !== TOTAL_QUESTIONS - 1 ?
        <button onClick={nextQuestion}> Next Question</button>
        : null } */}
    </div>
  );
}

export default App;
