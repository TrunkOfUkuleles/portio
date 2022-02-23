import React , { useState } from 'react';
import ProjectInfo from './Components/projectInfo';


const Tracker = ({hl}) => {

    const [] = useState()

    const daStook = [
        "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
        "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
        "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
        "https://img.shields.io/badge/superagent-430098?style=for-the-badge&logo=superagent&logoColor=white",
        "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white",
        "./can_logo.png"
      ]
    
      const examples = ['../CAN-screen.png', '../covidtrack2.png', '../covidtrack1.png']

    //   const highlighter = () => {
        

    //     return (
    //         <button className="highlight-button" style={{"borderRadius":"15px", "backgroundColor":"blue", }}onMouseOver={() => hl(true)} onMouseOut={() => hl(false)}>See Above</button>
    //     )
    //   }

 return (
    <div className="tracker-container">
        <ProjectInfo desc="Started as a small project thinking about Covid numbers in the US. Wanted to have a base I could build on to aggrigate 
        the information I cared about." stack={daStook} pics={examples} />
        <button className="highlight-button" style={{"borderRadius":"15px", "backgroundColor":"blue", "cursor":"ne-resize", "width":"7rem", "marginTop":"2rem"}}onMouseOver={() => hl(true)} onMouseOut={() => hl(false)}>See Above</button>
    {/* <div className='tracker-explaination'>
    </div> */}
    </div>

 )   
}

export default Tracker;