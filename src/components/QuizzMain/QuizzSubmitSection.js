
import React from "react";

export default function QuizzSubmitSection(props) {
    return (
        <div className="q-submit">
            {!props.submitted && <button onClick={props.handleSubmit} className="check_btn">Check answers</button>}
            {props.submitted && <div className="score-el">
                            <p>You scored {props.count}/5</p> 
                            <button  onClick={props.handleClick} className="check_btn">Play again</button>
                        </div>}
        </div>
    )
}