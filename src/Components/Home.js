import React from 'react'
import {Redirect} from 'react-router'
import Nav from './Nav'
import Show from './Helpers/Show'
import data from './Helpers/data'

function Home(props){
    const info = data()
    if(props.profile === undefined){
        return <Redirect to = '/'/>
    }
    return(
        <div>
            <Nav src = {props.profile.src} profiles = {props.profiles} onClick = {props.change}></Nav>
            <div>
                <Show props = {info[0]} />
            </div>
        </div>
    )
}

export default Home