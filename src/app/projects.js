import React , { useState } from 'react';
import Chat from './project1.js';
import Tracker from './project2.js';

const Projects = (props) => {

    const [select, setSelect] = useState('')


    return (
        <div className='project-container'>
            <div className={`project-inner p1-inner ${select==="p1"?"selected":""}`}>
                <div className={`chat-title ${select==="p1"?"":"title-unselected"}`} onClick={()=>setSelect('p1')}>Project Container</div>
            </div>
            <div className={`project-inner chat-inner ${select==="gifsms"?"selected":""}`} >
                <div style={{"font-family": 'KoHo'}} className={`chat-title ${select==="gifsms"?"":"title-unselected"}`} onClick={()=>{setSelect('gifsms')}} >GIFSMS</div>
                {select==="gifsms" && <Chat/> }
            </div>
            <div className={`project-inner tracker-inner ${select==="tracker"?"selected":""}`}>
                <div className={`chat-title ${select==="tracker"?"":"title-unselected"}`} onClick={()=>setSelect('tracker')}>Covid Tracker</div>
                {select==="tracker" && <Tracker hl={props.hl} />}
            </div>
        </div>

    )
}

export default Projects;