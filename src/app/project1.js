import React , {useState, useEffect, useRef} from "react";
import superagent from "superagent";
import { io } from "socket.io-client";
const Chat = () => {

    const [searchField, setSearchField] = useState('');
    const [results, setResults] = useState([])
    const [chat, setChat] = useState([])

    // require('dotenv').config();
    const HOST = process.env.REACT_APP_HOST || "http://localhost:3004"
    const socket = io.connect(`${HOST}/gifs`);
    const gifAPI = process.env.REACT_APP_GIF_API
    // useEffect(()=>{
    //     socket.emit('join', { user: "admin" })
    // })

    useEffect(()=> {
        socket.on('message', payload => {
            //Updates the chat message list
            console.log("GETTING MESSAGE: " , payload.message)
            console.log("CHAT: ", chat);
            setChat([...chat, {...payload.message} ])
        });
    })
    
    useEffect(() => {
        
            let rez = []
            let url = `https://api.giphy.com/v1/gifs/trending?limit=3`
            superagent.get(url)
                .query({ api_key: `${gifAPI}` })
                .then(function (results) {
                    let base = results.body.data
                    base.forEach(el => {
                        rez.push({ image: el.images.fixed_width.url, id: el.id, title: el.title })
                    })

                    setResults(arr => [...rez])
                })
                .catch(function (error) {
                    console.log('Womp Womp', error);
                    // res.status(500).send('we messed up');
                })
    }, [])

    const searchGif = () => {
        let rez = []
            let url = `https://api.giphy.com/v1/gifs/search?q=${searchField}&limit=3`
            superagent.get(url)
                .query({ api_key: `${process.env.REACT_APP_GIF_API}` })
                .then(function (results) {
                    let base = results.body.data
                    base.forEach(el => {
                        rez.push({ image: el.images.fixed_width.url, id: el.id, title: el.title })
                    })

                    setResults(arr => [...rez])
                })
                .catch(function (error) {
                    console.log('Womp Womp', error);
                    // res.status(500).send('we messed up');
                })
    }


        //set ref to the end of the chat window
        const messagesEndRef = useRef(null)
        const scrollToBottom = () => {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
        }

        useEffect(() => {
            scrollToBottom()
        }, [chat])

        const socketSend = (e) => {
            // e.prevendDefault();
            console.log("READYING: ", { image: e.target.src, id: e.target.id, title: e.target.alt } );
            socket.emit('message', { message: { image: e.target.src, id: e.target.id, title: e.target.alt } })
            // setChat([...chat, { message: { image: e.target.src, id: e.target.id, title: e.target.alt } } ])
        }

        // const chatLog = () => {

        //     return (
        //         <div>
        //             {chat.map( chit => (<img src={chit.image} className="gif-result" key={chit.id} alt={chit.title} />) )}
        //             {/* <div ref={messagesEndRef} /> */}
        //         </div>
        //     )
        // }

    return (
        <div className="chat-container">
            <div className="chat-window">
            {chat &&
            chat.map( chit => (<img src={chit.image} className="gif-result" key={chit.id} alt={chit.title} />) )}
            <div ref={messagesEndRef} />
            </div>
            <div className="input-field">
                <input value={searchField} onChange={(e) => setSearchField(e.target.value)}></input>
                <button onClick={searchGif}>gif me</button>
                <div clasName="gif-array">
                    {results &&
                    results.map(el => (<img src={el.image} className="gif-result" alt={el.title} key={el.id} onClick={(e)=> socketSend(e)} />))
                    }
                </div>
            </div>

        </div>
    )
}

export default Chat;