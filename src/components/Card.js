import './Card.css';

function Card(props) {
    return (
        <div className="card-wrapper-view">
            <div className="card">
                <div className="genre">{props.cardData.subType ? props.cardData.subType : ""}</div>
                <div className="brand">{props.cardData.brandName ? props.cardData.brandName : ""}</div>
                <div className="image-wrapper-view">
                    <img className="card-image" src={props.cardData.picture ? props.cardData.picture : ""} loading="lazy" alt='not found'></img>
                </div>
                <div className="price-label">Price</div>
                <div className="price">{props.cardData.price ? props.cardData.price.toString() + "$" : "N/A"}</div>
            </div>
        </div>
    );
}

export default Card;