import {shuffleArray} from "./utils"


export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export type Question = {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: string[],
    question: string,
    type: string,
}
export type QuestionState = Question & { answers: string[] }

export const dataFromAPI = async (amount: number, difficulty: Difficulty): Promise<QuestionState[]> => {
    const api = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`

    const data = await (await fetch(api)).json()
    // console.log("data before manipulation:", data)
    return data.results.map((question: Question) => (
        {
            ...question,
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer]) 
        }
    ))
}


export default dataFromAPI