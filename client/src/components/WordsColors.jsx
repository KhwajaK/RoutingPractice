import React from 'react'
import { useParams } from 'react-router-dom'

const WordsColors = (props) => {

    const {word, color1, bgColor2} = useParams();

    return (

    <div>
        { isNaN(word) ?
        <h1 style={ color1? 
            {color: color1, backgroundColor: bgColor2}
        :null}>
            The word is: {word}
        </h1>
        :
        <h1>
            The number is: {word}
        </h1>
        }
    </div>

    )
}

export default WordsColors