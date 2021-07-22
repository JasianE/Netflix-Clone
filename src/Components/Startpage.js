import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Profile from './Helpers/Profile'
import NewProfile from './Helpers/NewProfile'
import Manageprofile from './Helpers/Manageprofile'
import EditPage from './Helpers/EditPage'
import '../Styles/startpage.css'
import plus from '../Assets/plus.png'

function Startpage(props){
    //Initialie usehistory
    const history = useHistory()

    //Profile has 4 properties, language is filler, and isKid affects soley style (no special page for kids)
    const [Profiles, setProfile] = useState([{name: 'DerekJeter', src: 'https://i.imgur.com/SHx84Cv.png', isKid: false, language: 'English'}])

    //These are the various conditional rhs stuff for setting up the start page, new profile page creates new profiles, manage profile is the hub for editing 
    //Profiles, and editpage is the actual page for editing
    const [newProfilePage, setNewProfilePage] = useState(false)
    const [manageProfile, setManageProfile] = useState(false)
    const [editPage, setEditPage] = useState(false)

    //Chosen profile is the profile that will be edited, initialized as null
    const [chosenProfile, setChosenProfile] = useState()
    
    //Counter is used to provide a unique key and number determines when the add button will stop appearing (5)
    let number = Profiles.length
    let counter = 0;

    //I guess this is a state factory function? Takes in 4 paramaters, creates and new object and appends it, and sets the rhs of displaying as false for 
    //The new profile page, is passed as props to newprofile and is used when the user clicks the save button.
    function addNewProfile(user, url, isKid, Language){
        setProfile(prevState => [...prevState, {name: user, src: url, isKid: isKid, language: Language}])
        setNewProfilePage(false)
    }
    //Cancel button only sets newprofilepage conditional as false, passed as a props functon to newProfile
    function cancel(){
        setNewProfilePage(false)
    }
    //These functions are passed as props to manage profile
    //Done sets manageprofile to false and returns user back to main startpage
    function done(){
        setManageProfile(false)
    }
    //passData takes in a profile that has been clicked and sets current profile to said profile, immediately after turns on editpage passing in currentprofile as
    //the profile to be edited, is first passed to manage profile which is then passed to highlighted profile as an onclick function
    function passData(profile){
        setChosenProfile(profile)
        setEditPage(true)
    }
    //Is used for two functions, (i know one function one purpose but like cmon), canceling and setting, when set it takes the new profile object array and sets
    //It to local state, when used for cancellation (Esambald) it simply sets the editpage conditional to false which is  done on both cases.
    function editDone(profile){
        if(profile !== 'Esambald'){
            setProfile([...profile])
        }
        setEditPage(false)
    }
    function changeLink(name, src, isKid){
        props.setNewProfiles(Profiles)
        props.change(name, src, isKid)
        history.push('/home')
    }
    //I feel as if this project is more css than js react and logic :(
    return(
        <div className = 'container'>
            <nav className = 'netflixLogo'>
                <img className = 'navImg' src='https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=8' alt ='netflix'></img>
            </nav>
            <div>
                {
                    newProfilePage ? <NewProfile addNewProfile = {addNewProfile} cancel = {cancel} /> : editPage ? <EditPage done = {editDone} chosenProfile = {chosenProfile} Profiles = {Profiles}/> : manageProfile ?
                    <Manageprofile profiles = {Profiles} done = {done} passData = {passData}/> :
                <div className = 'startPageMain'>
                    <h1 className = 'watching'>Who's Watching?</h1>
                    {
                        /*
                        Maps through each profile and returns a profile with given name, src, and isKid (language does not affect appearance and is not used)
                        */
                    }
                    <div className = 'profileBox'>
                        {
                        Profiles.map((profile) => {
                            counter = counter + 1
                            return(<Profile name = {profile.name} src = {profile.src} isKid = {profile.isKid} key = {counter} onClick = {changeLink}/>)
                        })
                        }
                        {number < 5 ? 
                            //Determiner for whether or not to display add button
                            //Afterwards creates the addbutton with the onclick function of setting whether to display the newprofile page or not
                            //If the number of profiles is greater than 5 it returns null which generates nothing
                            <div className = 'profile'onClick = {() => {
                                setNewProfilePage(true)
                                }}>
                                    <img className = 'profileImage' src = {plus} alt ='plus'></img>
                                    <h2 className = 'addButton'>Add New Profile</h2>
                                </div> :
                            null
                        }
                    </div>
                    {
                        /*
                        Same function as the add button but for managing profile page
                        */
                    }
                    <div>
                        <button className = 'manageProfile' onClick = {() => {setManageProfile(true)}}>
                            Manage Profiles
                        </button>
                    </div>
                </div>
                }
            </div>
        </div>

    )
}
export default Startpage