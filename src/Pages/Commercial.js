import ContactForm from "../Components/Form/ContactForm";
import {Card, Col, Row} from "antd";
import {Link} from "react-router-dom";
import React, {useEffect} from "react";
import "../App.css"
import Meta from "antd/es/card/Meta";

const cardData = [
    {
        id: 1,
        imageUrl:"https://drive.google.com/uc?id=1FoVm5QfhFkj8lTpmdILnzltpfyIfbEeW",
        title:'Ariel Photography',
        url:'/ariel' },
    {
        id: 2,
        imageUrl:"https://drive.google.com/uc?id=1Zc0a-ec4o-4YLKMvcCovAMHdeCtUaVws",
        title:'Concert Photography',
        url:'/concert'},
    {
        id: 3,
        imageUrl: "https://drive.google.com/uc?id=1qhuRQ0na3ipq4HZTJOoY4GRkAkOStQz0",
        title:'Corporate Events',
        url:'/corporate'},

];
const Commercial = () => {

    return(
        <div>
            <div className="Commercial-Container" >
                <h1>COMMERCIAL PHOTOGRAPHY</h1>
                <Row gutter={[16, 16]}>
                    {cardData.map(card => (
                        <Col xs={24} sm={24} md={24} lg={8} key={card.id}>
                            {/*<Card title={card.title}>*/}
                            {/*    <div className="card-image-container">*/}
                            {/*        <img src={card.imageUrl} alt={card.title} />*/}
                            {/*    </div>*/}
                            {/*</Card>*/}
                            <Link to= {card.url}>
                                <Card className="cards"
                                      cover={
                                          <img alt="example" loading="lazy" src={card.imageUrl} height="300px"
                                          />
                                      }
                                      style={{alignItems:"center", }}
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
                {/*<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>*/}
            </div>
        </div>
    )
}

export default Commercial ;