
import React from 'react';
import '../../App.css'
import {Button, Carousel} from 'antd';
import caro1 from "../../Images/Carousel/CARO 2.jpg";
import caro2 from "../../Images/Carousel/CARO 1.jpg";
import caro3 from "../../Images/Carousel/CARO 3.jpg";
import caro4 from "../../Images/Carousel/CARO 4.jpg";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";


const contentStyle= {
    // height: '500px',
    // width: '100%',
    // color: '#fff',
    // lineHeight: '160px',
    // textAlign: 'center',

};

const Carousels = () => {
    const carouselRef = React.useRef();

    const goToPrev = () => {
        carouselRef.current.prev();
    };

    const goToNext = () => {
        carouselRef.current.next();
    };
    return(
        <div className="slidein">
            <Carousel
                className="Top-carousel"
                autoplay={true}
                autoplaySpeed={2000}
                dots={false}
                ref={carouselRef}
                effect={"fade"}
                // waitForAnimate={true}
                >
                <div className="carousel-img-wrapper">

                    <img loading="lazy" className="carousel-image" style={contentStyle} src={caro1} />
                    {/*<div className="carousel-text">*/}
                    {/*    <h3>Slide 1</h3>*/}

                    {/*    <p>Some text content for slide 1</p>*/}
                    {/*</div>*/}
                </div>
                <div className="carousel-img-wrapper">
                    <img loading="lazy" className="carousel-image" style={contentStyle} src={caro2}/>
                </div>
                <div className="carousel-img-wrapper">
                    <img loading="lazy" className="carousel-image" style={contentStyle} src={caro3}/>
                </div>
                <div className="carousel-img-wrapper">
                    <img loading="lazy" className="carousel-image" style={contentStyle} src={caro4}/>
                </div>
            </Carousel>
            <div className="carousel-buttons">

            <LeftOutlined className="prev-button" onClick={goToPrev}>Previous</LeftOutlined>
            <RightOutlined className="next-button" onClick={goToNext}>Next</RightOutlined>
            </div>
        </div>
    )
}

export default Carousels;