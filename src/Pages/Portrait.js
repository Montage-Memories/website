
import {Card, Col, Row} from "antd";
import {Link} from "react-router-dom";
import React from "react";
import portfolio from  "../Images/Thumbnail/PORTFOLIO THUMB.jpg";
import wedding from "../Images/Thumbnail/WEDDING THUMB.jpg";
import "../App.css"
import Meta from "antd/es/card/Meta";

const cardData = [
    {
        id: 1,
        imageUrl:portfolio,
        title:'Portfolio',
        url:'/portfolio' },
    {
        id: 2,
        imageUrl:wedding,
        title:'Wedding Photography',
        url:'/wedding'},
    // {
    //     id: 3,
    //     imageUrl: "https://drive.google.com/uc?id=1I1V0lxCeDsbFQByEQJ3GMwnV33gDWAQw",
    //     title:'Kids Photography',
    //     content: 'In the world of kids photography, tiny hands, twinkling eyes, ' +
    //         'and infectious smiles become the stars of the show',
    //     url:'/wedding'},

];
const Portrait = () => {
    return(
        <div>
            <div className="Portrait-Container" style={{margin:"auto"}}>
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
                                          <img alt="example" src={card.imageUrl} loading="lazy"
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

export default Portrait ;