import pro from "../Images/Thumbnail/PROFILEPIC.jpg";


const About = () => {

    return(

        <div className="about-container" style={{margin:"auto"}}>
           <div className="top-section">
               <div className="right">
                   <img loading="lazy" className="abt-img" src={pro} alt="person"/>
               </div>
               <div className="left" >
                   <p className="about__subheading">
                      Hi, I am <span className="abt-span"> Saran Karthick</span>
                   </p>
                   <h2 className="about__heading">A Photographer & Drone Pilot<br /> DGCA Approved Licensed Drone Pilot</h2>
                   <div className="about__info">
                       <p>
                           With a love for capturing special moments,
                           I strive to create stunning and meaningful images
                           that tell stories and evoke emotions.
                       </p><br />
                       <p>
                           I specialize in various genres of photography,
                           including portraits, landscapes, events, and conceptual photography.
                           Each project is an opportunity for me to collaborate
                           with clients and bring their vision to life through my lens.
                       </p><br />
                       <p>
                           Whether I'm capturing the love and connection between a couple,
                           documenting the breathtaking beauty of nature,
                           or freezing those precious moments at a special event,
                           I approach each project with enthusiasm and a commitment
                           to delivering exceptional results.
                       </p><br/>
                       <p>
                           I believe that photography has the power to
                           freeze time and preserve memories that can be
                           cherished for a lifetime.
                           My goal is to create images that not only
                           capture the essence of the moment but also evoke
                           emotions and transport viewers to that specific time and place.
                       </p>

                   </div>
               </div>

           </div>
        </div>

    )
}

export default About;