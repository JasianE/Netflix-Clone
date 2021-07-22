import React, {useState} from 'react'
import '../../Styles/startpage.css'

//So 'helpers' are components that require other components other then app, despite sometimes using more lines of code and logic which is funny (to me)
function EditPage(props){
    //The notation required is a handful but i need to put state on top because style 
    //Takes in each part of the given profiles properties i.e name, src and language
    //No changing isKid because netflix nono
    const [editedName, setEditedName] = useState(props.Profiles[props.chosenProfile - 1].name)
    const [editedSrc, setEditedSrc] = useState(props.Profiles[props.chosenProfile - 1].src)
    const [language, setLanguage] = useState(props.Profiles[props.chosenProfile - 1].language)
    //This stuff is never used and is made purely to match netflix's style (kinda lazy but it changes nothing)
    const [Autoplay, setAutoplay] = useState(true)
    const [AutoplayPreview, setAutoplayPreview] = useState(true)

    //Once again simplifying the notation so when I reread this i dont g et a stroke
    let profileInfo = props.Profiles
    let profile = profileInfo[props.chosenProfile - 1]
    let name = profile.name
    let src = profile.src

    function handleChange(e){
        //Takes in event, takes name and value, and goes through an array of conitionals to determine which state to update
        //Is there a better way to do this?
        const {name, value} = e.target
        if(name === 'editedName'){
            setEditedName(value)
        }
        else if(name === 'dropDown'){
            setLanguage(value)
        }
        else if(name === 'Autoplay'){
            setAutoplay(!Autoplay)
        }
        else{
            setAutoplayPreview(!AutoplayPreview)
        }
    }
    //Prevents reload, creates the newprofile with edits, creates a new profile array, removes old instance of the corresponding profile, appends new array to 
    //the location of the previous object, and finally updates startpage state with the new array
    function handleSubmit(e){
        e.preventDefault()
        const newProfile = {name: editedName, src: editedSrc, isKid: props.Profiles[props.chosenProfile - 1].isKid, language: language}
        let newArray = [...props.Profiles]
        newArray.splice(props.chosenProfile - 1, 1, newProfile)
        props.done(newArray)
    }
    //Sends in the very discrete conditiaoadfslfsndflfnsfslnd for cancellation
    function handleCancel(e){
        e.preventDefault()
        props.done('Esambald')
    }
    //Prevents reload, creates a new profile array, removes instance of the array, and updates startpage state with the new array of objects
    function handleDelete(e){
        e.preventDefault()
        let deleted = [...props.Profiles]
        deleted.splice(props.chosenProfile - 1, 1)
        props.done(deleted)
    }
    return(
        <div>
            <h1 className = 'addProfile'>Edit Profile</h1>
            <hr className = 'editProfileHr'></hr>
            <img className = 'editProfileImage'src = {src} alt ={name}></img>
            <div>
                <form autoComplete = 'off' onSubmit = {handleSubmit}>
                    <input 
                    name = 'editedName'
                    type = 'text'
                    className = 'input2'
                    value = {editedName}
                    placeholder = 'name'
                    onChange = {handleChange}
                    />
                    <label>
                        <h2 className = 'Language'>Language:</h2>
                        <div className = 'custom'>
                            <select className = 'dropDown' name = 'dropDown' value = {language} onChange = {handleChange}>
                                <option value ="Bri'ish">Bri'ish</option>
                                <option value = 'Canadian'>Canadian</option>
                                <option value = 'Worse Canadians'>American</option>
                                <option value = 'Australian'>Marmite Down Under Crikey</option>
                            </select>
                        </div>
                    </label>
                    <hr className = 'editHr2'></hr>
                    <h2 className = 'autoPlay'>Autoplay Controls</h2>
                    <label className = 'edit1'>
                        <input 
                            className = 'check'
                            type = 'checkbox'
                            name = 'Autoplay'
                            checked = {Autoplay}
                            onChange = {handleChange}
                        />
                        <span className = 'autoplay1'>Autoplay next episode in series on all devices.</span>
                    </label>
                    <label className = 'edit2'>
                        <input 
                            className = 'kid'
                            type = 'checkbox'
                            name = 'AutoplayPreview'
                            checked = {AutoplayPreview}
                            onChange = {handleChange}
                        />
                        <span className = 'autoplay2'>Autoplay previews while browsing on all devices.</span>
                    </label>
                    <hr className = 'hr3'></hr>
                    <input 
                        type = 'submit'
                        value = 'Save'
                        className = 'editSave'
                    />
                </form>
                <form onSubmit = {handleCancel}>
                    <input 
                        type = 'submit'
                        value = 'Cancel'
                        className = 'editCancel'
                    />
                    </form>
                <form onSubmit = {handleDelete}>
                    <input 
                        type = 'submit'
                        value = 'Delete Profile'
                        className = 'editDelete'
                    />
                </form>
            </div>

        </div>
    )
}

export default EditPage