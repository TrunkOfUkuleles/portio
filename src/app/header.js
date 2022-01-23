import React , { useState } from 'react';
import Cobid from './cobid.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVirus } from '@fortawesome/free-solid-svg-icons';

function Header() {

    // const logo = require("../logo.svg")
    const [openForecast, setOpenForecast] = React.useState(false)
    const [wraninglevel, setWarningLevel] = React.useState(0)

    return (
        <div className="header-background">
        <div className="header-container">
            <div className="logo-container"><img type="svg" src="../resizeLogo.svg" width="50" height="60" /></div>
            <div className="navs about">About Me</div>
            <div className="navs projects">Projects</div>
            <div className="navs contact">Contact</div>
            <div className={`forecast ${openForecast ? "open" : "closed"} covid-forecast warning-color-${wraninglevel}`}>
                { openForecast ? <Cobid warn={setWarningLevel} /> : <></> }
                <FontAwesomeIcon className="v-icon" icon={faVirus} onClick={()=> setOpenForecast(!openForecast)} />
            </div>
        </div>
        </div>
    )
}

export default Header;