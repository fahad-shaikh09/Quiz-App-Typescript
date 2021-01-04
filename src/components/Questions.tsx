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
    totalQues }):any => {


    return
    <div>
        <p>Question: {questionNr} / {totalQues}</p>
        <p>question: {question}</p>
        
        <div>
            {answers.map(answer => (
                <div> 
                    <button onClick={callback}>
                        {answer}
                    </button>
                </div>

            ))}
            </div>


    </div>

}

export default Questions