import './CardContainer.css';
import Card from './Card.js';
import cardArray from './CardData.js';

function CardContainer(props) {
    return (
        <div className="card-container">
            {cardArray.map((i) =>
                <Card cardData={i} key={i.picture} />
            )}
        </div>
    )
}

export default CardContainer;