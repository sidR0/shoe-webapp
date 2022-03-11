import './RangeFilter.css'
import { useState } from "react";
import cardArray from './CardData.js';
import state from '../index.js';
import filter from './Filters';

function RangeFilter(props) {

    const [value, setValue] = useState(1);

    function handleEvent(value) {
        // props.setArray(priceFilter(cardArray, value));
        state.selectedPriceRange = value;
        props.setArray(filter(cardArray, state));
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
                0$  -  {value}$
            </div>
        </div>
    )
}

export default RangeFilter;