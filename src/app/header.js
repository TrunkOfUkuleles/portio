import React , { useState } from 'react';
import Cobid from './cobid.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVirus } from '@fortawesome/free-solid-svg-icons';

function Header({change, highlighted}) {

    // const logo = require("../logo.svg")
    const [openForecast, setOpenForecast] = useState(false)
    const [wraninglevel, setWarningLevel] = useState(0)

    return (
        <div className="header-background">
        <div className="header-container">
            <div className="logo-container"><img type="svg" src="../resizeLogo.svg" width="50" height="60" /></div>
                <div className='text navs'>
                <div className="navs about" value="about" onClick={(e)=>{change('about')}}>About Me</div>
                <div className="navs projects" value="projects" onClick={(e)=>{change('projects')}}>Projects</div>
                </div>
            <div className={`forecast ${openForecast ? "open" : "closed"} ${highlighted ? "highlighted" : ""} covid-forecast warning-color-${wraninglevel}`}>
                { openForecast ? <Cobid className="covid-widget" warn={setWarningLevel} /> : <></> }
                <FontAwesomeIcon className="v-icon" icon={faVirus} onClick={()=> setOpenForecast(!openForecast)} />
            </div>
        </div>
        </div>
    )
}

export default Header;