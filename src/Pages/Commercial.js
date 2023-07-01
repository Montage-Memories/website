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
        imageUrl:"https://drive.google.com/uc?id=126Pdu4YtdPTQlTPPBBUr8SSbTOSkSlkt",
        title:'Ariel Photography',
        content: 'In the realm of portraits,' +
            ' the camera becomes a mirror that reflects ' +
            'not only physical features but also the essence of a soul',
        url:'/aerial' },
    {
        id: 2,
        imageUrl:"https://drive.google.com/uc?id=1Zc0a-ec4o-4YLKMvcCovAMHdeCtUaVws",
        title:'Concert Photography',
        content: 'Through commercial photography, brands come to life, ' +
            'creating visual narratives that leave a lasting impression.',
        url:'/concert'},
    {
        id: 3,
        imageUrl: "https://drive.google.com/uc?id=1I1V0lxCeDsbFQByEQJ3GMwnV33gDWAQw",
        title:'Corporate Events',
        content: 'In the world of kids photography, tiny hands, twinkling eyes, ' +
            'and infectious smiles become the stars of the show',
        url:'/corporate'},

];
const Commercial = () => {
    return(
        <div>
            <div className="Commercial-Container" style={{margin:"auto", padding:"3%"}}>
                <h1>COMMERCIAL PHOTOGRAPHY</h1>
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
                                          <img alt="example" src={card.imageUrl}
                                          />
                                      }
                                      style={{alignItems:"center"}}
                                >
                                    <Meta className="cards-name"
                                          title={card.title}
                                          style={{textAlign:"center"}}
                                        // description="This is the description"
                                    />
                                    <div className="content">{card.content}</div>
                                </Card>
                            </Link>
                        </Col>


                    ))}
                </Row>
            </div>
        </div>
    )
}

export default Commercial ;