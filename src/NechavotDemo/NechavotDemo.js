import React from 'react';
import Card from './Card/Card';
import './NechavotDemo.scss';

export default function NechavotDemo() {
    const images = [
        { title: "Login", source: 'https://i.ibb.co/PZVj75q/Login-1.jpg' },
        { title: "Feed", source: 'https://i.ibb.co/2S7Yn3h/Feed-21.jpg' },
        { title: "Uploading image", source: 'https://i.ibb.co/4dLK6Jz/upload-3.jpg' },
        { title: "Updated feed", source: 'https://i.ibb.co/tM7C259/new-Feed-4.jpg' },
    ]

    return (
        <div className="nechavotDemo">
              {images.map((image, index)=> {
                return <Card key={index} className="card" title={image.title} src={image.source} />
            })}
        </div>
    )
}
