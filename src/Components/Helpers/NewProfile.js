import React, {useState} from 'react'
import '../../Styles/startpage.css'

function NewProfile(props){
    //Dear diary, why do people use const peepeePoo = () => {} instead of a function declaration for react??? I know that function expressions are kinda poopy
    //but its an arrow function.... but like an arrow function is useful because of lexical scope or someshit specific i dont even remember but like i dont 
    //I guess its just style but which one do you prefer??? I like the simple function declaration because it minimizes the bulk of the code but it also becomes
    //kinda monotonous but shouldnt you be consistent with what tyhpe you use?? but dodes it really... like sures don tmix up tabs and spaces but yo ucan 
    //sprinkle in different function delcariatonsdfmg right??? i dont know it just seems superficial... but is it??!?!?!?! yea
    //Why do i write like this now its weird and i want to go back to school
    // -------------------------------------------------------------------------------------------------------------------------------------------

    //initializes two values name and iskid, image src is not touched on here because netflix is like hahahahaah hahahahahah go out of your way to change prof pic
    const [newProfileName, setNewProfileName] = useState('')
    const [isKid, setIsKid] = useState(false)

    //prevents default, uses startapges function to add a new profile to the profiles array in state with paramaters name, src, isKid, and english all in order
    function handleSubmit(e){
        e.preventDefault()
        props.addNewProfile(newProfileName, 'https://i.imgur.com/SHx84Cv.png', isKid, 'English')
    }
    //Take in event, sets name and value, and sets either profile name or kid depending o the name of the calelr
    function handleChange(e){
        const {name, value} = e.target
        if(name === 'newProfileName'){
            setNewProfileName(value)
        }
        else if(name === 'kid'){
            setIsKid(!isKid)
        }
    }
    //Handles the cancel and calls on the local state function because we need to set editpage to false
    function handleCancel(e){
        e.preventDefault()
        props.cancel()
    }
    return(
        <div>
            <nav className = 'netflixLogo'></nav>
            <div className = 'formBody'>
                <h1 className = 'addProfile'>Add Profile</h1>
                <div className = 'marginBottom'>
                    <h2 className = 'addAProfile'>Add a profile for another person watching Netflix.</h2>
                    <hr></hr>
                    <div className = 'form'>
                        <img src = 'https://i.imgur.com/SHx84Cv.png' className = 'profileImage2' alt = 'profile'></img>
                        <form autoComplete = 'off' onSubmit = {handleSubmit}>
                            <input 
                                type = "text"
                                className = 'input'
                                name = 'newProfileName'
                                value = {newProfileName}
                                placeholder = 'Name'
                                onChange = {handleChange}
                            />
                            <label className = 'kid'>
                                <input 
                                    className = 'check'
                                    type = 'checkbox'
                                    name = 'kid'
                                    checked = {isKid}
                                    onChange = {handleChange}
                                />
                                <span>Kid?</span>
                            </label>
                            <hr className = 'hr2'></hr>
                            <input 
                                type = 'submit'
                                value = 'Continue'
                                className = 'continue'
                            />
                        </form>
                        <form onSubmit = {handleCancel}>
                            <input
                                type = 'submit'
                                value = 'Cancel'
                                className = 'cancel'
                            />
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default NewProfile