import React from 'react';
import '../App.css'
import {Image} from 'antd';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";



const images = [
        "https://drive.google.com/uc?id=1l1a4aZhAzpUq2TfiyzoA-i9VMt7MetpF",
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
    "https://drive.google.com/uc?id=1Kfgsl--Qx9S3RNHMk2UZLDmyTEIjO3eK",
    "https://drive.google.com/uc?id=1Cw5jSDY08-3E0Qkb7DEdv36d88fyhyut",
    "https://drive.google.com/uc?id=1WPdGaOJ9WjsUGDhSbqdeg8-wSRFhbbyN",
    "https://drive.google.com/uc?id=1JnkIQG9RC_jT7hgcXEAgevdWxh-C1b94",
    "https://drive.google.com/uc?id=134gZGftfZYkT6uH5OBg6dg90ATWq7Ars",
    "https://drive.google.com/uc?id=1HhKbz-dJNpU-09Z6DFQxClXtw6dSnvuE",
    "https://drive.google.com/uc?id=1fTE99Y8jX5BxvugzKi3XPl0lJAk5-7Tw",
    "https://drive.google.com/uc?id=10lHI7QGV8AdHemG3hHoFMOX3Cumw5wMm",
    "https://drive.google.com/uc?id=19Y-VkGYgrBapyOMCA3oObd0WBfn4IUMh",
    "https://drive.google.com/uc?id=1Ape905_LlvXju9vsbUUrkR0vK7X0tqnB",
    "https://drive.google.com/uc?id=1lg8hYCVtwjkUCDAIV89zayDHlnCBLJtF",
    "https://drive.google.com/uc?id=19aWQRglsqjB99-9DEyj6X2RynREK8JnA",
    "https://drive.google.com/uc?id=1EUcHJtTTYa_qyCvp8UND_3f4I4FChTl2",
    "https://drive.google.com/uc?id=1pveVO7Z3djk734BzepFf8eXqtC7aSOWC"
    ];

    const Gallery = () => {
            return (
                <div style={{padding:"1%", backgroundColor:"white", margin:"auto"}}>
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


            )

    }


export default Gallery;