import ContactForm from "../Components/Form/ContactForm";
import {useRef, useState} from "react";
import {Alert, Button, Form, Input} from "antd";
import emailjs from "@emailjs/browser";

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
    return(
        <div className="contact_container">
            <Form ref={form} form={formFields} className="form-contact-page" onFinish={sendEmail}>
                <h1>CONTACT US</h1>
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
            )}
        </div>
    )
}

export default Contact;