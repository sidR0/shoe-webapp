import './CardContainer.css';
import Card from './Card.js';
import { useEffect } from "react";
import cardArray from './CardData.js';

function CardContainer(props) {

    useEffect(() => {
        props.setArray(cardArray);
    }, []);

    function categoryFilter(array, categoryArray) {

        function isInSelectedCategory(cardDataItem) {
            if (categoryArray.includes(cardDataItem.type)) {
                return true;
            }
        }

        return array.filter((item) => isInSelectedCategory(item));
    }

    function sizeFilter(array, selectedSizeArray) {

        function willFitUser(cardDataItem) {
            if (selectedSizeArray.includes(cardDataItem.type)) {
                return true;
            }
        }

        return array.filter((item) => willFitUser(item));
    }

    function priceFilter(array, maxPrice) {

        function isInPriceRange(cardDataItem) {
            if (maxPrice <= cardDataItem.price) {
                return true;
            }
        }

        return array.filter((item) => isInPriceRange(item));
    }

    return (
        <div className="card-container">
            {categoryFilter(props.array, ["Sneakers", "FlipFlops", "Formal"]).map((i) =>
                <Card cardData={i} key={i.picture} />
            )}
        </div>
    )
}

export default CardContainer;