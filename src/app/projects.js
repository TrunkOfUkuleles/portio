import React , { useState } from 'react';
import Chat from './project1.js';

const Projects = () => {

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
            <div className={`project-inner p2-inner ${select==="p2"?"selected":""}`}>
                <div className={`chat-title ${select==="p2"?"":"title-unselected"}`} onClick={()=>setSelect('p2')}>Project Container</div>
            </div>
        </div>

    )
}

export default Projects;