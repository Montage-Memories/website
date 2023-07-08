import React, {useState} from "react";
import "../App.css"
import img from "../Images/_SSK2120 (1).jpg";
import {Card, Col, Image, Modal, Row} from "antd";
import BackButton from "../Components/BackButton/BackButton";
import { useNavigate} from 'react-router-dom'


const Wedding = ({history}) => {
    const navigate = useNavigate();

    const handleCardClick = (dataset) => {
        const datasetId = dataset;
        navigate(`/image/${datasetId}`);
    };
    return (
        <div>
            <div className="Backbutton">
                <BackButton />
            </div>
            <div className='gallery'>
                    <Row gutter={[16, 16]}>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <Card onClick={() => handleCardClick('dataset1')}
                                  cover={
                                      <img alt="example" src="https://drive.google.com/uc?id=1Y-ybygjbdfL2X451Oes-XenO_Q1Hb1X2"/>
                                  }
                            >Dataset 1</Card>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <Card onClick={() => handleCardClick('dataset2')}
                                  cover={
                                      <img alt="example" src="https://drive.google.com/uc?id=1aKTMU3WQNad1Ykx-NQRxFFGAglAxV_oa"/>
                                  }
                            >Dataset 2</Card>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <Card onClick={() => handleCardClick('dataset3')}
                                  cover={
                                      <img alt="example" src="https://drive.google.com/uc?id=1gDnbV6kX9oindQnL8txknaC_-3-AZBXR"/>
                                  }
                            >Dataset 3</Card>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <Card onClick={() => handleCardClick('dataset4')}
                                  cover={
                                      <img alt="example" src="https://drive.google.com/uc?id=1xTYrY1GN-8_wprBFIR0PNjX20ZIYIv5M"/>
                                  }
                            >Dataset 4</Card>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <Card onClick={() => handleCardClick('dataset5')}
                                  cover={
                                      <img alt="example" src="https://drive.google.com/uc?id=1g7-REj_yFhQOhrs4is03BE-IIvOlBSQn"/>
                                  }
                            >Dataset 5</Card>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <Card onClick={() => handleCardClick('dataset6')}
                                  cover={
                                      <img alt="example" src="https://drive.google.com/uc?id=11EmSAlFLHYP9GsdsMUPAJgnQY_uttDmV"/>
                                  }
                            >Dataset 6</Card>
                        </Col>

                        <Col xs={12} sm={12} md={6} lg={6}>
                            <Card onClick={() => handleCardClick('dataset8')}
                                  cover={
                                      <img alt="example" src="https://drive.google.com/uc?id=1xUowcwfR22X79kCYemIsi6761N4OgAHY"/>
                                  }
                            >Dataset 8</Card>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <Card onClick={() => handleCardClick('dataset9')}
                                  cover={
                                      <img alt="example" src="https://drive.google.com/uc?id=1AuCa-ebKDDP162Z1UK1q170dOEGn_H1M"/>
                                  }
                            >Dataset 9</Card>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <Card onClick={() => handleCardClick('dataset10')}
                                  cover={
                                      <img alt="example" src="https://drive.google.com/uc?id=19N_eYHz02YpKhMThzNHcJu6hjqpegoPQ"/>
                                  }
                            >Dataset 10</Card>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <Card onClick={() => handleCardClick('dataset11')}
                                  cover={
                                      <img alt="example" src="https://drive.google.com/uc?id=1ttz-Q9qVhL6bQhRSFCqmowO6uqfglfdm"/>
                                  }
                            >Dataset 11</Card>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <Card onClick={() => handleCardClick('dataset12')}
                                  cover={
                                      <img alt="example" src="https://drive.google.com/uc?id=19CU30EgXhCtGi1L84iJihD39a6n5qI1H"/>
                                  }
                            >Dataset 12</Card>
                        </Col>

                        <Col xs={12} sm={12} md={6} lg={6}>
                        <Card onClick={() => handleCardClick('dataset14')}
                              cover={
                                  <img alt="example" src="https://drive.google.com/uc?id=1Cb9vHVkkm1R-uD8dL-hvN_EMTNcrJ7NS"/>
                              }
                        >Dataset 14</Card>
                    </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                        <Card onClick={() => handleCardClick('dataset15')}
                              cover={
                                  <img alt="example" src="https://drive.google.com/uc?id=1g77zzB7Ep6VQy7ys_bkBVQ5EJqD4Jvdb"/>
                              }
                        >Dataset 15</Card>
                    </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                        <Card onClick={() => handleCardClick('dataset16')}
                              cover={
                                  <img alt="example" src="https://drive.google.com/uc?id=1NfE1DP8ZhOvbgfaMg21WcKFUkZ7p5m4m"/>
                              }
                        >Dataset 16</Card>
                    </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <Card onClick={() => handleCardClick('dataset13')} style={{height:"250px"}}
                                  cover={
                                      <img alt="example" src="https://drive.google.com/uc?id=1vvzN8OhIr7QtK7MFMUwZSGxiYrvB4nl9" style={{objectFit:"contain"}}/>
                                  }
                            >Dataset 13</Card>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <Card onClick={() => handleCardClick('dataset7')}
                                  cover={
                                      <img alt="example" src="https://drive.google.com/uc?id=1vUCjQSrfLgnpAuoLQgMz-EkEzo6YfwbH"/>
                                  }
                            >Dataset 7</Card>
                        </Col>
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