import React from 'react';


const About = () => {

const stacks =   [ 
                "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
                "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
                "https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white",
                "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=git&logoColor=white",
                "https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white",
                "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
                "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
                "https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white",
                "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white",
                "https://img.shields.io/badge/Material-UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white",
                "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
                "https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white",
                "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white",
                "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white",
                "https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white",
                "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
                "https://img.shields.io/badge/AmazonAWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white",
                "https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white",
                "https://img.shields.io/badge/Auth0-EB5424?style=for-the-badge&logo=auth0&logoColor=white",
                "https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white",
                "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white",
                "https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white",
                "https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white",
                "https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white",
                "https://img.shields.io/badge/Wix-0C6EFC?style=for-the-badge&logo=wix&logoColor=white",
                "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white",
                "https://img.shields.io/badge/Insomnia-5849BE?style=for-the-badge&logo=insomnia&logoColor=white",
                "https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=white",
                "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
                "https://img.shields.io/badge/AdobePhotoShop-31A8FF?style=for-the-badge&logo=adobephotoshop&logoColor=white"
                ]

                const badge = (info) => {
                    return (
                        <img src={info} alt={`badge${info}`} />
                    )
                }

    return (
        <div className="about-me">
            <div className="picture-box">
            <img type="jpg" src="../staff1.jpg" width="200" height="200" style={{"border-radius": "90px"}}/>
            </div>
            <div className="about-talk">    

                I began My career in digital marketing, building Social media Marketing departments and helping companies build their olnly presance and strategy.
                I frequently had to act as the contact point between the engineering team, and the clients. This gave me an appretiation from early on for the value
                in communication. By taking a step back and looking at the ultimate desires/needs of the client next to the technical constraints to work around we
                would avoid a lot of revisions. From there I did a few years in B2B indsutrial equpment sales. While not exactly what I specialized in, I found another
                industry where the intersection of technology and commercial needs came with far lower margins. I would routinely have to familiarize myself with 
                paripheral systems and machinery to ensure the installation and success of our liquid packaging system. 

                In leaving sales I knew I wanted to pivot to programming. Returning to focus on online work gave me an opportunity to refocus my career on the thing that really drives me - the growth of technology and how it 
                shapes the way we communicate. Even looking at the last few years in web development on Javascript alone, the platform continues to surprise. As the bariers 
                to more complex functions continue to decline, the way we interact with the net and each other is going to shift drastically. Starting on a MERN stack base, 
                I am looking to find a place to continue to develope my development career towards finding new ways to make a connection with people. 



                Tech stack: 
                MERN
                MongoDB, 
                Express.js, 
                React
                Node, 
                ES6, 
                Redux,
                Javascript,
                mongoose,
                Python, 
                socket.io, 
                SQL, 
                noSQL,
                HTML,
                PostgreSQL, 
                nodemon,
                netlify,
                git,
                heroku,
                SASS,
                CSS,
                TDD,
                swagger,
                jest,
                OOP / Functional,
                AUTH0,
                AWS services (s3, lambdas),
                REST / API development


                Tech To-Dos:
                React Native
                Vue
                
                {/* progressive rendering
                progressive enhancement
                graceful degradation
                Flash of Unstyled Content
                CORS
                cookies, session storage, and local storage
                HTML5
                <script>, <script async> and <script defer></script>
                srcset
                floats
                resetting vs normalizing CSS
                clearing techniques
                @media
                "gotchas" for writing efficient CSS
                box-sizing: border-box; 
                relative, fixed, absolute and statically
                translate()
                clearfix
                px, em and rem
                pseudo class
                null, undefined or undeclared
                anonymous functions
                function Person(){}, var person = Person(), and var person = new Person()
                let, var or const
                ES6 Template Literals
                spread syntax vs rest syntax
                immediately invoked function expression 
                Long-Polling, Websockets and Server-Sent Events
                HTTP methods
                Virtual DOM */}



            </div>
            <div className="about-talk">
                email: Julien.Needs.A.Job@Gmail.com
            </div>
            <div className='tech-stack-container'>
                {stacks.map(badgee=> badge(badgee))}
            </div>
            <div className="social-box">
                <div className="git-box">

                </div>
                <div className="linked-box">
                {/* <img type="svg" src="../iconmonstr-linkedin-3.svg" width="100" height="100" /> */}
                {/* <img type="svg" src="../iconmonstr-github-3.svg" width="100" height="100" /> */}
                
                </div>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgMGgtMTRjLTIuNzYxIDAtNSAyLjIzOS01IDV2MTRjMCAyLjc2MSAyLjIzOSA1IDUgNWgxNGMyLjc2MiAwIDUtMi4yMzkgNS01di0xNGMwLTIuNzYxLTIuMjM4LTUtNS01em0tMTEgMTloLTN2LTExaDN2MTF6bS0xLjUtMTIuMjY4Yy0uOTY2IDAtMS43NS0uNzktMS43NS0xLjc2NHMuNzg0LTEuNzY0IDEuNzUtMS43NjQgMS43NS43OSAxLjc1IDEuNzY0LS43ODMgMS43NjQtMS43NSAxLjc2NHptMTMuNSAxMi4yNjhoLTN2LTUuNjA0YzAtMy4zNjgtNC0zLjExMy00IDB2NS42MDRoLTN2LTExaDN2MS43NjVjMS4zOTYtMi41ODYgNy0yLjc3NyA3IDIuNDc2djYuNzU5eiIvPjwvc3ZnPg=="></img> */}
            </div>
        </div>

    )
}

export default About;