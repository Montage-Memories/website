import { useParams } from 'react-router-dom';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import {Image} from "antd";
import React from "react";

const dataset1 = [
    { id: 1, imageUrl: "https://drive.google.com/uc?id=1tDKohZT2zQMPrOopsfC-kr-72RfefE3t" },
    { id: 2, imageUrl: "https://drive.google.com/uc?id=1Dsefa6WLKCMkAZYPJ-QMFFPMY0IqyyDS" },
    { id: 3, imageUrl: "https://drive.google.com/uc?id=1U6Y5sMR_NiwDX5pbqWxukaI9MtU_Pg9B" },
    { id: 4, imageUrl: "https://drive.google.com/uc?id=12jxJxw5PL0v80HA6JCo-JQwfUzVyddKa" },
    { id: 5, imageUrl: "https://drive.google.com/uc?id=1jVsJlHRWeVMp9n7XWHrQYkHY5XLOfDDO" },
    { id: 6, imageUrl: "https://drive.google.com/uc?id=1zig5MH_W970NS-fIgVNPtFu2em3w95aW" },
    { id: 7, imageUrl: "https://drive.google.com/uc?id=1eZ00k9-b0V_mUX5za1_jWjNKWqTbV_uu" },
    { id: 8, imageUrl: "https://drive.google.com/uc?id=1mvtNl493bZfLR6tE85OzkxXGpfVg7Jer" },
    { id: 9, imageUrl: "https://drive.google.com/uc?id=1Bno2i-M_chv0MzE5QMHpwzBoY8K94p0P" },
    { id: 10, imageUrl: "https://drive.google.com/uc?id=1OkMURZOVAUvAT2MvJriOx-Ka37IBOHMq" },
    { id: 11, imageUrl: "https://drive.google.com/uc?id=1Y8IxvotXRxEKeqgF-hKMx_-OmOhnPxSJ" },
];

const dataset2 = [
    { id: 1, imageUrl: "https://drive.google.com/uc?id=1i0jbAfRXA8EiYCpsTxAGgMoJx2TQfOZJ" },
    { id: 2, imageUrl: "https://drive.google.com/uc?id=1FWC7h_IUNutblEAv0Y57L49aV-8UMJ_S" },
    { id: 3, imageUrl: "https://drive.google.com/uc?id=1ijUAeOZSqAtmAtIlI9iLT0H1OnZGBk6v" },
    { id: 4, imageUrl: "https://drive.google.com/uc?id=1oKp6mHW1XpoRFo1THX6pryhccZEtnLtb" },
    { id: 5, imageUrl: "https://drive.google.com/uc?id=1610cDm8l2tM8cHwsOQnmQDuFodMB11_M" },
    { id: 6, imageUrl: "https://drive.google.com/uc?id=1yDjBMcVSbUKPMfvo0s_SYkOoZ1j8wmRm" },
    { id: 7, imageUrl: "https://drive.google.com/uc?id=1Cbd-TLRwx3Nc0NNSSsleaklWaq750qcO" },
    { id: 8, imageUrl: "https://drive.google.com/uc?id=1v_bnUInvBfNOD8BqCg9WinSzSova4Fb9" },
    { id: 9, imageUrl: "https://drive.google.com/uc?id=103xBIpLW4kd84nT-ytDvQmLTro6czgOg" },
    { id: 10, imageUrl: "https://drive.google.com/uc?id=1aKTMU3WQNad1Ykx-NQRxFFGAglAxV_oa" },
    { id: 11, imageUrl: "https://drive.google.com/uc?id=11cA7ZEDLNuP5WCct7nfKQxSis5_DMyp1" },
];

const dataset5 = [
    { id: 1, imageUrl: "https://drive.google.com/uc?id=1RFrxXOgTcKKuI2w2eSTBeOLmFpiqn9YO" },
    { id: 2, imageUrl: "https://drive.google.com/uc?id=1epvcSCH2_YgfYKep-lXX_xKvE_mpI1-m" },
    { id: 3, imageUrl: "https://drive.google.com/uc?id=1PKcw-aN-YJrINKiCqHy3MKG9idpq49jV" },
    { id: 4, imageUrl: "https://drive.google.com/uc?id=144jyikXgjObJVkr4afHhXQyyF0hkxKwl" },
    { id: 5, imageUrl: "https://drive.google.com/uc?id=1FJKknOPgJKkvXpbyLeErIE8MEXwbdL5h" },
    { id: 6, imageUrl: "https://drive.google.com/uc?id=1-ys0r_w4gHEbIooapFcLagL3XHoe4m3d" },
    { id: 7, imageUrl: "https://drive.google.com/uc?id=1XnRubSZPgxfsK2fJeP8USsZJjUV0XrTH" },
    { id: 8, imageUrl: "https://drive.google.com/uc?id=1JQmC1uQfanwIZ7YvJnFozTysRAId57Bm" },
    { id: 9, imageUrl: "https://drive.google.com/uc?id=1JIi6hBfpPx3ysfRnSazRgPxvEKHsvA4t" },
    { id: 10, imageUrl:"https://drive.google.com/uc?id=1-94lrX9jgYN-dDmhgRdg2ACHCDmZddQG" },
    { id: 11, imageUrl:"https://drive.google.com/uc?id=1oVOufbVyW8ac8Ba3WMTkwTx73Hf8mHm4" },
    { id: 12, imageUrl:"https://drive.google.com/uc?id=1ZqwLyFqUpTAzgoAS-VQOCqIT4FLsU_Ua" },
    { id: 13, imageUrl:"https://drive.google.com/uc?id=1ppm8upbyaeG4L6r0Kyuu1MgCxpRVMowG" },
];

const dataset6 = [
    { id: 1, imageUrl: "https://drive.google.com/uc?id=1uxklQt19zKVZh-iDzfbAbXjfZ6w8jMlb" },
    { id: 2, imageUrl: "https://drive.google.com/uc?id=1mO20ZglBaMVllZ_26PnLatkgIfosNaJo" },
    { id: 3, imageUrl: "https://drive.google.com/uc?id=1h4y1rH0CJDvNECSm8B_-zLD4EjUpxcbA" },
    { id: 4, imageUrl: "https://drive.google.com/uc?id=17ClcdFZApP1efqp5aIfNvOQdkFjL8PDt" },
    { id: 5, imageUrl: "https://drive.google.com/uc?id=1_j5uBwVgAufdcAOtAuuRcEuj1HIvp2Wm" },
    { id: 6, imageUrl: "https://drive.google.com/uc?id=1xtVzYbIZ_6bmD2xG971v2cmrTg-GrQQL" },
    { id: 7, imageUrl: "https://drive.google.com/uc?id=1LBiK42f0imA6xAmy8l58cyWnY8KHEI0x" },
    { id: 8, imageUrl: "https://drive.google.com/uc?id=1HlRsU_cENWlCueBFMfo3anGmUfUI3_Fm" },
    { id: 9, imageUrl: "https://drive.google.com/uc?id=1I7hBb2pVhiZ1z5AUT3UrfQ6AtsOy6Ggz" },
];

const dataset11 = [
    { id: 1, imageUrl: "https://drive.google.com/uc?id=1Ah7-P2dMONWn3ZYoNlwU3pchmOTqzN46" },
    { id: 2, imageUrl: "https://drive.google.com/uc?id=1jkRN83TvN7ulayZy-4HqJFhjMeRl3Tha" },
    { id: 3, imageUrl: "https://drive.google.com/uc?id=1c5PyI74i24vD1L75KWN0CzjH9R6POHw4" },
    { id: 4, imageUrl: "https://drive.google.com/uc?id=1dn7odG0CZXlNurhC0nVShfpJXnSmgZUh" },
    { id: 5, imageUrl: "https://drive.google.com/uc?id=1OCDgFSE9HQoyz_jlSoOkUtXq56hp1kB8" },
    { id: 6, imageUrl: "https://drive.google.com/uc?id=10psc2bjlcIv9HAObXUk6qBEfH2buiZt3" },
    { id: 7, imageUrl: "https://drive.google.com/uc?id=15qeYqDp2B5s4heggwmOVh7VrndaKeRNW" },
    { id: 8, imageUrl: "https://drive.google.com/uc?id=1O9CcL7qAbqV54We7pkAiLv82z0hmVYii" },
    { id: 9, imageUrl: "https://drive.google.com/uc?id=1vFvJO66t1FafqSo2SWFHIIpwOlLuqjTF" },
    { id: 10, imageUrl:"https://drive.google.com/uc?id=16HBw_MP3h9kvfsKdYlmZ2pTQ3fwr3e-h" },
    { id: 11, imageUrl:"https://drive.google.com/uc?id=13VY-TsraQfzIHZ7lRJ2XL6C-rBezRuDg" },
    { id: 12, imageUrl:"https://drive.google.com/uc?id=1ttz-Q9qVhL6bQhRSFCqmowO6uqfglfdm" },

];

const dataset14 = [
    { id: 1, imageUrl: "https://drive.google.com/uc?id=1IENbur61Rx5rrrubqqO6eaYPLyGV4Hfo" },
    { id: 2, imageUrl: "https://drive.google.com/uc?id=1WLI80qletXWQKNGIyPSsD8r11wlLBwE-" },
    { id: 3, imageUrl: "https://drive.google.com/uc?id=1zi_jV6n_JBUrZtC14h4fU8j_xaR7vPP3" },
    { id: 4, imageUrl: "https://drive.google.com/uc?id=1WaZqCXiGnxH10aCLLM8WG8is-zRnIwp1" },
    { id: 5, imageUrl: "https://drive.google.com/uc?id=1RCP49xgtGwkyD56eWXMyEGXV-yr2GoPN" },
    { id: 6, imageUrl: "https://drive.google.com/uc?id=1PafbsZUeV6W2fKVyYwZgqEX7HjE2ex41" },
    { id: 7, imageUrl: "https://drive.google.com/uc?id=1bfok9kmgU6s3ELfpZw9GD5hfafLtBv27" },
    { id: 8, imageUrl: "https://drive.google.com/uc?id=1AAB1OAx9scQj0rOZutDcclSmP21Goxx-" },
];


const ImageView = () => {
    const { datasetId } = useParams();

    let selectedDataset;
    console.log(datasetId)
    if (datasetId === 'dataset1') {
        selectedDataset = dataset1;
    } else if (datasetId === 'dataset2') {
        selectedDataset = dataset2;
    }else if (datasetId === 'dataset5') {
        selectedDataset = dataset5;
    }else if (datasetId === 'dataset6') {
        selectedDataset = dataset6;
    }else if (datasetId === 'dataset11') {
        selectedDataset = dataset11;
    }else if (datasetId === 'dataset14') {
        selectedDataset = dataset14;
    }
    return (
        <div className="Image-view">
            <div style={{margin:"auto",padding:"10% 1% 1% 1%", backgroundColor:"white"}}>
                <ResponsiveMasonry columnsCountBreakPoints={{350:1,750:2, 900:3}}>
                    <Masonry columnsCount={3} gutter="0px">
                        {selectedDataset.map((item) => (
                            <Image
                                key={item.id}
                                src={item.imageUrl}
                                style={{width: "100%", display: "block"}}
                                loading="lazy"
                            />
                        ))}
                        {/*<img key={item.id} src={item.imageUrl} alt="Gallery Image" />*/}
                        {/*))}*/}
                    </Masonry>
                </ResponsiveMasonry>
                {/*<img key={item.id} src={item.imageUrl} alt="Gallery Image" />*/}

            </div>
        </div>

    );
    // Rest of the code...
};
 export default ImageView;
