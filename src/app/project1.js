import React, { useState, useEffect, useRef } from "react";
import superagent from "superagent";
import { io } from "socket.io-client";
import ProjectInfo from './Components/projectInfo';
const Chat = () => {
  const [searchField, setSearchField] = useState("");
  const [results, setResults] = useState([]);
  const [chat, setChat] = useState([]);

  // require('dotenv').config();
  const HOST = process.env.REACT_APP_HOST || "http://localhost:3004";
  const socket = io.connect(`${HOST}/gifs`);
  const gifAPI = process.env.REACT_APP_GIF_API;
  // useEffect(()=>{
  //     socket.emit('join', { user: "admin" })
  // })

  useEffect(() => {
    socket.on("message", (payload) => {
      //Updates the chat message list
      console.log("GETTING MESSAGE: ", payload.message);
      console.log("CHAT: ", chat);
      setChat([...chat, { ...payload.message }]);
    });
  });



  useEffect(() => {
    let rez = [];
    let url = `https://api.giphy.com/v1/gifs/trending?limit=3`;
    superagent
      .get(url) 
      .query({ api_key: `${gifAPI}` })
      .then(function (results) {
        let base = results.body.data;
        base.forEach((el) => {
          rez.push({
            image: el.images.fixed_width.url,
            id: el.id,
            title: el.title,
          });
        });

        setResults((arr) => [...rez]);
      })
      .catch(function (error) {
        console.log("Womp Womp", error);
        // res.status(500).send('we messed up');
      });
  }, []);


  const daStook = [
    "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
    "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
    "https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white",
    "https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white",
    "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
    "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
    "https://img.shields.io/badge/Auth0-EB5424?style=for-the-badge&logo=auth0&logoColor=white",
    "https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white",
    "https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white",
    '../Poweredby_100px_Badge.gif'
  ]

  const exaples = ['../pics/gifs1.png', '../pics/gifs2.png', '../pics/gifs3.png']

  const searchGif = () => {
    let rez = [];
    let url = `https://api.giphy.com/v1/gifs/search?q=${searchField}&limit=3`;
    superagent
      .get(url)
      .query({ api_key: `${process.env.REACT_APP_GIF_API}` })
      .then(function (results) {
        let base = results.body.data;
        base.forEach((el) => {
          rez.push({
            image: el.images.fixed_width.url,
            id: el.id,
            title: el.title,
          });
        });

        setResults((arr) => [...rez]);
      })
      .catch(function (error) {
        console.log("Womp Womp", error);
        // res.status(500).send('we messed up');
      });
  };

  //set ref to the end of the chat window
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  const socketSend = (e) => {
    // e.prevendDefault();
    console.log("READYING: ", {
      image: e.target.src,
      id: e.target.id,
      title: e.target.alt,
    });
    socket.emit("message", {
      message: { image: e.target.src, id: e.target.id, title: e.target.alt },
    });
    // setChat([...chat, { message: { image: e.target.src, id: e.target.id, title: e.target.alt } } ])
  };

  const enter = (e) => {
    if (e.key === "Enter") {
      searchGif();
    }
  };

  return (
    <div className="chat-container">
      <div className="chatter">
        <div className="chat-window">
          <h3 className="chat-title" style={{"fontFamily":"KoHo, sans-serif", "color":"#0E297A", "fontSize":""}}>Chat</h3>
          {chat &&
            chat.map((chit) => (
              <img
                src={chit.image}
                className="gif-message"
                key={chit.id}
                alt={chit.title}
              />
            ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="input-field">
          <div className="inputs">
            <input
              value={searchField}
              onChange={(e) => setSearchField(e.target.value)}
              onKeyDown={(e) => enter(e)}
            ></input>
            <button onClick={searchGif}>gif me</button>
          </div>
          <div className="gif-array">
            {results &&
              results.map((el) => (
                <img
                  src={el.image}
                  className="gif-result"
                  alt={el.title}
                  key={el.id}
                  onClick={(e) => socketSend(e)}
                />
              ))}
          </div>
        </div>
      </div>

      <ProjectInfo desc={`A project to explore Socket.io systems and how
        those socket subscription systems can be used. Utilized Giphy API and 
        Auth0 integration to add usability to an app designed to make you think about how we communicate.`} 
        stack={daStook} pics={exaples} link={["GIFSMS","https://loving-kepler-ecd79b.netlify.app/"]}/>
      {/* <div className="chat-desc">
        A project to explore Socket.io systems and how
        those socket subscription systems can be used. Utilized Giphy API and 
        Auth0 integration to add usability to an app designed to make you think about how we communicate.
        {
          <a
            style={{
              "font-family": "KoHo",
              "font-size": "1.5vw",
              "color": "#0E297A",
            }}
            className="gifsms-link"
            href="https://loving-kepler-ecd79b.netlify.app/"
          >
            {" "}
            GIFSMS
          </a>
        }
      </div>
      <Stack bits={daStook} /> */}
    </div>
  );
};

export default Chat;
