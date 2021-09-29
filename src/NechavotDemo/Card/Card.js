import React, {useState} from 'react'
import './Card.scss';

export default function Card({ title, src }) {

   const [isActive, setIsActive] = useState(false);

   function handleClick() {
       setIsActive(!isActive);
   }
    return (
        <div className={isActive ? "card active" : "card"} onClick = {handleClick}>
            <div className = "img" style= {{backgroundImage: `url(${src})`}}>
                <h3 className = "title">{title}</h3>
            </div>
        </div>
    )
}
