import React, {useState} from "react";
import {Col, Image, Modal, Row} from "antd";
import BackButton from "../Components/BackButton/BackButton";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

const Puberty = () => {

    const images = [

        "https://drive.google.com/uc?id=1TvIQPtrclwZkWo3JFagwMKupHVmdo5Q3",
        "https://drive.google.com/uc?id=1LsCx4on0PvKnMsb036310JvpH4-ILcVl",
        "https://drive.google.com/uc?id=19UULFGGfmICPPXusx8qG0f3Ib73CFm-m",
        "https://drive.google.com/uc?id=1tIvq_FsXJrxE5oV_Vydss0l9fXws3m-P",
        "https://drive.google.com/uc?id=1BTJcuZDUSDeDX31vPYTRJVFdkaQgLUY-",
        "https://drive.google.com/uc?id=1Eq0DUIyqibqHROUxyKiLXkWIkKLJSsze",
        "https://drive.google.com/uc?id=1aCt3CfxYhaf4fcn2Jn9T5psd7BC39COl",
        "https://drive.google.com/uc?id=1KA2HCHQL16z3oSPxCxfXAy6_mwhGnR3L",
        "https://drive.google.com/uc?id=1BkJjqWs_MPdZiRgKRS0NrUQBornrcQlJ",
        "https://drive.google.com/uc?id=1FjgBT3XT3UWnjUhM3XskKJV6vinrwdqW",
        "https://drive.google.com/uc?id=18BzEsoJomkeerth5u_Data5wKLvnFvfj",
        "https://drive.google.com/uc?id=1oF-D--nsHpMr56Q00i7DTxVRp6vVsrAI",
        "https://drive.google.com/uc?id=1ANqftmBvpfRQ1k3xzozZvzyiED5L7Rb7",
        "https://drive.google.com/uc?id=12xFd1IOTOxbMHZ9Wuf-P9kk6lLWl7i12",
        "https://drive.google.com/uc?id=1W8TSBWbCzZJ9lG35w2dNvqfpV_j1FDvM",
        "https://drive.google.com/uc?id=1JjHlxTFVHRGaZYotq91awVGdOakxAwgD",
        "https://drive.google.com/uc?id=1zlk4eCGJZt2LjieYg0yw88-4_QFH15jV",
        "https://drive.google.com/uc?id=1pIFUVeQJjbicOc_7IbNm7EWnRoI6d9_Q",
        "https://drive.google.com/uc?id=1i9V3Vlc1cSpYAZmRNSOEJUqWKnTqaS0G",
        "https://drive.google.com/uc?id=1f64NjgU_FCXYL1umHKzj3oF8ZRZ7ZaA2",
        "https://drive.google.com/uc?id=1pclLCOY5hEjJSGsAPjhSeoizYXSelT3J",
        "https://drive.google.com/uc?id=1tkCVKpiHAR-NHal8ZMQtKSrjV6PkJl-e",
        "https://drive.google.com/uc?id=1pDIgmNK-27ZotuqWMCce-VweMuVdt7uu",
        "https://drive.google.com/uc?id=14tnbu0YmwUCM582tsx1iZjbNVbLUtevX",
        "https://drive.google.com/uc?id=109XZCYr2JAU5lUw8uzVKDcimJBWIQIcp",
        "https://drive.google.com/uc?id=1OGez2RvSj2wu4nhngrKaV10awAJW8LD2",
        "https://drive.google.com/uc?id=1Il-63oMxBhCKq9SoIfl3moHRcqtdGvK8",
        "https://drive.google.com/uc?id=1y0IHlEjgDR-vAh_KkKPIOto2kc0stT9R",
        "https://drive.google.com/uc?id=1MYKUE4dlrp2EWbNROIw07X9r-nC3FANX",
        "https://drive.google.com/uc?id=1F49hYCbMXlFxAIn53OtK2yviogaAKw-7",
        "https://drive.google.com/uc?id=1fDNiDZVLLTe0kisrthlmYiL-BM-zluSd",
        "https://drive.google.com/uc?id=1vFaN0H3cMiDpHUNkkhtcXryBfPeGgHpE",
        "https://drive.google.com/uc?id=1Ba9ChLUVfEzWlkiRkGKlDty0JHsNAiyw",
        "https://drive.google.com/uc?id=1HllKeDeyqh5wwlzIJX-1_gElvI0rLXtf",
        "https://drive.google.com/uc?id=1c2vezTLYswDXpTNFb3vThUkedFuiJU9q",
        "https://drive.google.com/uc?id=1IDuPiQ-mxad7nAqznjPo8OEyHaiwG3S5",
        "https://drive.google.com/uc?id=19TUE0xnKYa2wc75t6POdgroBKmBVzXuQ",
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

export default Puberty;