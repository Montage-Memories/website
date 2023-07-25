import React, { useState } from 'react';
import { Card, Row, Col } from 'antd';
import {LeftOutlined,RightOutlined } from '@ant-design/icons';

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            author: 'ASHOK',
            comment: 'The work done by Montage Memories Team must be appreciated,' +
                ' the function took long time finish but still they waited until midnight ' +
                'for us with smiling face and took pics. ' +
                'The team is calm and composed and very potential...' +
                'Super happy with the work done by Montage Memories ',
            rating: 4.5,
        },
        {
            id: 2,
            author: 'JAYA',
            comment: 'Thank you for capturing such an amazing memorable and candid pics perfectly...' +
                'we highly recommend Montage Memories.' +
                'Keep up the great work!',
            rating: 3.8,
        },
        {
            id: 3,
            author: 'AKALYA',
            comment: 'I just wanted to say biggest thanks to you for your amazing work on my brother wedding...' +
                'You guys put so much effort and made us feel more comfortable and special. ',
            rating: 5.0,
        },
        {
            id: 4,
            author: 'MANISHA',
            comment: 'Montage Memories by saran is a young and enthusiastic team...' +
                'The work done by them fore our baby shower events were outstanding.' +
                'Thank you for capturing each and every moments.',
            rating: 4.5,
        },
        {
            id: 5,
            author: 'INDHU',
            comment: 'Montage Memories really am so happy that you guys made my day...' +
                'such an innovation, patience almost probably a friendly interaction of you' +
                'felt us happy and comfort shoot without any camera conscious...' +
                'love your way of handling the crowd and couples(Indhu & Aravind)',
            rating: 3.8,
        },
        // {
        //     id: 6,
        //     author: 'Mike Johnson',
        //     comment: 'Sed auctor urna a eros feugiat, nec interdum metus luctus.',
        //     rating: 5.0,
        // },
        // {
        //     id: 7,
        //     author: 'John Doe',
        //     comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        //     rating: 4.5,
        // },
        // {
        //     id: 8,
        //     author: 'Jane Smith',
        //     comment: 'Praesent gravida justo in urna faucibus, sit amet sollicitudin libero hendrerit.',
        //     rating: 3.8,
        // },
        // {
        //     id: 9,
        //     author: 'Mike Johnson',
        //     comment: 'Sed auctor urna a eros feugiat, nec interdum metus luctus.',
        //     rating: 5.0,
        // },
        // Your array of customer reviews
    ];

    const [currentCard, setCurrentCard] = useState(0);

    const handleNextCard = () => {
        setCurrentCard((currentCard + 1) % reviews.length);
    };

    const handlePreviousCard = () => {
        setCurrentCard((currentCard - 1 + reviews.length) % reviews.length);
    };

    return (
        <div className="reviews-container" style={{margin:"auto"}}>
            <Row justify="center" align="middle" gutter={[10, 10]}>
                <Col xs={1} sm={1} md={8} lg={1} xl={1}>
                    <LeftOutlined className="arrow-icon" onClick={handlePreviousCard} />
                </Col>
                <Col xs={16} sm={18} md={8} lg={8} xl={8}>
                    <Card className={`card ${currentCard === 0 ? 'card-current' : ''}`}>
                        <h3>{reviews[(currentCard - 1 + reviews.length) % reviews.length].author}</h3>
                        <p>{reviews[(currentCard - 1 + reviews.length) % reviews.length].comment}</p>
                    </Card>
                </Col>
                <Col xs={0} sm={0} md={6} lg={0} xl={0}>
                    <Card style={{}}  className={`card ${currentCard === 0 ? 'card-current' : ''} `}>
                        <h3>{reviews[currentCard].author}</h3>
                        <p>{reviews[currentCard].comment}</p>
                    </Card>
                </Col>
                <Col xs={0} sm={0} md={8} lg={0} xl={0}>
                    <Card className={`card ${currentCard === 0 ? 'card-current' : ''}`}>
                        <h3>{reviews[(currentCard + 1) % reviews.length].author}</h3>
                        <p>{reviews[(currentCard + 1) % reviews.length].comment}</p>
                    </Card>
                </Col>
                <Col xs={1} sm={1} md={8} lg={1} xl={1}>
                    <RightOutlined className="arrow-icon" onClick={handleNextCard} />
                </Col>
            </Row>
        </div>
    );
};

export default Reviews;
