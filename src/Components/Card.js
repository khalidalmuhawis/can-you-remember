import React,  { useState } from "react";
import cardBack from "../images/CardBack.jpg";
import ReactCardFlip from "react-card-flip";


const Card = ({ card, checkFlipped }) => {
    const [flipped, changeFlip] = useState(false);

    const handleFlip = () => {
        changeFlip(!flipped);
      };
  

    return (
      <div className="col-3 my-1">
      <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
      <img
          className="mx-auto"
          src={cardBack}
          height="100%"
          width="100%"
          key="front"
          onClick={() => handleFlip()}
        />
        <img
          className="mx-auto"
          src={card.front}
          height="100%"
          width="100%"
          key="back"
          onClick={() => handleFlip()}
        />
      </ReactCardFlip>
    </div>
  );
};
  
  
  export default Card;