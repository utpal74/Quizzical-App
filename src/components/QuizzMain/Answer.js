
import React from "react";

export default function Answer(props) {

    const {selected, handleClick, value, correct, submit} = props

    const styles = {
        backgroundColor: selected ? `#D6DBF5` : `#F5F7FB`
    }

    const submitStyle = {
        backgroundColor: correct ? `#94D7A2` : (selected && !correct) ? `#F8BCBC` : `#F5F7FB`
    }

    function formatText(value) {
        return value.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#039;/g, "'");
    }

    return (
        <div 
            className="ans" 
            onClick={handleClick} 
            style={submit ? submitStyle : styles}
        >
            {formatText(value)}
        </div>
    )
}
