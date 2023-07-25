import ContactForm from "../Components/Form/ContactForm";
import React, {useRef, useState} from "react";
import {Alert, Button, Divider, Form, Input, Typography} from "antd";
import emailjs from "@emailjs/browser";
import {FacebookOutlined, InstagramOutlined, WhatsAppOutlined, YoutubeOutlined} from "@ant-design/icons";


const {Title, Text } = Typography;
const Contact = () => {

    const form = useRef()
    const [showAlert, setShowAlert] = useState(false);
    const [formFields] = Form.useForm();
    const sendEmail = (values) => {

        // values.preventDefault();

        emailjs.send('service_50kt3qe', 'template_vy07som', values, '4Lr4pqMvgfMTrmvs4')
            .then((result) => {
                console.log(result.text);
                formFields.resetFields();
                setShowAlert(true);
            }, (error) => {
                console.log('Error sending email:', error);
            });
        // values.target.reset()
    }
    const handleWhatsAppClick = () => {
        // Replace the placeholder number with your WhatsApp number
        window.open('https://wa.me/9384446512', '_blank');
    };
    return(
        <div className="contact_container" style={{margin:"auto"}}>
            <div className="container">
                <div className="contact-details">
                    <h1 style={{textAlign:"center"}}>CONTACT DETAILS</h1>
                            <Text>Email : montangememories23@gmail.com</Text>
                            <br />
                            <Text>Phone: +91 93844 46512</Text>
                            <br />
                            <Text>Phone: +91 84899 93666</Text>
                    <br/><br/>
                <div className="left-column"><div className="social-media-links-contact">
                    <a href="https://www.facebook.com/montagememories23?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
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
                </div></div>
                </div>
                {/*<Divider dashed={true} style={{height:"100%"}} type="vertical" />*/}
                <div className="right-column"> <Form ref={form} form={formFields} className="form-contact-page" onFinish={sendEmail}>
                    <h1 style={{textAlign:"center"}}>CONTACT FORM</h1>
                    <Form.Item name="name">
                        <Input
                            className="form-item"
                            type="text"
                            placeholder="Your Name"
                            required/>
                    </Form.Item>
                    <Form.Item name="service">
                        <Input
                            className="form-item"
                            type="text"
                            placeholder="Service Required"
                            required/>
                    </Form.Item>
                    <Form.Item name="email" >
                        <Input
                            className="form-item"
                            type="email"
                            placeholder="Your Email"
                            required/>
                    </Form.Item>
                    <Form.Item name="number">
                        <Input
                            className="form-item"
                            type="text"
                            placeholder=" Your Contact number"
                            required/>
                    </Form.Item>
                    <Form.Item name="message">
                        <Input.TextArea
                            className="form-item"
                            placeholder="Your Message" rows={4}  />
                    </Form.Item><br/>
                    <Form.Item>
                        <Button htmlType="submit" type="primary" className="submit-button">Send</Button>
                    </Form.Item>

                </Form>
                    {showAlert && (
                        <Alert
                            message="Email sent successfully"
                            type="success"
                            showIcon
                            closable
                            onClose={() => setShowAlert(false)}
                            style={{ position: 'fixed', bottom: 20, right: 20 }}
                        />
                    )}</div>
            </div>

        </div>
    )
}

export default Contact;