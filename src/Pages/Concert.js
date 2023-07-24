import React, {useState} from "react";
import {Col, Image, Modal, Row} from "antd";
import BackButton from "../Components/BackButton/BackButton";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

const Concert = () => {

    const images = [

        "https://drive.google.com/uc?id=1tlQeGqsFd0GeDu1sdWLGx0sovlz_oX-a",
        "https://drive.google.com/uc?id=1-DY29rbIolTpZpIKurXvWl2qrnHTpc2Y",
        "https://drive.google.com/uc?id=16cacj5tSjLVeC4MAQY9NOKxxYOOW3kfT",
        "https://drive.google.com/uc?id=1nW45BDJAIdD-1ZBfyV1mpBNf3UautXP4",
        "https://drive.google.com/uc?id=1LAR3LocLlj5hGKqKPjlLUOSd-GYRpOS8",
        "https://drive.google.com/uc?id=19XahtHf78bgpW-xGr1NDtUhS8WnWWxnX",
        "https://drive.google.com/uc?id=1qdRau-cJCyn4ryhlTOkkivnY3eUamq16",
        "https://drive.google.com/uc?id=1-ChcCtZGmBAIHZZOxQkF-w6gUhGwRHNv",
        "https://drive.google.com/uc?id=1j1AOalvdC2MH1Vlz0r2QGVOEkQ23dGRr",
        "https://drive.google.com/uc?id=130B-Mtp3RDwaBmS-GXJs4jhoGqvglAOQ",
        "https://drive.google.com/uc?id=1-8v-jFP0fl5eSO_cKAn5ExI1PB4qMrGR",
        "https://drive.google.com/uc?id=1UjeczMI_JnKFp1cR4l6jbgYu-RVHnklp",
        "https://drive.google.com/uc?id=1FgtUfh8XLJdTdQp_E_sCka8RTcw1cUvS",
        "https://drive.google.com/uc?id=1JKGux3fn4P0XXiGXGGdV726t1arH-yCs",
        "https://drive.google.com/uc?id=1i2kKPQoP4M36a5wxN5cdythzBcc0ELr3",
        "https://drive.google.com/uc?id=1EZgMGp97XbqEmmfNFhsijZ4gocK-_ieq",
        "https://drive.google.com/uc?id=17DYFS15BWnS72oyt1Qq8MEInqFHRu5r0",
        "https://drive.google.com/uc?id=1G-n0FPG8PQDVrZH2g9g2od2schALZAL6",
        "https://drive.google.com/uc?id=1ZD2PcuIpv9-o9AK5HqbWj_nBgPivHRL1",
        "https://drive.google.com/uc?id=1RM7GqEL-vKX7KnX74j6RNWxuvGJ7YbPi",
        "https://drive.google.com/uc?id=1Vz3baG08AP90ZqYsN5y5yukWItvBCUkK",
        "https://drive.google.com/uc?id=13f5xetFpVVStcRbQrLHVrzkeUIRtgIkj",
    ];

    return (
        <div className="Concert">
            {/*<div className="Backbutton">*/}
            {/*    /!*<BackButton />*!/*/}
            {/*    <h1>PORTFOLIO PHOTOGRAPHY </h1>*/}
            {/*</div>*/}
            <div style={{padding:"10% 1% 1% 1%", backgroundColor:"white"}}>
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