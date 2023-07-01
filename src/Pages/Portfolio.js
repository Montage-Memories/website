import React, {useState} from "react";
import img from "../Images/_SSK2120 (1).jpg";
import {Col, Image, Modal, Row} from "antd";
import BackButton from "../Components/BackButton/BackButton";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

const Portfolio = () => {

    const images = [
        img,
        img,
        img,
        img,
        img,
        img,
        img,
        img,
    ];

    return (
        <div>
            <div className="Backbutton">
                {/*<BackButton />*/}
                <h1>PORTFOLIO PHOTOGRAPHY </h1>
            </div>
            <div style={{padding:"2%", backgroundColor:"white"}}>
                <ResponsiveMasonry columnsCountBreakPoints={{350:1,750:2, 900:3}}>
                    <Masonry columnsCount={3} gutter="10px">
                        {images.map((image, i) => (
                            <Image
                                key={i}
                                src={image}
                                style={{width: "100%", display: "block"}}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </div>

    )
}

export default Portfolio;