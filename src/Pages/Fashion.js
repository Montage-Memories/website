import React, {useState} from "react";
import img from "../Images/_SSK2120 (1).jpg";
import {Col, Modal, Row} from "antd";

const Fashion = () => {
    const [visible, setVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const images = [
        img,
        img,
        img,
        img,
        img,
        img,
        img,
        img,
    ];

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setVisible(true);
    };

    const handleModalClose = () => {
        setVisible(false);
    };

    const handleTouchMove = (event) => {
        const target = event.target;
        target.style.opacity = '0.7';
    };

    const handleTouchEnd = (event) => {
        const target = event.target;
        target.style.opacity = '1';
    };
    return (
        <div className='gallery'>
            <Row gutter={[16, 16]}>
                {images.map((image, index) => (
                    <Col key={index} xs={12} sm={8} md={6} lg={4}>
                        <div
                            className="gallery-image"
                            onClick={() => handleImageClick(image)}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            <img
                                src={image}
                                alt={`Image ${index + 1}`}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </Col>
                ))}
            </Row>

            <Modal visible={visible} onCancel={handleModalClose} footer={null}>
                <img src={selectedImage} alt="Full Image" style={{ width: '100%', height: 'auto' }} />
            </Modal>
        </div>
    )
}

export default Fashion;