import React from 'react'
import '../../Styles/startpage.css'
import edit from '../../Assets/edit.png'

function Profile(props){
    //Creates a HIGHLY SCALABLE FRAMEWORK USED FOR id its just areusable ba dcode 
    //code??????????? thisis html and i want t odie
    return(
        <div className = 'profile2' onClick = {() => {props.onClick(props.place)}}>
            <img className = 'edit' src = {edit} alt = 'edit'></img>
            <img className = 'highLightedImage' src={props.src} alt = {props.name}></img>
            <h2>{props.name}</h2>
        </div>
    )
}
export default Profile