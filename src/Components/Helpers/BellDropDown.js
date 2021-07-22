import React from 'react'
import office from '../../Assets/office.png'
import netflix from '../../Assets/netflix.png'
import '../../Styles/Nav.css'

function BellDropDown(){
    return(
        <div className = 'bellDropDown'>
            <hr className = 'whiteDivider'></hr>
            <div>
                <img src = {office} alt = 'office' className = 'office'></img>
                <h2 className = 'rewind'>"Rewatch your favorite moments</h2>
                <h2 className = 'robot'>See what you've watched"</h2>
                <h4 className = 'bruh'>3 weeks ago</h4>
            </div>
            <hr className = 'divider'></hr>
            <div>
                <img src = {netflix} alt = 'netflixWeirdImage' className = 'office'></img>
                <h2 className = 'rewind2'>"Top 10 Today: Canada</h2>
                <h2 className = 'robot2'>Watch them all"</h2>
                <h4 className = 'bruh2'>1 month ago</h4>
            </div>
        </div>
    )
}

export default BellDropDown