import React, {useEffect, useRef, useState} from 'react';
import { Row, Col, Button } from 'antd';
import '../../App.css';
import axios from 'axios'
// import video from "../../Images/WhatsApp Video 2023-04-19 at 3.26.16 PM.mp4"


const Video = () => {
    // const videoRef = useRef(null);
    const videoUrl = "https://www.youtube.com/watch?v=zxQ41i8";
    const handleWatch = () => {
        window.location.href = '/films';

    };

    return (
            <Row  gutter={[16, 16]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                    {/* Video Player */}
                    {/*<video src="https://www.youtube.com/watch?v=zxQ41i8" controls controlsList="nodownload" style={{ width: '100%' }} />*/}
                    <iframe loading="lazy" className='tumbnail-video'  src="https://www.youtube.com/embed/_vWViTxvOw0"/>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} >
                    {/* Content and Button */}
                    <div>
                        <h2>FILMS</h2>
                        <p>We invite you to lose yourself in the visual symphony of our portfolio,
                            where every video composition is a melodic masterpiece.</p>
                        <Button className='watch_btn' type="primary" onClick={handleWatch}>Watch Us</Button>
                    </div>
                </Col>
            </Row>

    );
};

export default Video;
