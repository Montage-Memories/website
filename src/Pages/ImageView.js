import { useParams } from 'react-router-dom';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import {Image} from "antd";
import React from "react";

const dataset1 = [
    { id: 1, imageUrl: "https://drive.google.com/uc?id=14mv0zkAHHVV-rlP4QELZ-fyIC3lR6s9W" },
    { id: 2, imageUrl: "https://drive.google.com/uc?id=12Vl9zQQo8fhv-xhOmGojaxmb88VKtRMD" },
    // ...
];

const dataset2 = [
    { id: 1, imageUrl: "https://drive.google.com/uc?id=14mv0zkAHHVV-rlP4QELZ-fyIC3lR6s9W" },
    { id: 2, imageUrl: "https://drive.google.com/uc?id=12Vl9zQQo8fhv-xhOmGojaxmb88VKtRMD" },
    // ...
];

const dataset3 = [
    { id: 1, imageUrl: "https://drive.google.com/uc?id=14mv0zkAHHVV-rlP4QELZ-fyIC3lR6s9W" },
    { id: 2, imageUrl: "https://drive.google.com/uc?id=12Vl9zQQo8fhv-xhOmGojaxmb88VKtRMD" },
    // ...
];

const dataset4 = [
    { id: 1, imageUrl: "https://drive.google.com/uc?id=14mv0zkAHHVV-rlP4QELZ-fyIC3lR6s9W" },
    { id: 2, imageUrl: "https://drive.google.com/uc?id=12Vl9zQQo8fhv-xhOmGojaxmb88VKtRMD" },
    // ...
];


const dataset5 = [
    { id: 1, imageUrl: "https://drive.google.com/uc?id=14mv0zkAHHVV-rlP4QELZ-fyIC3lR6s9W" },
    { id: 2, imageUrl: "https://drive.google.com/uc?id=12Vl9zQQo8fhv-xhOmGojaxmb88VKtRMD" },
    // ...
];

const dataset6 = [
    { id: 1, imageUrl: "https://drive.google.com/uc?id=14mv0zkAHHVV-rlP4QELZ-fyIC3lR6s9W" },
    { id: 2, imageUrl: "https://drive.google.com/uc?id=12Vl9zQQo8fhv-xhOmGojaxmb88VKtRMD" },
    // ...
];


const dataset7 = [
    { id: 1, imageUrl: "https://drive.google.com/uc?id=14mv0zkAHHVV-rlP4QELZ-fyIC3lR6s9W" },
    { id: 2, imageUrl: "https://drive.google.com/uc?id=12Vl9zQQo8fhv-xhOmGojaxmb88VKtRMD" },
    // ...
];

const dataset8 = [
    { id: 1, imageUrl: "https://drive.google.com/uc?id=14mv0zkAHHVV-rlP4QELZ-fyIC3lR6s9W" },
    { id: 2, imageUrl: "https://drive.google.com/uc?id=12Vl9zQQo8fhv-xhOmGojaxmb88VKtRMD" },
    // ...
];

const dataset9 = [
    { id: 1, imageUrl: "https://drive.google.com/uc?id=14mv0zkAHHVV-rlP4QELZ-fyIC3lR6s9W" },
    { id: 2, imageUrl: "https://drive.google.com/uc?id=12Vl9zQQo8fhv-xhOmGojaxmb88VKtRMD" },
    // ...
];

const dataset10 = [
    { id: 1, imageUrl: "https://drive.google.com/uc?id=14mv0zkAHHVV-rlP4QELZ-fyIC3lR6s9W" },
    { id: 2, imageUrl: "https://drive.google.com/uc?id=12Vl9zQQo8fhv-xhOmGojaxmb88VKtRMD" },
    // ...
];

const dataset11 = [
    { id: 1, imageUrl: "https://drive.google.com/uc?id=14mv0zkAHHVV-rlP4QELZ-fyIC3lR6s9W" },
    { id: 2, imageUrl: "https://drive.google.com/uc?id=12Vl9zQQo8fhv-xhOmGojaxmb88VKtRMD" },
    // ...
];

const dataset12 = [
    { id: 1, imageUrl: "https://drive.google.com/uc?id=14mv0zkAHHVV-rlP4QELZ-fyIC3lR6s9W" },
    { id: 2, imageUrl: "https://drive.google.com/uc?id=12Vl9zQQo8fhv-xhOmGojaxmb88VKtRMD" },
    // ...
];

const dataset13 = [
    { id: 1, imageUrl: "https://drive.google.com/uc?id=14mv0zkAHHVV-rlP4QELZ-fyIC3lR6s9W" },
    { id: 2, imageUrl: "https://drive.google.com/uc?id=12Vl9zQQo8fhv-xhOmGojaxmb88VKtRMD" },
    // ...
];

const dataset14 = [
    { id: 1, imageUrl: "https://drive.google.com/uc?id=14mv0zkAHHVV-rlP4QELZ-fyIC3lR6s9W" },
    { id: 2, imageUrl: "https://drive.google.com/uc?id=12Vl9zQQo8fhv-xhOmGojaxmb88VKtRMD" },
    // ...
];

const dataset15 = [
    { id: 1, imageUrl: "https://drive.google.com/uc?id=14mv0zkAHHVV-rlP4QELZ-fyIC3lR6s9W" },
    { id: 2, imageUrl: "https://drive.google.com/uc?id=12Vl9zQQo8fhv-xhOmGojaxmb88VKtRMD" },
    // ...
];

const dataset16 = [
    { id: 1, imageUrl: "https://drive.google.com/uc?id=14mv0zkAHHVV-rlP4QELZ-fyIC3lR6s9W" },
    { id: 2, imageUrl: "https://drive.google.com/uc?id=12Vl9zQQo8fhv-xhOmGojaxmb88VKtRMD" },
    // ...
];

const dataset17 = [
    { id: 1, imageUrl: "https://drive.google.com/uc?id=14mv0zkAHHVV-rlP4QELZ-fyIC3lR6s9W" },
    { id: 2, imageUrl: "https://drive.google.com/uc?id=12Vl9zQQo8fhv-xhOmGojaxmb88VKtRMD" },
    // ...
];

const ImageView = () => {
    const { datasetId } = useParams();

    let selectedDataset;
    console.log(datasetId)
    if (datasetId === 'dataset1') {
        selectedDataset = dataset1;
    } else if (datasetId === 'dataset2') {
        selectedDataset = dataset2;
    }else if (datasetId === 'dataset3') {
        selectedDataset = dataset3;
    }else if (datasetId === 'dataset4') {
        selectedDataset = dataset4;
    }else if (datasetId === 'dataset5') {
        selectedDataset = dataset5;
    }else if (datasetId === 'dataset6') {
        selectedDataset = dataset6;
    }else if (datasetId === 'dataset7') {
        selectedDataset = dataset7;
    }else if (datasetId === 'dataset8') {
        selectedDataset = dataset8;
    }else if (datasetId === 'dataset9') {
        selectedDataset = dataset9;
    }else if (datasetId === 'dataset10') {
        selectedDataset = dataset10;
    }else if (datasetId === 'dataset11') {
        selectedDataset = dataset11;
    }else if (datasetId === 'dataset12') {
        selectedDataset = dataset12;
    }else if (datasetId === 'dataset13') {
        selectedDataset = dataset13;
    }else if (datasetId === 'dataset14') {
        selectedDataset = dataset14;
    }else if (datasetId === 'dataset15') {
        selectedDataset = dataset15;
    }else if (datasetId === 'dataset16') {
        selectedDataset = dataset16;
    }else if (datasetId === 'dataset17') {
        selectedDataset = dataset17;
    }
    return (
        <div>
                <ResponsiveMasonry columnsCountBreakPoints={{350:1,750:2, 900:3}}>
                    <Masonry columnsCount={3} gutter="10px">
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
    );
    // Rest of the code...
};
 export default ImageView;
