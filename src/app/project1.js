import React , {useState, useEffect, useRef} from "react";
import superagent from "superagent";

const Chat = () => {

    const [searchField, setSearchField] = useState('');
    const [results, setResults] = useState([])
    const [chat, setChat] = useState([])

    const io = require('socket.io-client');
    // require('dotenv').config();
    const HOST = process.env.REACT_APP_HOST || "http://localhost:3004"
    const socket = io.connect(`${HOST}/gifs`);

    // useEffect(()=>{
    //     socket.emit('join', )
    // },[])

    useEffect(()=> {
        socket.on('message', payload => {
            //Updates the chat message list
            setChat([...arr, { message: payload.message }])
        });
    })
    
    useEffect(() => {
        
            let rez = []
            let url = `https://api.giphy.com/v1/gifs/trending?limit=3`
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
            e.prevendDefault();
            socket.emit('message', { message: { image: e.target.src, id: e.target.id, title: e.target.alt } })
            setChat([...chat, { message: { image: e.target.src, id: e.target.id, title: e.target.alt } } ])
        }

        const chatLog = () => {

            return (
                <div>
                    {chat.map(chit => <>
                    <div key={chit.id} className="notification">
                        <h4>
                            {chit}
                        </h4>
                    </div>
                    <div ref={messagesEndRef} />
                </>)}
                </div>
            )
        }

    return (
        <div className="chat-container">
            <div className="chat-window">
            {chatLog}
            </div>
            <div className="input-field">
                <input value={searchField} onSubmit={searchGif} onChange={(e) => setSearchField(e.target.value)}></input>
                <button>gif me</button>
                <div>
                    {results &&
                    results.map(el => (<img src={el.image} alt={el.title} id={el.id} key={el.id} onClick={(e)=> socketSend(e)} />))
                    }
                </div>
            </div>

        </div>
    )
}

export default Chat;