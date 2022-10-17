

import React from "react";
import {nanoid} from "nanoid"

export default function QuestionSection(props) {
    let question = props.question

    question = question.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#039;/g, "'")

    return (
        <div key={nanoid()} className="q">
            {question}
        </div>
    )
}
