
import React from "react";
import TopImgSec from "../ImageSection/TopImgSec";
import BottomImgSec from "../ImageSection/BottomImgSec";
import QuizzAppComponent from "../QuizzMain/QuizzAppComponent";

import '../../css/component.css'

export default function StartQuizz() {

    const [quizzStarted, setQuizzStarted] = React.useState(false)
    let handleClick = () => {
        setQuizzStarted(prev => !prev)
    }

    return (
        <div>
            <div className="quizz-home-container">
                <TopImgSec />
                {!quizzStarted && <div>
                                    <h3>Quizzical</h3>
                                    <p className='quiz-type-desc'>A simple quiz on random topics, click the button below to start it</p>
                                    <button id="strt-q-btn" onClick={handleClick}>Start Quiz</button>
                                  </div>}
                {quizzStarted && <QuizzAppComponent handleClick={handleClick} />}
                <BottomImgSec />
            </div>
        </div>
    )
}
