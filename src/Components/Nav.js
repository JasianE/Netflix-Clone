import React, {useState, useRef} from 'react'
import { Link } from 'react-router-dom' 
import ProfileDropDown from './Helpers/ProfileDropDown'
import BellDropDown from './Helpers/BellDropDown'
import image from '../Assets/image.png'
import tacobell from '../Assets/tacobell.png'
import triangle from '../Assets/triangle.png'
import '../Styles/Nav.css'

function Nav(props){
    const [selected, setSelected] = useState('home')
    const [displayBell, setDisplayBell] = useState(false)
    const [displayDropDown, setDisplayDropDown] = useState(false)
    const bellRef = useRef(null)
    const profileRef = useRef(null)

    function handleMouseEnter(e){
        const name = e.target.className
        let whichOne = name.indexOf('profile')
        if(whichOne === - 1){
            setDisplayBell(true)
        }
        else{
            setDisplayDropDown(true)
        }
    }
    function handleMouseLeave(){
        setDisplayBell(false)
        setDisplayDropDown(false)
    }
    return(
        <nav className = 'navbar'>
            <img className = 'navImg' src='https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=8' alt = 'netflix'></img>
            <ul>
                <Link className = 'linkStyle' to = '/home' onClick={() => {setSelected('home')}}>
                    <li className = {selected === 'home' ? 'selected1' : 'links1'}>Home</li>
                </Link>
                <Link className = 'linkStyle' to = '/shows' onChange = {() => {setSelected('shows')}}>
                    <li className = {selected === 'shows' ? 'selected2' : 'links2'}>TV Shows</li>
                </Link>
                <Link className = 'linkStyle' to = '/movies' onChange = {() => {setSelected('movies')}}>
                    <li className = {selected === 'movies' ? 'selected3' : 'links3'}>Movies</li>
                </Link>
                <Link className = 'linkStyle' to = '/popular' onChange = {() => {setSelected('popular')}}>
                    <li className = {selected === 'popular' ? 'selected4' : 'links4'}>New & Popular</li>
                </Link>
                <Link className = 'linkStyle' to = '/mylist' onChange = {() => {setSelected('mylist')}}>
                    <li className = {selected === 'mylist' ? 'selected5' : 'links5'}>My List</li>
                </Link>
            </ul>
            <img className = 'search' src = {image} alt = 'magnifying glass'></img>
            <div className = 'bellDiv' ref = {bellRef} onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseLeave}>
                <img className = 'bell' src = {tacobell} alt = 'bell'></img>
                <img className = 'bellTriangle' src = {triangle} alt = 'triangle'></img>
                {displayBell ? <BellDropDown /> : null}
            </div>
            <div className = 'profile3Div' ref = {profileRef} onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseLeave}>
                <img className = 'profile3' src = {props.src} alt = 'Profile'></img>
                <img className = 'profileTriangle2' src = {triangle} alt = 'small triangle'></img>
                <img className = 'profileTriangle' src = {triangle} alt = 'triangle'></img>
                {displayDropDown ? <ProfileDropDown profiles = {props.profiles} onClick = {props.onClick}/> : null
                }
            </div>
        </nav>
    )
}

export default Nav