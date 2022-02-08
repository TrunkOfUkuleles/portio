import React , { useState , useEffect }from 'react';
import Header from './header.js';
import Footer from './footer.js';
import About from './about.js'
import Chat from './project1';
import '../style.css';

const App = () => {

    const [loading, setLoading] = React.useState(true);
    const [focus, setFocus] = React.useState('home')



    return (
        <div className='main'>
            <Header change={setFocus} />

            <div className="main-box" style={{"border": "2px solid green", "minHeight": "2em"}}>
                
                {focus=='about' && <About />}
                {focus==='projects' && <Chat />}
            </div>
            
            <Footer />
        </div>
    )
}

export default App;