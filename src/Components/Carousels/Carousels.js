
import React from 'react';
import '../../App.css'
import {Carousel} from 'antd';
import caro1 from "../../Images/Carousel/CARO 2.jpg";
import caro2 from "../../Images/Carousel/CARO 1.jpg";
import caro3 from "../../Images/Carousel/CARO 3.jpg";
import caro4 from "../../Images/Carousel/CARO 4.jpg";


const contentStyle= {
    height: '500px',
    width: '100%',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',

};

const Carousels = () => {
    return(
        <div className="slidein">
            <Carousel
                autoplay={true}
                >
                <div className="carousel-img-wrapper">

                    <img loading="lazy" style={contentStyle} src={caro1} />
                    {/*<div className="carousel-text">*/}
                    {/*    <h3>Slide 1</h3>*/}

                    {/*    <p>Some text content for slide 1</p>*/}
                    {/*</div>*/}
                </div>
                <div className="carousel-img-wrapper">
                    <img loading="lazy" style={contentStyle} src={caro2}/>
                </div>
                <div className="carousel-img-wrapper">
                    <img loading="lazy" style={contentStyle} src={caro3}/>
                </div>
                <div className="carousel-img-wrapper">
                    <img loading="lazy" style={contentStyle} src={caro4}/>
                </div>
            </Carousel>

        </div>
    )
}

export default Carousels;