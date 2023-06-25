import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import { FacebookOutlined, InstagramOutlined, YoutubeOutlined,  WhatsAppOutlined } from '@ant-design/icons';
import '../../App.css'
const { Footer } = Layout;
const { Title, Text } = Typography;

const AppFooter = () => {
    const handleWhatsAppClick = () => {
        // Replace the placeholder number with your WhatsApp number
        window.open('https://wa.me/9384446512', '_blank');
    };
    return (
        <Footer className="app-footer">
            <div className="app-footer-content">
                <Row gutter={[32, 16]}>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <div className="app-footer-section">
                            <Title level={4}>MONTAGE MEMORIES</Title>
                            <Text>
                                Memories By Saran <br />
                            </Text>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <div className="app-footer-section">
                            <Title level={4}>Contact</Title>
                            <Text>Email: montangememories23@gmail.com</Text>
                            <br />
                            <Text>Phone: +91 93844 46512</Text>
                            <br />
                            <Text>Phone: +91 84899 93666</Text>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <div className="app-footer-section">
                            <Title level={4}>Follow Us</Title>
                            <div className="social-media-links">
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FacebookOutlined />
                                </a>
                                {/*<a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">*/}
                                {/*    <TwitterOutlined />*/}
                                {/*</a>*/}
                                <a href="https://www.instagram.com/montage_memories/" target="_blank" rel="noopener noreferrer">
                                    <InstagramOutlined />
                                </a>
                                <a href="https://www.youtube.com/@framesbysaran" target="_blank" rel="noopener noreferrer">
                                    <YoutubeOutlined />
                                </a>
                                <a onClick={handleWhatsAppClick}>
                                    <WhatsAppOutlined />
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            {/*<div className="app-footer-bottom">*/}
            {/*    <Text type="secondary">&copy; 2023 Your Website. All Rights Reserved.</Text>*/}
            {/*</div>*/}
        </Footer>
    );
};

export default AppFooter;
