import React from "react"

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNr: number;
    totalQues: number
}

const Questions: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNr,
    totalQues }): any => {

    console.log("question: ", question)
    console.log("answers: ", answers)
    console.log("callback: ", callback)
    console.log("userAnswer: ", userAnswer)
    console.log("questionNr: ", questionNr)
    console.log("totalQues: ", totalQues)

    return (
        <div>
            <p>Question: {questionNr} / {totalQues}</p>
            <p>Question: {question}</p>

            <div>
                {answers.map((answer, ind) => (
                    <div key={answer}>
                       
                        <button onClick={callback} key={ind} value={answer} disabled={userAnswer ? true : false} >
                            {answer}
                        </button>
                    </div>

                ))}
            </div>


        </div>
    )
}

export default Questions