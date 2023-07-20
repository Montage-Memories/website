import React, { useState } from 'react';
import { Card, Row, Col } from 'antd';
import {LeftOutlined,RightOutlined } from '@ant-design/icons';

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            author: 'John Doe',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            rating: 4.5,
        },
        {
            id: 2,
            author: 'Jane Smith',
            comment: 'Praesent gravida justo in urna faucibus, sit amet sollicitudin libero hendrerit.',
            rating: 3.8,
        },
        {
            id: 3,
            author: 'Mike Johnson',
            comment: 'Sed auctor urna a eros feugiat, nec interdum metus luctus.',
            rating: 5.0,
        },
        {
            id: 4,
            author: 'John Doe',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            rating: 4.5,
        },
        {
            id: 5,
            author: 'Jane Smith',
            comment: 'Praesent gravida justo in urna faucibus, sit amet sollicitudin libero hendrerit.',
            rating: 3.8,
        },
        {
            id: 6,
            author: 'Mike Johnson',
            comment: 'Sed auctor urna a eros feugiat, nec interdum metus luctus.',
            rating: 5.0,
        },
        {
            id: 7,
            author: 'John Doe',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            rating: 4.5,
        },
        {
            id: 8,
            author: 'Jane Smith',
            comment: 'Praesent gravida justo in urna faucibus, sit amet sollicitudin libero hendrerit.',
            rating: 3.8,
        },
        {
            id: 9,
            author: 'Mike Johnson',
            comment: 'Sed auctor urna a eros feugiat, nec interdum metus luctus.',
            rating: 5.0,
        },
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
            <Row justify="center" align="middle" gutter={[20, 20]}>
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