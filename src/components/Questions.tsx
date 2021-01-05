import React from "react"
import {AnswerObject} from "../App"


type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQues: number
    correct: boolean
}

const Questions: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNr,
    totalQues,correct }): any => {

    console.log("question: ", question)
    console.log("answers: ", answers)
    console.log("callback: ", callback)
    console.log("userAnswer: ", userAnswer)
    console.log("questionNr: ", questionNr)
    console.log("totalQues: ", totalQues)
    console.log("correct: ", correct)

    return (
        <div>
            <h3>Question: {questionNr} / {totalQues}</h3>
            <h4>Question: {question}</h4>

            <div>
                {answers.map((answer, ind) => (
                    <div key={answer}>
                       
                        <button onClick={callback} key={ind} value={answer}  >
                            {answer}
                        </button>
                    </div>

                ))}
            </div>


        </div>
    )
}

export default Questions