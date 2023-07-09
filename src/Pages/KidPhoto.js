import ContactForm from "../Components/Form/ContactForm";
import {Card, Col, Row} from "antd";
import {Link} from "react-router-dom";
import img from "../Images/_SSK2120 (1).jpg";
import React from "react";
import "../App.css"
import Meta from "antd/es/card/Meta";

const cardData = [
    {
        id: 1,
        imageUrl:"https://drive.google.com/uc?id=1UYokpHkVFSF5jfcrqWOsgB_RJHBYB3NZ",
        title:'MATERNITY',
        url:'/maternity' },
    {
        id: 2,
        imageUrl:"https://drive.google.com/uc?id=1jIW9NpWXKVP_1G4yASWyZXYRGaoe2Q0q",
        title:'PUBERTY',
        url:'/puberty'},
    {
        id: 3,
        imageUrl: "https://drive.google.com/uc?id=1nT5LpRbzrxVMTiRM9PX5C8httRv0DurS",
        title:'BABYSHOOT',
        url:'/babyshoot'},

];
const KidsPhoto = () => {
    return(
        <div>
            <div className="Kids-Container">
                <h1>KIDS PHOTOGRAPHY</h1>
                <Row gutter={[16, 16]}>
                    {cardData.map(card => (
                        <Col xs={24} sm={16} md={16} lg={8} key={card.id}>
                            {/*<Card title={card.title}>*/}
                            {/*    <div className="card-image-container">*/}
                            {/*        <img src={card.imageUrl} alt={card.title} />*/}
                            {/*    </div>*/}
                            {/*</Card>*/}
                            <Link to= {card.url}>
                                <Card className="cards"
                                      cover={
                                          <img alt="example" src={card.imageUrl} height="400px" loading="lazy"
                                          />
                                      }
                                      style={{alignItems:"center"}}
                                >
                                    <Meta className="cards-name"
                                          title={card.title}
                                          style={{textAlign:"center"}}
                                        // description="This is the description"
                                    />
                                    {/*<div className="content">{card.content}</div>*/}
                                </Card>
                            </Link>
                        </Col>


                    ))}
                </Row>
            </div>
        </div>
    )
}

export default KidsPhoto ;