
import React from "react";
import Answer from "./Answer";
import {nanoid} from "nanoid"
import {countAnswer} from "../../Utils.js"

export default function AnswerSection(props) {
    const {answers, isSubmitted} = props

    const getAllQuizzAnswers = () => {
        let allQuizzAnswers = []
        for (let i = 0; i < answers.length; i++) {
            allQuizzAnswers.push({
                value: answers[i].value,
                id: nanoid(),
                isSelected: answers[i].isSelected,
                isCorrect: answers[i].isCorrect,
            })
        }
        return allQuizzAnswers
    }

    const [quizzAnswers, setQuizzAnswers] = React.useState(getAllQuizzAnswers())

    const handleClick = (id) => {
        setQuizzAnswers(prevAnswers => prevAnswers.map(answer => {
            if (answer.id === id) {
                if (answer.isCorrect) {
                    countAnswer()
                }
                return {...answer, isSelected: !answer.isSelected}
            } else {
                return answer
            }
        }))
    }

    const answerElement = quizzAnswers.map(qanswer => {
        return <Answer 
                    handleClick={()=>{handleClick(qanswer.id)}}
                    value={qanswer.value} 
                    key={qanswer.id}
                    selected={qanswer.isSelected}
                    correct={qanswer.isCorrect}
                    submit={isSubmitted}
                />
    })

    return (
        <div className="ans-main">
            {answerElement}
        </div>
    )
}
