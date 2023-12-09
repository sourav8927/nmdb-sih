import React, { useState } from 'react'
import './PhotoSlider.css'
import { motion } from "framer-motion"

function PhotoSlider() {
    const corousel = [
        {
            id: 0,
            title: "photo 1",
            url: "https://picsum.photos/600/400"
        },
        {
            id: 1,
            title: "photo 2",
            url: "https://picsum.photos/id/200/600/400"
        },
        {
            id: 2,
            title: "photo 3",
            url: "https://picsum.photos/id/100/600/400"
        }
    ]

    const [imgId, setImgId] = useState(0);
    const [dir, setDir] = useState(0);
    let imglink = corousel[imgId].url;

    const decImgId = () => {
        setDir(-1);
        if (imgId == 0) {
            setImgId(corousel.length - 1);
        }
        else {
            setImgId(imgId - 1);
        }
    }
    const incImgId = () => {
        setDir(1);
        if (imgId == corousel.length - 1) {
            setImgId(0);
        }
        else {
            setImgId(imgId + 1);
        }
    }

    return (
        <div className="PhotoSlider">
            <div className='ps-img'>
                <motion.img src={imglink} alt="img"
                    initial={{  x: (dir>0)?800:-800,
                                opacity:0,
                                transition:"ease-in"
                    }}
                    animate={{  x:0,
                                opacity:1, 
                                transition:"ease-in"
                    }}
                    exit={{     x:(dir>0)?-800:800,
                                opacity:0,
                                transition:"ease-in"
                    }}
                    key={imglink}/>
            </div>
            <span>
                <button className='ps-action-butt' onClick={decImgId}>&#10094;</button>
            </span>
            <span>{corousel[imgId].title}</span>
            <span>
                <button className='ps-action-butt' onClick={incImgId}>&#10095;</button>
            </span>
        </div>
    )
}

export default PhotoSlider
