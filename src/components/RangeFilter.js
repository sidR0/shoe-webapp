import './RangeFilter.css'
import { useState } from "react";

function RangeFilter() {

    const [value, onChange] = useState(50);

    function priceFilter(array, maxPrice) {

        function isInPriceRange(cardDataItem) {
            if (maxPrice <= cardDataItem.price) {
                return true;
            }
        }

        return array.filter((item) => isInPriceRange(item));
    }

    return (
        <div className="range-filter">
            <input
                type="range"
                min="1"
                max="100"
                value={value}
                onChange={({ target: { value: radius } }) => {
                    onChange(radius);
                }}
                className="slider"
            />
        </div>
    )
}

export default RangeFilter;