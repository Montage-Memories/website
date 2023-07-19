import {useRef, useState} from "react";
import '../../App.css';
import emailjs from '@emailjs/browser';
import {Alert, Button, Form, Image, Input, Modal, Typography} from 'antd';

const { Title } = Typography;
const ContactForm = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };


    const handleCancel = () => {
        setIsModalVisible(false);
    };

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
                setIsModalVisible(false);
            }, (error) => {
                console.log('Error sending email:', error);
            });
        // values.target.reset()
    }
    return(
        <section>
            <div className="Contact-Form">
                <Button style={{marginLeft:"100%"}} type="primary" className="contact_btn" onClick={showModal}>
                    FOR ENQUIRY
                </Button>

                <Modal  title="CONTACT FORM"
                        visible={isModalVisible}
                        onCancel={handleCancel}
                footer={null}>
                <Form ref={form} form={formFields} className="form-control" onFinish={sendEmail}>
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
                   </Form.Item>
                   <Form.Item>
                       <Button htmlType="submit" type="primary" className="submit-button">Send</Button>
                   </Form.Item>

                </Form>
                </Modal>
                {showAlert && (
                    <Alert
                        message="Email sent successfully"
                        type="success"
                        showIcon
                        closable
                        onClose={() => setShowAlert(false)}
                        style={{ position: 'fixed', bottom: 20, right: 20 }}
                    />
                )}
            </div>
        </section>
    )
}

export default ContactForm;