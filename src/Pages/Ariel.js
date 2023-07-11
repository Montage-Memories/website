import React, {useState} from "react";
import img from "../Images/_SSK2120 (1).jpg";
import {Col, Image, Modal, Row} from "antd";
import BackButton from "../Components/BackButton/BackButton";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

const Ariel = () => {

    const images = [

        "https://drive.google.com/uc?id=12g6qtWa44frsHmWUEjky1ExM-n30BQa3",
        "https://drive.google.com/uc?id=1r1YIqPxv3aXk5awRKctlyMPJ3CIOqnwb",
        "https://drive.google.com/uc?id=1pnUdfkguwNUqoDpe4ztMUYMzaQxBEcQA",
        "https://drive.google.com/uc?id=1o5obRUti6X980fhl5_v3dCctrXR9AC2e",
        "https://drive.google.com/uc?id=146siusfcVQnI6fboQWpciB09A4CODXSJ",
        "https://drive.google.com/uc?id=1LqgQpJfN4u-ZnKiBCE9MPTI8wML8JUee",
        "https://drive.google.com/uc?id=1zXqvtWOkj8HzzvQ47jY8HX4EGP235E6y",
        "https://drive.google.com/uc?id=14K9nlyD7_MPW5KvaPTbhq8hek_9yR4Ot",
        "https://drive.google.com/uc?id=1wPibbMzCksA-vYCbx3a8SLIp1TdmKiBr",
        "https://drive.google.com/uc?id=1BIfGpjKKKdP4o0pNrl9yq4D0S78jMHyC",
        "https://drive.google.com/uc?id=1qXv4MiuQWV7O7ZuiZPv4Pyy3cEWxN6uk",
        "https://drive.google.com/uc?id=1tnX5xANYAjF0n6BX4iRUqwOr3J5bff5u",
        "https://drive.google.com/uc?id=17LpgvsQJbCLaNDrhTa42QgH4kiSINGWm",
        "https://drive.google.com/uc?id=1EW9fyfLiv4W8GwUzCqNv6KVhKt8SspbZ",
        "https://drive.google.com/uc?id=1b5uwcADs_S3d3zrLfdOc3O76YBVOhifp",
        "https://drive.google.com/uc?id=1lhnfWDJL-Sv-EFT47Klwci3Ub33nO-ry",
        "https://drive.google.com/uc?id=1N5Ehe-GjzyKF8-tPx6R0jg-kDMpNoRKN",
        "https://drive.google.com/uc?id=1dTS4nwk1e9TCIl2Q7QSwxUKKYg-Y03b0",
        "https://drive.google.com/uc?id=1BCC3-bxY0i6c9mPqhn3zzcaGyEXnYTlT",
        "https://drive.google.com/uc?id=1yZypsfzKXhCYfZ4NGRhGg43IBAaf8tNL",
        "https://drive.google.com/uc?id=1Nm9D6Fr4GP7E3-fpKeghD0F6OMwJsAJY",
        "https://drive.google.com/uc?id=12iqacd8d4WdWWRkPla8_XbxxXZCfwyYd",
        "https://drive.google.com/uc?id=1Z4cONVn-7F45Qd4h_5cDihclMgrEoUZj",
        "https://drive.google.com/uc?id=1Ct3kla838MAYZSzjsNNNhr7_B-mBE9Oh",
        "https://drive.google.com/uc?id=1FoVm5QfhFkj8lTpmdILnzltpfyIfbEeW",
        "https://drive.google.com/uc?id=1yOVWgnirIDuDU1xIckfwUxcmT_QEwTdV",
        "https://drive.google.com/uc?id=1eZ_4mJeYZwvK-HFOz4ql9SyPx3ahreZ-",
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

export default Ariel;