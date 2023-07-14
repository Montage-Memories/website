import React, {useState} from "react";
import {Col, Image, Modal, Row} from "antd";
import BackButton from "../Components/BackButton/BackButton";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

const Concert = () => {

    const images = [

        "https://drive.google.com/uc?id=1Q0fEN9HuSO6Yrg4H6la7-LEGCIm7THKs",
        "https://drive.google.com/uc?id=1i66nEUP4rpXdCh02OmIi8c7_lIKNPlBQ",
        "https://drive.google.com/uc?id=155CwCkGd4JmpeIBTi8a4flpUrVldEorD",
        "https://drive.google.com/uc?id=1GnWhp89CvvYqAHHl3Wp19YUYwVXUfxq9",

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

export default Concert;