import React, {useState} from 'react';
import '../App.css'
import img from '../Images/_SSK2120 (1).jpg'
import {Row, Col, Modal, Image, Carousel} from 'antd';
import BackButton from "../Components/BackButton/BackButton";

const Gallery = () => {

    const [visible, setVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const images = [
        img,
        "https://drive.google.com/uc?id=1l1a4aZhAzpUq2TfiyzoA-i9VMt7MetpF",
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
        <div>
            <div className="Backbutton">
                <BackButton />
            </div>

            <div className='gallery' >

                <Row >
                    {images.map((image, index) => (

                            <Col key={index} xs={12} sm={8} md={6} lg={4}>
                            <div
                                // className="gallery-image"
                                // onClick={() => handleImageClick(image)}
                                // onTouchMove={handleTouchMove}
                                // onTouchEnd={handleTouchEnd}
                            >
                                <Image
                                    src={image}
                                    alt={`Image ${index + 1}`}
                                    // preview={}
                                />
                             </div>
                            </Col>

                    ))}
                </Row>

                {/*<Modal visible={visible} onCancel={handleModalClose} footer={null}>*/}
                {/*    <img src={selectedImage} alt="Full Image" style={{ width: '100%', height: 'auto' }} />*/}
                {/*</Modal>*/}
            </div>
        </div>


    );
};

export default Gallery;