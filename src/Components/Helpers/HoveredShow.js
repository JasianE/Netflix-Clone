import React from 'react'
import play from '../../Assets/play.png'
import thumb from '../../Assets/thumb.png'

function HoveredShow(props){
    return(
        <div className = 'hoveredShow'>
            <img className = 'hoveredShowImage' alt = {props.alt} src = {props.src}></img>
            <img className = 'playButton' alt = {props.alt} src = {play}></img>
            <img className = 'thumbsUp' alt = {props.alt} src = {thumb}></img>
            <img className = 'thumbsDown' alt = {props.alt} src = {thumb}></img>
        </div>
    )
}

export default HoveredShow