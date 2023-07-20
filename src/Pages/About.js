import React from 'react';
import { useInView } from 'react-intersection-observer';
import Logo from "../Images/Thumbnail/MMS B.png"
import "../App.css";
import AboutImg from "../Images/Thumbnail/ABOUT US.jpg"

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Fade in only once
        threshold: 0.2,
    })
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

        <div className="abt-cont" style={{margin:"auto",backgroundColor:"#ffffff"}}>
           <div >
               <p style={{backgroundColor:"#000000", color:"#ffffff",textAlign:"center"}} className="about-us-text" >ABOUT US</p>
            </div><br />
            <div style={{textAlign:"center", paddingTop:"3%"}}>
                <img className="Abt-logo" src={Logo} alt="Logo"/>
            </div>
            <div style={{padding:"5%" ,textAlign:"center"}}>
                <p  className="about-container">
                   <i>WELCOME TO MONTAGE MEMORIES!</i> <br /><br />

                    At Montage Memories, we specialize in capturing the essence of life's beautiful moments through the lens of our cameras.
                    Our dedicated team of skilled photographers is passionate about creating stunning visual stories that will be
                    cherished for a lifetime. With our unique blend of creativity, technical expertise, and personalized approach,
                    we strive to deliver an exceptional photography experience to each and every client.<br /><br />

                   <i>OUR STUDIO</i> <br /><br />

                    At our state-of-the-art studio, we create an environment that is comfortable, relaxed, and inspiring.
                    Equipped with the latest photography equipment and cutting-edge technology, we ensure that every shot is
                    captured with utmost precision and clarity. Our studio space is designed to accommodate various types of
                    photography sessions, whether it's an intimate portrait, a joyful family gathering, or a grand wedding celebration.<br /><br />

                    <i>OUR APPROACH</i><br /><br />

                    We believe that photography is not just about taking pictures but about telling stories.
                    Our approach to photography is rooted in capturing authentic emotions, genuine connections,
                    and the unique personalities of our subjects. We take the time to understand your vision and preferences,
                    ensuring that every shot reflects your individual style and captures the essence of the moment.<br /><br />

                    <i>OUR SERVICES</i><br /><br />

                    At Montage Memories, we offer a wide range of photography services tailored to meet your specific needs.
                    From engagement and wedding photography to family portraits and special events, we have the expertise to
                    capture your most precious moments with artistry and professionalism. Our team is also available for commercial
                    and corporate photography projects, creating compelling visuals that elevate your brand.<br /><br />
                        <i>OUR COMMITMENT</i><br /><br />

                    We understand the significance of the moments we capture and the trust you place in us to preserve them.
                    We are committed to providing you with an exceptional photography experience from start to finish.
                    Our team will guide you through the entire process, from concept planning and pre-shoot consultations to post-production
                    and print options. We are dedicated to delivering high-quality, timeless photographs that you and your loved ones will
                        treasure for generations to come.<br /><br />
                </p>
            </div>
            <div className="reveal">
              <img src={AboutImg} alt="abt image" className="abt-img" />
                {/*<div className="content-container">*/}
                {/*    <p id="dynamic-sentence"><span id="dynamic-word"><DynamicSentence /></span></p>*/}
                {/*</div>*/}
            </div>
            <div style={{padding:"5%",textAlign:"center"}}>
                <p  className="about-container">
                    While he pursuing engineering,
                    his love for Photography found him. An engineer turned photographer,
                    an avid entrepreneur, an excited traveler, and a Bike enthusiast!
                    With his creativity and unconditional love for photography,
                    Saran has always tried to break the glass ceiling in the most creative ways.
                    What began only as a hobby soon found him working freelance gigs.
                    The more photos he took the more he realized this is what he wanted to do.
                    Saran has always believed that his Vision will different from others perspective,
                    So he Completed license course for Drone Piloting!
                </p>
            </div>
        </div>

    )
}

export default About;