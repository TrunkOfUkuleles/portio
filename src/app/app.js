import React , { useState , useEffect }from 'react';
import Header from './header.js';
import Footer from './footer.js';
import About from './about.js'
import Projects from './projects.js';
import '../style.css';

const App = () => {

    const [focus, setFocus] = useState('about')
    const [highlighted, setHighlighted] = useState(false)
    const tester = (e) => {
        console.log(e, highlighted)
        setHighlighted(e)
    }

    return (
        <div className='main'>
            <Header change={setFocus} highlighted={highlighted}/>

            <div className="main-box grid-bg ba-grid anim" >
            {/* <div className="grid-bg ba-grid anim"> */}
                {/* <div className="inner"></div> */}
                {focus=='about' && <About />}
                {focus==='projects' && <Projects hl={tester}/>}
            <Footer />
            </div>
            {/* </div> */}
            
        </div>
    )
}

export default App;