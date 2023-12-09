import React, { useState } from 'react'
import './PhotoSlider.css'

function PhotoSlider() {
    const corousel = [
        {
            id: 0,
            title: "photo 1",
            url: "https://picsum.photos/id/237/300/200"
        },
        {
            id: 1,
            title: "photo 2",
            url: "https://picsum.photos/id/238/300/200"
        },
        {
            id: 2,
            title: "photo 3",
            url: "https://picsum.photos/id/239/300/200"
        }
    ]

    const [imgId, setImgId] = useState(0);
    let imglink = corousel[imgId].url;

    const decImgId = () =>{
        if (imgId==0){
            setImgId(corousel.length-1);
        }
        else{
            setImgId(imgId-1);
        }
    }
    const incImgId = () =>{
        if (imgId==corousel.length-1){
            setImgId(0);
        }
        else{
            setImgId(imgId+1);
        }
    }

    return (
        <div className = 'PhotoSlider'>
            <div className = 'ps-img'>
                <img src={imglink} alt="" />
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
