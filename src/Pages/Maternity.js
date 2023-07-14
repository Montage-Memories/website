import React, {useState} from "react";
import {Col, Image, Modal, Row} from "antd";
import BackButton from "../Components/BackButton/BackButton";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

const Maternity = () => {

    const images = [

        "https://drive.google.com/uc?id=18tcd7WhXrEu53z9wbfc14ibGvgOY0fij",
        "https://drive.google.com/uc?id=1hOkBad8vi9iCwoudTvNqWcI5qLXF4z9N",
        "https://drive.google.com/uc?id=1X3J8RLYDrI878f9kzPdEcDolOl8kOF_J",
        "https://drive.google.com/uc?id=1LzJUj1aT-DxQwjcw9R657IreHaKZdhrL",
        "https://drive.google.com/uc?id=109_pn4eSsivfbO54JsuRhkDO3DDJgN4t",
        "https://drive.google.com/uc?id=1vRf17OMJHDcheTSknqYWWJxUHZvmA0SP",
        "https://drive.google.com/uc?id=1qpB3xM1NV7S-GUex7rzfAgRa640E3gCq",
        "https://drive.google.com/uc?id=1dBvQwOM0X1566vMhHYz_8w1FnxLpOfXx",
        "https://drive.google.com/uc?id=1JEKh9gv4QiFZrAWYqU3cOMZt_JDwmrh6",
        "https://drive.google.com/uc?id=1PYxosmKHa3DJNfcqWr8eJ7WFDfWGQSYG",
        "https://drive.google.com/uc?id=1N97S5yRfg_lvux24gvGGDODAJlAAcrQH",
        "https://drive.google.com/uc?id=177GU80_gOEEd5nWa0rXhqDQybeDY6O6W",
        "https://drive.google.com/uc?id=1i-kk1N6sN71J9GbQKMnofBX9vhdzqq2n",
        "https://drive.google.com/uc?id=1y8ZX18fxnhs_aUS5L8C3RCxluV1doq0l",
        "https://drive.google.com/uc?id=15xCZlHFggWNfS7NM_FmGd3SKatq4B2_e",
        "https://drive.google.com/uc?id=1n96hDRIKqfh6AvBahLyRi5L8rqzpO1CN",
        "https://drive.google.com/uc?id=1ZJtrX97_hDb-XDsjrHq1o-euwGy9LTP6",
        "https://drive.google.com/uc?id=1fD3SKBAC2CpglBdY034P1El3fKmg-EXJ",
        "https://drive.google.com/uc?id=14iCr-_EYQAIxfRHLSbuzF5MzWZEwmncj",
        "https://drive.google.com/uc?id=1sA4bcQ8TPZlDLNK8QurqEQqVGebhcT8X",
        "https://drive.google.com/uc?id=1wkj5eb_dv4rR5qgNmv-LmwJapwb3R0VC",
        "https://drive.google.com/uc?id=1UYokpHkVFSF5jfcrqWOsgB_RJHBYB3NZ",
        "https://drive.google.com/uc?id=1_EAwLNPPk4laYvOX72pzJExJhHf9xYD1",
        "https://drive.google.com/uc?id=19AM_CrO2AKdi4GY-SSC4yiK4MtqW6pIC",
        "https://drive.google.com/uc?id=13md0m9tDHCeAvTjgIQ5HjnuevcdhHIq_",
        "https://drive.google.com/uc?id=1un2juAHWfZc7AIOLLbXVEKxujd7QC46m",
        "https://drive.google.com/uc?id=1K-LS1O-WjkcPjjO-ffEUPQpTo1KghOdH",
        "https://drive.google.com/uc?id=1ItSKy57M4ILT6GedWo12ptRW8vvgO3Zz",
        "https://drive.google.com/uc?id=1eY7XFazuSBnAJEpKRmw5XgxYMNbc4BFU",
        "https://drive.google.com/uc?id=1b7z6frBaIOgqCx3gegMxVpYfFsCk5vtz",
        "https://drive.google.com/uc?id=1R6TBAiwbE1fNrg9C9Hb1FisFv6lDjDsV",
        "https://drive.google.com/uc?id=1bGx2oAI8alwQ3BiYB3pfincfsCo5WxGt",
        "https://drive.google.com/uc?id=1DfjAzknDOysS0Akg7AuYEaTVVkbMNNv4",
        "https://drive.google.com/uc?id=18O4B5ou1akJQVVwLBo1-oR8799m0Pugi",
        "https://drive.google.com/uc?id=3i2szVoas9WXJrgGKpIQmkyx9Fa1klaz",
        "https://drive.google.com/uc?id=1Taa8ssDvf0AitnCFKafwpOBOfgzto2CP",
        "https://drive.google.com/uc?id=1Pd5aWEJqzOtElM8JoMjqXmR2yv-sw6l_",
        "https://drive.google.com/uc?id=1oAyM7zGtXV3dqTlw5tMT1ny73GP9-HX5"

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

export default Maternity;