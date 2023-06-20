import {useRef} from "react";
import emailjs from '@emailjs/browser';
import {Button, Form, Image, Input, Typography} from 'antd';

const { Title } = Typography;
const ContactForm = () => {
    const form = useRef()

    const sendEmail = (values) => {
        // values.preventDefault();

        emailjs.send('service_50kt3qe', 'template_vy07som', values, '4Lr4pqMvgfMTrmvs4')
            .then((result) => {
                console.log(result.text);
                alert("message sent");
            }, (error) => {
                console.log(error.text);
            });
        // values.target.reset()
    }
    return(
        <section>
            <div>
                <Title level={2}>Contact Form</Title>
                <Form ref={form} className="form-control" onFinish={sendEmail}>
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
            </div>
        </section>
    )
}

export default ContactForm;