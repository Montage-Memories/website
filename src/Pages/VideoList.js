import React from 'react';
import '../App.css'
import { Row, Col, Card } from 'antd';
// import video1 from '../Images/Videos/A grand Kongu Wedding _ Witness Love Unfold_ The Naveen & Preethi Story _ Almighty Pictures.mp4'
// import video2 from '../Images/Videos/Ranjithame _ Wedding Portfolio Video _ Glimpse _ Varisu _ Cinematic Video _ Salem Wedding.mp4'
// import video3 from '../Images/Videos/IndhuShansun & Arvind _ Wedding Portfolio video _ Glimpse _ Marriage _ Coimbatore _ FRAMES BY SARAN.mp4';
import BackButton from "../Components/BackButton/BackButton";
const VideoList = () => {
    const videos = [
        {
            id: 1,
            title: 'A Grand Kongu Wedding',
            url: "https://www.youtube.com/embed/tpj3tiBrUz0",
        },
        {
            id: 2,
            title: 'Video 2',
            url: "https://www.youtube.com/embed/gAp9fH7plpE",
        },
        {
            id: 3,
            title: 'Video 2',
            url: "https://www.youtube.com/embed/5gYS0aBPZjg",
        },
        {
            id: 4,
            title: 'Video 2',
            url: "https://www.youtube.com/embed/MtWUosU-PeI",
        },
        {
            id: 5,
            title: 'Video 2',
            url: "https://www.youtube.com/embed/MO85XT3zR70",
        },
        {
            id: 6,
            title: 'Video 2',
            url: "https://www.youtube.com/embed/h2_n5mQk1do",
        },
        // {
        //     id: 7,
        //     title: 'Video 2',
        //     url: "https://www.youtube.com/embed/5gYS0aBPZjg",
        // },
        // Add more video objects as needed
    ];

    return (
        <div>
            <div className="Backbutton">
                <BackButton />
            </div>
            <div className="VideoList">
                <h2>Montage Memories</h2>
                <Row gutter={[12, 12]}>
                    {videos.map((video) => (
                        <Col key={video.id} xs={24} sm={12} md={8} lg={8} xl={8}>
                            <Card
                                hoverable
                                cover={ <iframe loading="lazy" height="150" width="300" src={video.url}/>}
                                style={{height:"150px", width:"300px"}}
                            >
                                {/*<Card.Meta title={video.title} />*/}
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>

    );
};

export default VideoList;
