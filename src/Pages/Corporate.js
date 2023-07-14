import React, {useState} from "react";
import {Col, Image, Modal, Row} from "antd";
import BackButton from "../Components/BackButton/BackButton";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

const Corporate = () => {

    const images = [

        "https://drive.google.com/uc?id=10V2HaqC1gN_iZIrTSsnz5ioD5_Us8YcO",
        "https://drive.google.com/uc?id=1vzgqX26ZgvRnseJYXHEckq8LG1eOsEZH",
        "https://drive.google.com/uc?id=1gWYotyaiyU0p4nulKSwHDb3KLh3ucqf6",
        "https://drive.google.com/uc?id=1ubbakPqPB0e1gYdspr-Loxa4SGPGsK93",
        "https://drive.google.com/uc?id=1zT48UeEAwMj-Oj-KMdQq5eZPz0kJP1AT",
        "https://drive.google.com/uc?id=164E0iOI4icKKAZC6a2XK9bGAOnd7UcYO",
        "https://drive.google.com/uc?id=12g0wKWYgfGOIyeGbujnHn2ctVpwPbhXl",
        "https://drive.google.com/uc?id=1elYR59_6cmL5eMLGl6j0etOTxm_qhHpv",
        "https://drive.google.com/uc?id=1E08c_I9HHUe6ERohmF7LiWo7zjhplOxv",
        "https://drive.google.com/uc?id=1RgfaA9NuADcZ0tMp2dG8EOuolrhhoGsa",
        "https://drive.google.com/uc?id=1dZwhfFnSuMj__VWED9aBpdr72UPLyoex",
        "https://drive.google.com/uc?id=1jxApW9Ky-UdzbNJF7G5vb_fAwUAkV8z2",
        "https://drive.google.com/uc?id=1OIlI6gl5tw7-6bqyZgCWjq1gjQZQyhFX",
        "https://drive.google.com/uc?id=1zFZf5kDnSz8nbP2piqWCu18Rj0iH0Qy1",
        "https://drive.google.com/uc?id=1uZAmYIuIQn4kPTnmoGpCB5ppbsgL8lGp",
        "https://drive.google.com/uc?id=1hoZvtRlp-x-ZiaQFwySznegQ-pqL4lg6",
        "https://drive.google.com/uc?id=1qhuRQ0na3ipq4HZTJOoY4GRkAkOStQz0",
        "https://drive.google.com/uc?id=1_KHpXES2Yyv9y_pMN1YF6Xir1cNkIVnR",
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

export default Corporate;