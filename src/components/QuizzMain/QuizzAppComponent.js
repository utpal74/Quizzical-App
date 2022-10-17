
import React from "react";
import QuizzSection from "./QuizzSection";
import QuizzSubmitSection from "./QuizzSubmitSection";
import {getCount} from '../../Utils.js'

export default function QuizzAppComponent(props) {
    const {handleClick} = props
    const [isAnsSubmitted, setIsAnsSubmitted] = React.useState(false)
    const [score, setScore] = React.useState(0)

    function handleSubmit() {
        if (!isAnsSubmitted) {
            setIsAnsSubmitted(true)
            setScore(getCount())
        } else {
            setScore(0)
            setIsAnsSubmitted(false)
        }
        
    }

    return (
        <div className="quizz-app-comp">
            <QuizzSection submitted={isAnsSubmitted} />
            <QuizzSubmitSection 
                count={score} 
                handleSubmit={handleSubmit}
                handleClick={()=>{handleClick()}}
                submitted={isAnsSubmitted}
            />
        </div>
    )
}
