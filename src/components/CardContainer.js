import './CardContainer.css';
import Card from './Card.js';
import { useEffect } from "react";
import cardArray from './CardData.js';

function CardContainer(props) {

    useEffect(() => {
        props.setArray(cardArray);
    }, []);

    return (
        <div className="card-container">
            {props.array.map((i) =>
                <Card cardData={i} key={i.picture} />
            )}
        </div>
    )
}

export default CardContainer;