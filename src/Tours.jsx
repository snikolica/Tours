import React, {useState} from "react";

export default function Tours({ id, image, info, name, price, removeTour }) {
    const [read, setRead] = useState(false);
  return (
    <section>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p className="info">{read ? info : `${info.substring(0,100)}...`}
      <button className="read" onClick={()=> setRead(!read)}>{read ? 'Show less' : 'Read more'}</button>
      </p>
      <div className="price">
      <h4>{price}</h4>
      </div>
      <button onClick={()=> removeTour(id)}>remove</button>
    
    </section>
  );
}
