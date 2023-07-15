import React from "react";
import "../App.css"
import {Card, Col, Row} from "antd";
import {Link, useNavigate} from 'react-router-dom'
import Masonry from "react-responsive-masonry";
import p1 from "../Images/Thumbnail/P1.jpg";
import p2 from "../Images/Thumbnail/P2.jpg";
import p3 from "../Images/Thumbnail/P3.jpg";
import p4 from "../Images/Thumbnail/P4.jpg";
import p5 from "../Images/Thumbnail/P5.jpg";
import p6 from "../Images/Thumbnail/P6.JPG";


const Wedding = ({history}) => {
    const navigate = useNavigate();

    const handleCardClick = (dataset) => {
        const datasetId = dataset;
        navigate(`/image/${datasetId}`);
    };
    return (
        <div>
            {/*<div className="Backbutton">*/}
            {/*    <BackButton />*/}
            {/*</div>*/}
            <div className='gallery'>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} md={8} lg={8}>
                            <Card className="WeddingCard" onClick={() => handleCardClick('dataset1')}
                                    cover={<img loading="lazy" alt="example" src={p1}/>}
                            />
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={8}>
                            <Card  className="WeddingCard" onClick={() => handleCardClick('dataset2')}
                            cover={<img loading="lazy" alt="example" src={p2}/>}/>
                        </Col>
                        {/*<Col xs={12} sm={12} md={6} lg={6}>*/}
                        {/*    <Card onClick={() => handleCardClick('dataset3')}*/}
                        {/*          cover={*/}
                        {/*              <img loading="lazy"  alt="example" src="https://drive.google.com/uc?id=1gDnbV6kX9oindQnL8txknaC_-3-AZBXR"/>*/}
                        {/*          }*/}
                        {/*    ></Card>*/}
                        {/*</Col>*/}
                        {/*<Col xs={12} sm={12} md={6} lg={6}>*/}
                        {/*    <Card onClick={() => handleCardClick('dataset4')}*/}
                        {/*          cover={*/}
                        {/*              <img loading="lazy" alt="example" src="https://drive.google.com/uc?id=1xTYrY1GN-8_wprBFIR0PNjX20ZIYIv5M"/>*/}
                        {/*          }*/}
                        {/*    ></Card>*/}
                        {/*</Col>*/}
                        <Col xs={24} sm={12} md={8} lg={8}>
                            <Card className="WeddingCard" onClick={() => handleCardClick('dataset5')}
                            cover={<img loading="lazy" alt="example" src={p3}/>}/>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={8}>
                            <Card className="WeddingCard" onClick={() => handleCardClick('dataset6')}
                            cover={<img loading="lazy" alt="example" src={p4}/>}/>
                        </Col>

                        {/*<Col xs={12} sm={12} md={6} lg={6}>*/}
                        {/*    <Card onClick={() => handleCardClick('dataset8')}*/}
                        {/*          cover={*/}
                        {/*              <img loading="lazy" alt="example" src="https://drive.google.com/uc?id=1xUowcwfR22X79kCYemIsi6761N4OgAHY"/>*/}
                        {/*          }*/}
                        {/*    ></Card>*/}
                        {/*</Col>*/}
                        {/*<Col xs={12} sm={12} md={6} lg={6}>*/}
                        {/*    <Card onClick={() => handleCardClick('dataset9')}*/}
                        {/*          cover={*/}
                        {/*              <img loading="lazy" alt="example" src="https://drive.google.com/uc?id=1AuCa-ebKDDP162Z1UK1q170dOEGn_H1M"/>*/}
                        {/*          }*/}
                        {/*    ></Card>*/}
                        {/*</Col>*/}
                        {/*<Col xs={12} sm={12} md={6} lg={6}>*/}
                        {/*    <Card onClick={() => handleCardClick('dataset10')}*/}
                        {/*          cover={*/}
                        {/*              <img loading="lazy" alt="example" src="https://drive.google.com/uc?id=19N_eYHz02YpKhMThzNHcJu6hjqpegoPQ"/>*/}
                        {/*          }*/}
                        {/*    ></Card>*/}
                        {/*</Col>*/}
                        <Col xs={24} sm={12} md={8} lg={8}>
                            <Card className="WeddingCard" onClick={() => handleCardClick('dataset11')}
                            cover={<img loading="lazy" alt="example" src={p5}/>} />
                        </Col>
                        {/*<Col xs={12} sm={12} md={6} lg={6}>*/}
                        {/*    <Card onClick={() => handleCardClick('dataset12')}*/}
                        {/*          cover={*/}
                        {/*              <img loading="lazy" alt="example" src="https://drive.google.com/uc?id=19CU30EgXhCtGi1L84iJihD39a6n5qI1H"/>*/}
                        {/*          }*/}
                        {/*    ></Card>*/}
                        {/*</Col>*/}

                        <Col xs={24} sm={12} md={8} lg={8}>
                            <Card className="WeddingCard" onClick={() => handleCardClick('dataset14')} cover={<img loading="lazy"  alt="example" src={p6}/>}></Card>
                    </Col>
                    {/*    <Col xs={12} sm={12} md={6} lg={6}>*/}
                    {/*    <Card onClick={() => handleCardClick('dataset15')}*/}
                    {/*          cover={*/}
                    {/*              <img loading="lazy" alt="example" src="https://drive.google.com/uc?id=1g77zzB7Ep6VQy7ys_bkBVQ5EJqD4Jvdb"/>*/}
                    {/*          }*/}
                    {/*    ></Card>*/}
                    {/*</Col>*/}
                    {/*    <Col xs={12} sm={12} md={6} lg={6}>*/}
                    {/*    <Card onClick={() => handleCardClick('dataset16')}*/}
                    {/*          cover={*/}
                    {/*              <img loading="lazy" alt="example" src="https://drive.google.com/uc?id=1NfE1DP8ZhOvbgfaMg21WcKFUkZ7p5m4m"/>*/}
                    {/*          }*/}
                    {/*    ></Card>*/}
                    {/*</Col>*/}
                    {/*    <Col xs={12} sm={12} md={6} lg={6}>*/}
                    {/*        <Card onClick={() => handleCardClick('dataset13')} style={{height:"250px"}}*/}
                    {/*              cover={*/}
                    {/*                  <img loading="lazy" alt="example" src="https://drive.google.com/uc?id=1vvzN8OhIr7QtK7MFMUwZSGxiYrvB4nl9" style={{objectFit:"contain"}}/>*/}
                    {/*              }*/}
                    {/*        ></Card>*/}
                    {/*    </Col>*/}
                    {/*    <Col xs={12} sm={12} md={6} lg={6}>*/}
                    {/*        <Card onClick={() => handleCardClick('dataset7')}*/}
                    {/*              cover={*/}
                    {/*                  <img loading="lazy" alt="example" src="https://drive.google.com/uc?id=1vUCjQSrfLgnpAuoLQgMz-EkEzo6YfwbH"/>*/}
                    {/*              }*/}
                    {/*        ></Card>*/}
                    {/*    </Col>*/}
                    {/*    <Col xs={12} sm={12} md={6} lg={6}>*/}
                    {/*    <Card onClick={() => handleCardClick('dataset17')}*/}
                    {/*          cover={*/}
                    {/*              <img alt="example" src=""/>*/}
                    {/*          }*/}
                    {/*    >Dataset 17</Card>*/}
                    {/*</Col>*/}
                    </Row>
            </div>
        </div>

    )
}

export default Wedding;