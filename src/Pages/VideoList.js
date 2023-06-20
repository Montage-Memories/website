import React from 'react';
import '../App.css'
import { Row, Col, Card } from 'antd';
// import video1 from '../Images/Videos/A grand Kongu Wedding _ Witness Love Unfold_ The Naveen & Preethi Story _ Almighty Pictures.mp4'
// import video2 from '../Images/Videos/Ranjithame _ Wedding Candid Video _ Glimpse _ Varisu _ Cinematic Video _ Salem Wedding.mp4'
// import video3 from '../Images/Videos/IndhuShansun & Arvind _ Wedding Candid video _ Glimpse _ Marriage _ Coimbatore _ FRAMES BY SARAN.mp4';
import BackButton from "../Components/BackButton/BackButton";
const VideoList = () => {
    const videos = [
        {
            id: 1,
            title: 'A Grand Kongu Wedding',
            // url: video1,
        },
        {
            id: 2,
            title: 'Video 2',
            // url: video2,
        },
        {
            id: 3,
            title: 'Video 2',
            // url: video3,
        },
        {
            id: 4,
            title: 'Video 2',
            // url: video2,
        },
        {
            id: 5,
            title: 'Video 2',
            // url: video1,
        },
        {
            id: 6,
            title: 'Video 2',
            // url: video2,
        },
        {
            id: 7,
            title: 'Video 2',
            // url: video2,
        },
        // Add more video objects as needed
    ];

    return (
        <div>
            <div className="Backbutton">
                <BackButton />
            </div>
            <div className="VideoList">
                <h2>Montage Memories</h2>
                <Row gutter={[16, 16]}>
                    {videos.map((video) => (
                        <Col key={video.id} xs={24} sm={12} md={8} lg={6} xl={4}>
                            <Card
                                hoverable
                                cover={<video src={video.url} controls controlsList="nodownload" style={{ width: '100%' }} />}
                            >
                                <Card.Meta title={video.title} />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>

    );
};

export default VideoList;
