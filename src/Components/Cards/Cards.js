import img from "../../Images/_SSK2120 (1).jpg"
import {Card, Col, Row} from 'antd';
import React from 'react';
import '../../App.css'
import {Link} from "react-router-dom";
const { Meta } = Card;
const Cards = () => {

    const cardData = [
        {
            id: 1,
            imageUrl:"https://drive.google.com/uc?id=126Pdu4YtdPTQlTPPBBUr8SSbTOSkSlkt",
            title:'Portrait',
            content: 'In the realm of portraits,' +
                ' the camera becomes a mirror that reflects ' +
                'not only physical features but also the essence of a soul',
            url:'/portrait' },
        {
            id: 2,
            imageUrl:"https://drive.google.com/uc?id=1Zc0a-ec4o-4YLKMvcCovAMHdeCtUaVws",
            title:'Commercial Photography',
            content: 'Through commercial photography, brands come to life, ' +
                'creating visual narratives that leave a lasting impression.',
            url:'/commercial'},
        {
            id: 3,
            imageUrl: "https://drive.google.com/uc?id=1I1V0lxCeDsbFQByEQJ3GMwnV33gDWAQw",
            title:'Kids Photography',
            content: 'In the world of kids photography, tiny hands, twinkling eyes, ' +
                'and infectious smiles become the stars of the show',
            url:'/kidsphotography'},
        // { id: 4, title: 'Portfolio', imageUrl: img, content: 'Fashion', url:'/portfolio' },
        // { id: 5, title: 'Maternity', imageUrl: img, content: 'Fashion', url:'/maternity'},
        // { id: 6, title: 'Corporate', imageUrl: img, content: 'Fashion', url:'/fashion'},
        // { id: 7, title: 'Baby Shoot',imageUrl: img, content: 'Fashion', url:'/babyshoot' },
        // { id: 8, title: 'Puberty', imageUrl: img, content: 'Fashion', url:'/fashion'},
        // { id: 9, title: 'Concert', imageUrl: img, content: 'Fashion', url:'/fashion'},
        // { id: 9, title: 'Card 5', imageUrl: img1, content: 'Fashion', url:'/fashion' },
        // Add more cards as needed
    ];

    function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);
    return(

                <div className="container reveal">
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
                                            <div className="content">{card.content}</div>
                                        </Card>
                                    </Link>
                            </Col>


                        ))}
                    </Row>

                </div>

    )
}

export default Cards;