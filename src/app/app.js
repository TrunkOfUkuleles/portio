import React , { useState }from 'react';
import Header from './header.js';
import Footer from './footer.js'

const App = () => {

    const [focus, setFocus] = React.useState('home')


    return (
        <div className='main' style={{"display": "grid" , "justifyItems": "center" }}>
            <Header />
            <div className="main-box" style={{"border": "2px solid green", "minHeight": "2em"}}>
                {
                    focus === "home" 
                    ? <text>main bit</text>
                    : <text>about me</text>
                }

            </div>
            <Footer />
        </div>
    )
}

export default App;