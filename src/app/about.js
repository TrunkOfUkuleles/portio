import React from 'react';
import Stack from './Components/techStack';


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

                const jobCard = (props) => {
                    return (
                            <div className="job-card">
                                <div className="job-title">{props.Title}</div>
                                <div className='job-company'>{props.Company}</div>
                                <div className='job-time'>{props.Period}</div>
                                <div className='job-detail-box'>
                                    <li className="job-detail detail-1">{props.Details[0]}</li>
                                    <li className="job-detail detail-2">{props.Details[1]}</li>
                                    <li className="job-detail detail-3">{props.Details[2]}</li>
                                </div>
                            </div>
                    )
                }


                const timeline = () => {

                    const jobs = [{Company: "Various", Period: "2021 - ", Title: "Web Developer", 
                                  Details: ["Full Stack Development", "MERN", "Wordpress/Shopify Theme editing"] },
                                  {Company: "Taisei Lamick USA", Period: "2016 - 2019", Title: "Sales Representative", 
                                  Details: ["B2B industrail packaging equipment sales", "helped launch West Coast office for Japanese company", "Acted as sales along with technical support"] },
                                  {Company: "Various", Period: "2014 - 2016", Title: "Online Marketing Manager", 
                                  Details: ["Online Marketing Optomization", "Website design and optomization", "Amazon store maintenance"] },
                                  {Company: "Captain Marketing", Period: "2013", Title: "Social Media marketing Department", 
                                  Details: ["Managed a team of 5 people", "trained managers on process and strategy of online marketing", "Acted as customer contect for issues and technical explinations"] },
                    ]
                    return (

                        <div>
                            {jobs.map(jo=>jobCard(jo))}
                        </div>
                    )
                }

    return (
        <div className="about-me">
            <div className='about-section'>
            <div className="picture-box">
            <img type="jpg" src="../staff1.jpg" width="200" height="200" style={{"borderRadius": "100px"}}/>
            </div>
            <div className="about-talk">    

                Full-Stack web developer looking to build connections. Programming foundation in MERN Stack development with an emphasis on taking the friction
                out of using technology.




            </div>
            </div>

            <Stack bits={stacks} />
            {/* <div className='tech-stack-container'>
                {stacks.map(badgee=> badge(badgee))}
            </div> */}
            {/* {timeline()} */}
            <div className="social-box">
                <div className="git-box">

                </div>
                <div className="linked-box">
                {/* <img type="svg" src="../iconmonstr-linkedin-3.svg" width="100" height="100" /> */}
                {/* <img type="svg" src="../iconmonstr-github-3.svg" width="100" height="100" /> */}
                
                </div>
            </div>
        </div>

)
}

export default About;




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