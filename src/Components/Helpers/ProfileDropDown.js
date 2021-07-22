import React from 'react'
import { Link } from 'react-router-dom' 
import '../../Styles/Nav.css'

function ProfileDropDown(props){
    let counter = 0

    return(
        <div className = 'profileDropDown'>           
            <div className = 'profileMapped'>
                {props.profiles.map(function(key){
                    counter = counter + 1
                    return(
                    <div key = {counter} className = 'profiledingdong'>
                        <img className = 'dropDownProfile' src = {key.src} alt = {key.name}></img>
                        <Link to = '/home' onClick = {() => {props.onClick(key.name, key.src, key.isKid)}}>
                            <h2 className = 'dropDownNameProfile'>{key.name}</h2>
                        </Link>
                    </div>
                    )
                })}
            </div>
            <hr className = 'profileBruh'></hr>
            <div className = 'profilePPPPPPPPPP'>
                <Link to = '/home'>
                    <h2 className = 'dropDownNameProfile2'>"Account"</h2>
                </Link>
                <Link to = '/home'>
                    <h2 className = 'dropDownNameProfile2'>"Help Center"</h2>
                </Link>
                <Link to = '/home'>
                    <h2 className = 'dropDownNameProfile2'>"Sign Out Of Netflx"</h2>
                </Link>
            </div>
        </div>
    )
}

export default ProfileDropDown