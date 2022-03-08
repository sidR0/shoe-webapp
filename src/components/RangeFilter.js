import './RangeFilter.css'
import { useState } from "react";
import cardArray from './CardData.js';

function RangeFilter(props) {

    const [value, setValue] = useState(1);

    function handleEvent(value) {
        props.setArray(priceFilter(cardArray, value));
    }

    function priceFilter(array, maxPrice) {

        function isInPriceRange(cardDataItem) {
            if (maxPrice >= cardDataItem.price) {
                return true;
            }
        }

        return array.filter((item) => isInPriceRange(item));
    }

    return (
        <div className="range-filter">
            <input
                type="range" min="1" max="999"
                value={value}
                onChange={({ target: { value: radius } }) => {
                    setValue(radius);
                }}
                className="slider"
                onMouseUp={() => { handleEvent(value) }}
            />
            <div className="range-view">
                {value}$
            </div>
        </div>
    )
}

export default RangeFilter;