import React , { useState } from 'react';
import Chat from './project1.js';

const Projects = () => {

    const [select, setSelect] = useState('')


    return (
        <div className='project-container p1-inner'>
            <div className='project-inner'>
                <div className={`chat-title ${select==="p1"?"title-selected":"title-unselected"}`} onClick={()=>setSelect('p1')}>Project Container</div>
            </div>
            <div className={`project-inner chat-inner ${select==="gifsms"?"selected":""}`} onClick={()=>setSelected('gifsms')}>
                <div className={`chat-title ${select==="gifsms"?"title-selected":"title-unselected"}`} onClick={()=>{setSelect('gifsms')}} >GIFSMS</div>
                {select==="gifsms" && <Chat/> }
            </div>
            <div className='project-inner p2-inner'>
                <div className={`chat-title ${select==="p2"?"title-selected":"title-unselected"}`} onClick={()=>setSelect('p2')}>Project Container</div>
            </div>
        </div>

    )
}

export default Projects;