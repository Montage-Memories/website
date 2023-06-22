import img from "../../Images/_SSK2120 (1).jpg"
// import img1 from "../../Images/_SSK9831.jpg"
// import fashion from "../../Images/_SSK6726.jpg"
// import wedding from "../../Images/_SSK9831.jpg"
// import portfolio from "../../Images/_SSK4761.jpg"
import {Card, Col, Row} from 'antd';
import React from 'react';
import '../../App.css'
import {Link} from "react-router-dom";
const { Meta } = Card;
const Cards = () => {

    const cardData = [
        { id: 1, title: 'Fashion', imageUrl: img, content: 'Fashion', url:'/fashion' },
        { id: 2, title: 'Aerial',imageUrl: img, content: 'Fashion', url:'/fashion'},
        { id: 3, title: 'Wedding', imageUrl: img, content: 'Fashion', url:'/wedding'},
        { id: 4, title: 'Portfolio', imageUrl: img, content: 'Fashion', url:'/portfolio' },
        { id: 5, title: 'Maternity', imageUrl: img, content: 'Fashion', url:'/maternity'},
        { id: 6, title: 'Corporate', imageUrl: img, content: 'Fashion', url:'/fashion'},
        { id: 7, title: 'Baby Shoot',imageUrl: img, content: 'Fashion', url:'/babyshoot' },
        { id: 8, title: 'Puberty', imageUrl: img, content: 'Fashion', url:'/fashion'},
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
                            <Col xs={12} sm={8} md={6} lg={6} key={card.id}>
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
                                        >
                                            <Meta className="name"
                                                  title={card.title}
                                                // description="This is the description"
                                            />
                                        </Card>
                                    </Link>
                            </Col>


                        ))}
                    </Row>

                </div>

    )
}

export default Cards;