import React, {useState} from "react";
import img from "../Images/_SSK2120 (1).jpg";
import {Col, Image, Modal, Row} from "antd";
import BackButton from "../Components/BackButton/BackButton";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

const Fashion = () => {
    const [visible, setVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const images = [
        "https://drive.google.com/uc?id=1c-YGujj4RK6DzyXDkgUWsxjH8iG6ZFM5",
        "https://drive.google.com/uc?id=1OX_ZIyie_PchZu8nv-EKv-B5OEkl68s4",
        "https://drive.google.com/uc?id=1SKXlWC11LVma1DGdCnbM83gfwLr6b0N8",
        "https://drive.google.com/uc?id=1iW2x915adn2OAwi_cIWe6Mr8u7cBstgx",
        "https://drive.google.com/uc?id=1b5omGa5hPB6WSFWje8CgrVmcKpgw3kzP",
        "https://drive.google.com/uc?id=1lYq_CbO8xBUFPndOuT9ryE5dp8cV4n-g",
        "https://drive.google.com/uc?id=1Rl7m90-MXnu_jjjysSLiiMltvwl9lNAj",
        "https://drive.google.com/uc?id=1scgmpuYt5AFig-lmVql2_H5b9gZUVDz7",
        "https://drive.google.com/uc?id=1BxUEhkHdGUs7XI_4HpInFBqP1DPAUlhA",
        "https://drive.google.com/uc?id=1kZnrM2vmh1uvtcvoCqCIPqZlY2XA3p2X",
        "https://drive.google.com/uc?id=1Og51jKOwxOBuv8Zr6P2YMJ_ZuyxYSAyl",
        "https://drive.google.com/uc?id=1SkrL7xIZugnHcODbmVyyE4y-Go3_ysjg",
        "https://drive.google.com/uc?id=1XBT8xiZ5sAccs-DX8Wp8xf4pnwPtRwh-",
        "https://drive.google.com/uc?id=1GBjPnjtGuzPxhsadHleYeA3ZAVI8XsLg",
        "https://drive.google.com/uc?id=1c-YGujj4RK6DzyXDkgUWsxjH8iG6ZFM5",
    ];

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setVisible(true);
    };

    const handleModalClose = () => {
        setVisible(false);
    };

    const handleTouchMove = (event) => {
        const target = event.target;
        target.style.opacity = '0.7';
    };

    const handleTouchEnd = (event) => {
        const target = event.target;
        target.style.opacity = '1';
    };
    return (
        <div>
            <div className="Backbutton">
                {/*<BackButton />*/}
                <h1>FASHION PHOTOGRAPHY</h1>
            </div>
            <div style={{padding:"5%", backgroundColor:"white"}}>
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

export default Fashion;