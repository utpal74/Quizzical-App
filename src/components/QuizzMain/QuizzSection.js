
import React from "react";
import QuestionSection from "./QuestionSection"
import AnswerSection from "./AnswerSection"
import {nanoid} from "nanoid"

const MAX_NO_OF_QUESTION_IN_QUIZZ = 5

export default function QuizzSection(props) {

    // QuizzData - returns the array of questions and answers
    const [QuizzData, setQuizzData] = React.useState([])

    React.useEffect(()=>{
        async function fetchData() {
            const result = await fetch(`https://opentdb.com/api.php?amount=${MAX_NO_OF_QUESTION_IN_QUIZZ}`)
            const data = await result.json();
            setQuizzData(data.results)
        }
        fetchData();
    }, [])

    // shuffle correct and incorrect answers in random order
    function shuffleAnswers(answers) {
        answers = Array.from(answers);
        for (let i = 0; i < 2; i++) {
            let randomIndex = Math.floor(Math.random() * answers.length)
            if (i !== randomIndex) {
                let temp = answers[randomIndex]
                answers[randomIndex] = answers[i]
                answers[i] = temp
            }
        }
        return answers
    }

    const quizzElement = QuizzData.map(data => {
        let answersArr = []

        answersArr.push({
            value: data.correct_answer,
            isCorrect: true,
            isSelected: false
        })

        data.incorrect_answers.map(ic => {
            answersArr.push({
                value: ic,
                isCorrect: false,
                isSelected: false
            })
        })

        return <div id={nanoid()} className="qnans">
            <QuestionSection id={nanoid()} question={data.question} />
            <AnswerSection
                           isSubmitted={props.submitted} 
                           id={nanoid()} 
                           answers={shuffleAnswers(answersArr)}
            />
        </div>
    })

    return (
        <div className="qna-area">
            {quizzElement}
        </div>
    )
}
