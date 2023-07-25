import React from 'react';
import '../App.css'
import {Button, Image} from 'antd';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import {Link} from "react-router-dom";



const images = [
    "https://drive.google.com/uc?id=1FWC7h_IUNutblEAv0Y57L49aV-8UMJ_S",
    "https://drive.google.com/uc?id=1jVsJlHRWeVMp9n7XWHrQYkHY5XLOfDDO",

    "https://drive.google.com/uc?id=1MvzhonTlosp4n4LkwtzLk3ysOEy4tTTt",
    "https://drive.google.com/uc?id=1wLolEzBHWLawzFo0qodnDbDX9H0nsQ_K",

    "https://drive.google.com/uc?id=1lhnfWDJL-Sv-EFT47Klwci3Ub33nO-ry",
    "https://drive.google.com/uc?id=1Z4cONVn-7F45Qd4h_5cDihclMgrEoUZj",


    "https://drive.google.com/uc?id=1UjeczMI_JnKFp1cR4l6jbgYu-RVHnklp",
    "https://drive.google.com/uc?id=1ZD2PcuIpv9-o9AK5HqbWj_nBgPivHRL1",

    "https://drive.google.com/uc?id=1MYKUE4dlrp2EWbNROIw07X9r-nC3FANX",
    "https://drive.google.com/uc?id=1LsCx4on0PvKnMsb036310JvpH4-ILcVl",

    "https://drive.google.com/uc?id=19AM_CrO2AKdi4GY-SSC4yiK4MtqW6pIC",
    "https://drive.google.com/uc?id=1Pd5aWEJqzOtElM8JoMjqXmR2yv-sw6l_",

    "https://drive.google.com/uc?id=1M9XdAscOziWI7FTJMQMsCEcdU3FEsYUw",
    "https://drive.google.com/uc?id=1rmsVTwmhJS8EGFvWw4e9zHu7QOG-It58",
    ];

    const Gallery = () => {
            return (
                <div className="app-gallery">
                <div  style={{padding:"10% 1% 1% 1%", backgroundColor:"white", margin:"auto"}}>
                  <ResponsiveMasonry columnsCountBreakPoints={{350:1,750:2, 900:3}}>
                        <Masonry columnsCount={3} gutter="10px">
                            {images.map((image, i) => (
                                <Image
                                    key={i}
                                    src={image}
                                    style={{width: "100%", display: "block"}}
                                    loading="lazy"
                                />
                            ))}

                        </Masonry>
                    </ResponsiveMasonry><br/><br/>
                    <Link to="/works" style={{marginLeft:"45%"}}>
                        <Button className="View-more">VIEW MORE</Button>
                    </Link>


                </div>
                </div>

            )

    }


export default Gallery;