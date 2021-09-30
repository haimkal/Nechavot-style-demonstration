import React from 'react';
import { useState } from 'react';
import Card from './Card/Card';
import './NechavotDemo.scss';

export default function NechavotDemo() {

    // const [showInstructions, setShowInstructions] = useState(true);

    const images = [
        { title: "Login", source: 'https://i.ibb.co/PZVj75q/Login-1.jpg' },
        { title: "Feed", source: 'https://i.ibb.co/2S7Yn3h/Feed-21.jpg' },
        { title: "Uploading image", source: 'https://i.ibb.co/4dLK6Jz/upload-3.jpg' },
        { title: "Updated feed", source: 'https://i.ibb.co/tM7C259/new-Feed-4.jpg' },
    ]

    // function handleClick() {
    //     setShowInstructions(false);
    // }

    return (
        
        <div className="nechavotDemo">
            {/* {showInstructions && <div className="ins-box" >  
                <div className='text'> <p> Click on an image to open it </p>
                <p> Don't forget to click again to close it before opening the next one </p>
                </div>
                <button onClick = {handleClick}> Ok </button> 
            </div>} */}
            {images.map((image, index)=> {
                return <Card key={index} className="card" title={image.title} src={image.source} />
            })}
        </div>
    )
}
