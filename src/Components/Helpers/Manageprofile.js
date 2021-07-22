import React from 'react'
import HighlightedProfile from './HighlightedProfile'
import '../../Styles/startpage.css'

function Manageprofile(props){
    let counter = 0

    return(
        <div>
            <div>
                <div className = 'alignCenter'>
                    <h1 className = 'watching'>Manage Profiles:</h1>
                </div>
                <div className = 'profileBox'>
                    {
                        props.profiles.map((profile) => {
                            counter = counter + 1;
                            return(<HighlightedProfile name = {profile.name} src = {profile.src} key = {counter} place = {counter} onClick = {props.passData}/>)
                        })
                    }
                </div>
                <div>
                    <button className = 'done' onClick = {props.done}>DONE</button>
                </div>
            </div>
        </div>
    )
}

export default Manageprofile