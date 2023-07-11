import React, {useState} from "react";
import img from "../Images/_SSK2120 (1).jpg";
import {Col, Image, Modal, Row} from "antd";
import BackButton from "../Components/BackButton/BackButton";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

const Portfolio = () => {

    const images = [
        "https://drive.google.com/uc?id=1s5dNLCjDww1yHG5ge_lcDR9Ub5tpHlmO",
        "https://drive.google.com/uc?id=1zU-iTXDoYl-q8Ls29QnS5LC2VomX9uVH",
        "https://drive.google.com/uc?id=1M9XdAscOziWI7FTJMQMsCEcdU3FEsYUw",
        "https://drive.google.com/uc?id=1pgud-zwm9Jop7M2E4yATrtlxeQxEU4_b",
        "https://drive.google.com/uc?id=1L4vBEkYNDp-AW3fjLEQg1126FNZOJZW5",
        "https://drive.google.com/uc?id=1glr9DKExJ67RYhd20la1wIP2zEGlXm1v",
        "https://drive.google.com/uc?id=1hXRmKlihEKegiG11e9c3DoRgTCBw74kd",
        "https://drive.google.com/uc?id=1ZOInyFqGcTn2NXyn6jFWCAnY2xA4jw4v",
        "https://drive.google.com/uc?id=19xXOa0Rkjbl77f2uoiYsnLGbWaTrw4Hm",
        "https://drive.google.com/uc?id=1GyWHkWOZG1vGD9p8lKHs2KxPiaRugWgP",
        "https://drive.google.com/uc?id=1rmsVTwmhJS8EGFvWw4e9zHu7QOG-It58",
        "https://drive.google.com/uc?id=1y8mTiz-Hb5yGqOSqeKSJUK7B1ot0YVds",
        "https://drive.google.com/uc?id=1FsgDkkMTKhzWzi-3EVZW7ZoMzx8XrJXO",
        "https://drive.google.com/uc?id=10BKlRWeV0uzKC7_XlA0oaQ-jI26nINa7",
        "https://drive.google.com/uc?id=1UmCEjE14mdi805HcXf_Rs-JxdYfcGrCk",
        "https://drive.google.com/uc?id=1MbpLNhnqNmEki3F0lVx5BHID5K4fZY1Y",
        "https://drive.google.com/uc?id=1kIFa2U4hoLuNW7OUu_P_h9gMHUNAM5pZ",
    ];

    return (
        <div>
            {/*<div className="Backbutton">*/}
            {/*    /!*<BackButton />*!/*/}
            {/*    <h1>PORTFOLIO PHOTOGRAPHY </h1>*/}
            {/*</div>*/}
            <div style={{padding:"1%", backgroundColor:"white"}}>
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
                </ResponsiveMasonry>
            </div>
        </div>

    )
}

export default Portfolio;