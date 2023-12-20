import React, { useState, useEffect } from 'react'
import './PhotoSlider.css'
import { motion } from "framer-motion"

function PhotoSlider() {
    const corousel = [
        {
            id: 0,
            title: "photo 1",
            url: "../../assets/images/1.jpg"
        },
        {
            id: 1,
            title: "photo 2",
            url: "../../assets/images/2.jpg"
        },
        {
            id: 2,
            title: "photo 3",
            url: "../../assets/images/3.jpg"
        },
        {
            id: 3,
            title: "photo 4",
            url: "../../assets/images/4.jpg"
        },
        {
            id: 4,
            title: "photo 5",
            url: "../../assets/images/5.jpg"
        }
    ]

    const [imgId, setImgId] = useState(0);
    const [dir, setDir] = useState(0);
    let imglink = new URL(corousel[imgId].url, import.meta.url).href;

    const timerId = setInterval(() => {
        incImgId();
      }, 6000);

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
