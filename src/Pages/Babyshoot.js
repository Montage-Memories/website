import React, {useState} from "react";
import img from "../Images/_SSK2120 (1).jpg";
import {Col, Image, Modal, Row} from "antd";
import BackButton from "../Components/BackButton/BackButton";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

const Babyshoot = () => {

    const images = [

        "https://drive.google.com/uc?id=1hpk2lso_248ndAQMEYVq5XZr12GEHuFU",
        "https://drive.google.com/uc?id=1vHY5CZtd3GnX1GUnzBJYfrPZn0R1_xYC",
        "https://drive.google.com/uc?id=1d-COKHghXoy1ErQKOD54Sm0ZaUQbGRV6",
        "https://drive.google.com/uc?id=1DQ66e7PaPSTVubVsNzbbiVr5y7K0QKfX",
        "https://drive.google.com/uc?id=1MvzhonTlosp4n4LkwtzLk3ysOEy4tTTt",
        "https://drive.google.com/uc?id=1YfRH-SnuamCwpM8SxPukfBWj840ltBGj",
        "https://drive.google.com/uc?id=1QUdXcZ4jfXZwSBfwnmPM4CxR-NRem73n",
        "https://drive.google.com/uc?id=1CLl2UmzES1dmcGzVADIQ5O61t49qsrIY",
        "https://drive.google.com/uc?id=1wLolEzBHWLawzFo0qodnDbDX9H0nsQ_K",
        "https://drive.google.com/uc?id=109ozVkBYFXsKByl4Hu_3INjsU4vVKdMc",
        "https://drive.google.com/uc?id=1kSzYy3IyIGhwk8t3HlpVUimcOKC_8xMr",
        "https://drive.google.com/uc?id=1O4FYlKC9f_Mk0txVDzuKqk2avgvqTeC9",
        "https://drive.google.com/uc?id=1w6TeJitgOtnIsVQi8VFaagA4rxZnotD3",
        "https://drive.google.com/uc?id=1yMWghFtmr3NwT6T-xSu0NyltfFENL-Ln",
        "https://drive.google.com/uc?id=1DXsPwwpKyxPERbfe_4NY2jKaHaB-zW9I",
        "https://drive.google.com/uc?id=1eTVzu4VEyIB0APyE-7IVcN9PnIds3vNk",
        "https://drive.google.com/uc?id=1lF_BCTiS-Vwc6pFQuHzY7bHKvI9GgZD7",
        "https://drive.google.com/uc?id=1Spp8NaOecuyfnxZog1tCnq_zfTohxUYW",
        "https://drive.google.com/uc?id=1eBKQur0NOMHuplBIuX6btLimA5uZslOk",
        "https://drive.google.com/uc?id=1LDieeyOHjHkz4JZ1J613xcZuhRbUcSF5",
        "https://drive.google.com/uc?id=1WWavH42XhG0DlV2kF8dQUhkdrOpiOEBo",
        "https://drive.google.com/uc?id=109DR4wPj87lbnzIhkhw8CMEISW_8GNcP",
        "https://drive.google.com/uc?id=1WHFaQxZrosrPnNVsM00eXWyF2-I9842p",
        "https://drive.google.com/uc?id=1Dnw-iuR9a6JI61CuM6BkxbHoN7b74noQ",
        "https://drive.google.com/uc?id=1c1xTmE4RZvSjIC7ABS9EII_KZ6leJZeu",
        "https://drive.google.com/uc?id=14rRK30gNyUtGNnt0ucFGYilDPAZ2GyDW",
        "https://drive.google.com/uc?id=1YMdLzW8CsN7RHOyWf0XZbfQKJ0WLzBDr",
        "https://drive.google.com/uc?id=1S06UHIK1ktErs7tlHol1bCN_YbOVO1PV",
        "https://drive.google.com/uc?id=1kB3psFJ4hiVH8DfM1mhelLbU0whsDfu9",
        "https://drive.google.com/uc?id=13jTMuU8cNHMxyJYzkTAfnHz40_y1Tqo-",
        "https://drive.google.com/uc?id=1m8kSg4uII6uKOV3k-eFt6bTtiduWiJah",
        "https://drive.google.com/uc?id=1JkRh0MNMWk27cp314mUipy3IsMmYgAyz",
        "https://drive.google.com/uc?id=1gFmu54NsobddA0fVADk4_l0TtCvlC1sh",
        "https://drive.google.com/uc?id=1tFi6zu47euyhuhiYbKyUkmbS91vAl5Ri",
        "https://drive.google.com/uc?id=1nT5LpRbzrxVMTiRM9PX5C8httRv0DurS",
        "https://drive.google.com/uc?id=1BemDstJLVvlzDRxPqeTV7iAW4jyp1txB",
        "https://drive.google.com/uc?id=1DtQxcLnrYJMI4ugVJoD_73Tb7GmHzKUf",
        "https://drive.google.com/uc?id=1wr_l04tFNyRRV_AoFC9Dqf48r3yrsojX",
        "https://drive.google.com/uc?id=1jUhzHXKpbu6emsHlgPGYWKZy7kaOmgGa",
        "https://drive.google.com/uc?id=1I01rJMBkzOkSAi2fD5LTUopmTOjS3rvE",
        "https://drive.google.com/uc?id=1lYVkmb1s6Wq4Z8Bax7xjZxvxIFWn_3F7",
        "https://drive.google.com/uc?id=12K_CEwHiud9TVBkthXrBNIMqpKDE8QDg",
        "https://drive.google.com/uc?id=14_jcVs46DOlauQQeL8Wsg8pkfw0w2BEv",
        "https://drive.google.com/uc?id=1ungc0tMvznEPNfcVyjAdKp4oqnIIxMn3",
        "https://drive.google.com/uc?id=1qtw-egAFqEtQs8ivzGmmoWVzc7cu6aNY",
        "https://drive.google.com/uc?id=1eg8X3uMuitp15GCkNXvhtjnGmZF0UVM5",
        "https://drive.google.com/uc?id=1kcACR_MdmhDYRIToyBkY4ds1qnFdnlEM",
        "https://drive.google.com/uc?id=1BSZ_rHHMGkq2rkmxLq9K0VJW7vSbWqrH",
        "https://drive.google.com/uc?id=1z-SVc33xC6_Fie8dJyKgUBrEgiff-OBS",
        "https://drive.google.com/uc?id=1ww7siG9AEoxhCivc8veo6-fnu66d-Rww",
        "https://drive.google.com/uc?id=19I6-g0eG33GIqW1WggdlNK6PBx6Sdxg2",
        "https://drive.google.com/uc?id=1z1Wyua9zlx8PCJ_5RHCIDZ8o4bdyEb3B",
        "https://drive.google.com/uc?id=1JmskhFT0K2xGhGlRDDfSmcFZfeNx0Gwi",
        "https://drive.google.com/uc?id=1U2gxsGOoOxr2Q3f59zgdEmu1AjycBJop",
        "https://drive.google.com/uc?id=1HeE5OTAV4CzZauCy9Zv3bcT-K2g69ixV",
        "https://drive.google.com/uc?id=1QAzJ-VZFqQ8mumWLgh88T9apTykaldjU",
        "https://drive.google.com/uc?id=1LW9vBhUeHqB_YMxVXxRWxA2VZ23u9wmN",
        "https://drive.google.com/uc?id=1fI0hKgHKr0N7tSRgCFtnXq-xx_sGNLEo",
        "https://drive.google.com/uc?id=1Z90PWioURwUOYjT86pGRywiLWYdllk4W",
        "https://drive.google.com/uc?id=152fFyaJoxmLyerOEllJ4C9i5qIh4hzl1",
        "https://drive.google.com/uc?id=18yL9joKwyShk-p6SddvNS9Invkrx8kIC",
        "https://drive.google.com/uc?id=1dBRn1oWMA_hL1nFJrLcrtEsGWs5gufKw",
        "https://drive.google.com/uc?id=1Ej2EpW9cAOM07uHDukxWBKilLJlqhYbZ",
        "https://drive.google.com/uc?id=1JZvbMnPlxc-5d17qlzWa0UQrWkK9RQbJ",
        "https://drive.google.com/uc?id=1skmkhQo_h69LDUVwLcbn8O2UzYfyU1F4",
        "https://drive.google.com/uc?id=1W_79RQWqgjkyLI-m9C3yHRbGmtClVgUi",
        "https://drive.google.com/uc?id=1h30ugYaveUjtBmSJg0pmzfqZlJvHsu9t",
        "https://drive.google.com/uc?id=1oX9KJIfx6N-O3DxWc-2YIodagtyz5nxR",
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

export default Babyshoot;