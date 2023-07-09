// import carousel1 from '../../Images/Carousel/_SSK8762.jpg'
// import carousel2 from '../../Images/Carousel/P7.jpg'
// import carousel3 from '../../Images/Carousel/dji_fly_20230309_105838_945_1678341916801_photo.jpg'
// import carousel4 from '../../Images/Carousel/_SSK9865.jpg'
import React, {useRef} from 'react';
import {CaretRightOutlined, CaretLeftFilled, LeftCircleTwoTone} from '@ant-design/icons'
import '../../App.css'
import {Button, Carousel} from 'antd';


const contentStyle= {
    height: '500px',
    width: '100%',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',

};

const Carousels = () => {
    // https://drive.google.com/file/d/1pbm6EyZ_bQDOaj3UQmB1VPRiXzjjhO7Y/view?usp=sharing
    const imageUrl = "https://drive.google.com/uc?id=1pbm6EyZ_bQDOaj3UQmB1VPRiXzjjhO7Y";
    return(
        <div className="slidein">
            <Carousel
                // arrows {...settings}
                autoplay={true}
                // nextArrow={<NextArrow />}
                // PreArrow={<PrevArrow />}
                // dotPosition="none"
                // effect={"fade"}
                >
                <div className="carousel-img-wrapper">

                    <img loading="lazy" style={contentStyle} src="https://drive.google.com/uc?id=1dBRn1oWMA_hL1nFJrLcrtEsGWs5gufKw" />
                    {/*<div className="carousel-text">*/}
                    {/*    <h3>Slide 1</h3>*/}

                    {/*    <p>Some text content for slide 1</p>*/}
                    {/*</div>*/}
                </div>
                <div className="carousel-img-wrapper">
                    <img loading="lazy" style={contentStyle} src="https://drive.google.com/uc?id=1lhnfWDJL-Sv-EFT47Klwci3Ub33nO-ry"/>
                </div>
                <div className="carousel-img-wrapper">
                    <img loading="lazy" style={contentStyle} src="https://drive.google.com/uc?id=1B-gqPbF3nZ6o3m7CX46M_698q0e5LaEz"/>
                </div>
                <div className="carousel-img-wrapper">
                    <img loading="lazy" style={contentStyle} src="https://drive.google.com/uc?id=1qhuRQ0na3ipq4HZTJOoY4GRkAkOStQz0"/>
                </div>
            </Carousel>

        </div>
    )
}

export default Carousels;