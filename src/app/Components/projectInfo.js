import React from 'react';
import Stack from './techStack';
import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from 'react-bootstrap/esm/CarouselItem';

const ProjectInfo = (props) => {


    function clicky(num) {
        const picSet = [...props.pics]
        const ind = num
        const selected = picSet[ind]

        const up = () => {
            if (ind === 2){
                ind=0
                selected=picSet[ind]
            }
            else {
                ind=ind++
                selected=picSet[ind]
            }
        }
        
        return (
            <div visible={false} className='pic-module  ' >
                <img src={selected} />
                <div className='pic-control'>
                <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
                <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </div>
            </div>
        )
    }


    console.log("in projectInfo", props);
    return (
        <div className='project-info-container'>
            <div className='project-info-info'>
                <div className='project-info-info-in'>
                    <div className='project-info-desc'>{props.desc}</div>
                    {props.link ? <a className={`${props.link[0]}-link`} href={props.link[1]} target="_blank" rel="noreferrer noopener">{props.link[0]}</a> : ""}
                </div>
                <Stack bits={props.stack} />
            </div>

            <Carousel>
                <Carousel.Item>
                    <img className="pic-carousel-pic d-block w-100" alt="first pic" src={props.pics[0]} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="pic-carousel-pic d-block w-100" alt="second pic" src={props.pics[1]} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="pic-carousel-pic d-block w-100" alt="third pic" src={props.pics[2]} />
                </Carousel.Item>
            </Carousel>

        </div>
    )
}

export default ProjectInfo;