import React from 'react'
import '../../Styles/startpage.css'
function Profile(props){
    ////////Same thing as ///////////////////////////////////// highlighted profile////////////////////////// but with a not highighted style/////////////////////
    //props.onclick is a function passed by app to startpage to here and determines which profile to display on the top right corner hahahahaahha 3 days of work 
    //that!!!!
    return(
        <div className = 'profile'>
            <img className = 'profileImage' src={props.src} alt = {props.name} onClick = {() => {props.onClick(props.name, props.src, props.isKid)}}></img>
            <h2>{props.name}</h2>
        </div>
    )
}
export default Profile