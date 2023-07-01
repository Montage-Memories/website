import '../App.css'
import Cards from "../Components/Cards/Cards";
import {Button} from "antd";
import ContactForm from "../Components/Form/ContactForm";
import Carousels from "../Components/Carousels/Carousels";
import About from "./About";
import Navbar from "../Components/Navbar/Navbar";
import {useState} from "react";
import {Link} from "react-router-dom";
import Video from "../Components/Video/Video";
// import CustomerReviews from "../Components/Review/Review";
// import Video from "../Components/Video/Video";
const Home = () => {
    const [showForm, setShowForm] = useState(false);
    // const [showReview, setShowReview] = useState(false);
    const handleOnclickContactButton = () => {
        setShowForm(!showForm);
    };
    // const handleOnclick = () => {
    //     window.location.href = '/website/gallery';
    // }

    // const handleOnclickReview = () => {
    //     setShowReview(!showReview);
    // }
    // const imageUrl = "https://drive.google.com/uc?id=1pbm6EyZ_bQDOaj3UQmB1VPRiXzjjhO7Y";
    return(
            <div id="home">
                <Navbar />


                <div className="home" >
                    <div className="carousel">
                        <Carousels/>
                    </div>

                    <div className="view_gallery">
                        <p>
                            "Photography is the art of frozen time... the ability to store emotion and feelings within a frame." - Meshack Otieno
                        </p>
                        <Link to= "/gallery">
                        <Button className="view_btn" type="primary">VIEW GALLERY</Button>
                        </Link>
                    </div>

                    <div className="our_services" id="works">
                        <h1> OUR SERVICES </h1>
                        <Cards />
                    </div>




                    <div className="videos">
                        {/*<img className="films_img" src= {img} />*/}
                        <Video />
                    </div>

                    <div id="about">
                        {/*<h1 className="abt-me-text">About Me</h1>*/}
                        <About />
                    </div>

                    {/*<div className="why_us">*/}
                    {/*    <h1 className="why_text">WHY US?</h1>*/}
                    {/*    <div>*/}
                    {/*        <h6 className="why_content">We’ve had the same question,*/}
                    {/*            as to how people have continuously loved us over the years.*/}
                    {/*            We reached out to them and asked what made us special.*/}
                    {/*            And the answers were encouraging.*/}
                    {/*            Give it a read.</h6>*/}
                    {/*        <div>*/}
                    {/*            <Button className="view_review_btn" type="primary" onClick={handleOnclickReview}>{showReview ? 'Close Review' : 'View Review'}</Button>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div>*/}
                    {/*    {showReview &&(*/}
                    {/*        <CustomerReviews />*/}
                    {/*    )}*/}
                    {/*</div>*/}



                    <div className="contactForm" id="contact">
                        <h3><i>
                            For Queries and Claim Quote
                        </i>

                        </h3>
                                <Button className="contact_btn" type="primary" onClick={handleOnclickContactButton}>{showForm ? 'Close Form' : 'Contact US'}</Button>

                        {showForm &&(
                            <ContactForm />
                        )}
                    </div>

                </div>
            </div>


    )
}

export default Home;