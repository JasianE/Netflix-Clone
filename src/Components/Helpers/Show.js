import React, {useState, useRef} from 'react'
import '../../Styles/general.css'
import HoveredShow from './HoveredShow'

function Show(props){
    const showRef = useRef(null)
    const [isHovered, setIsHovered]= useState(false)

    function handleMouseEnter(){
        setIsHovered(true)
    }
    function handleMouseLeave(e){
        console.log(e)
        setIsHovered(false)
    }

    return(
        <div className = 'propsContainer' ref = {showRef} onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseLeave}>
            {isHovered ? <HoveredShow src = {props.props.src} alt = {props.props.name}/> :
            <img className = 'show' alt = {props.props.name} src = {props.props.src}></img>
            }
        </div>
    )
}

export default Show