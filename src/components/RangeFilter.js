import './RangeFilter.css'
import { useState } from "react";

function RangeFilter() {

    const [value, onChange] = useState(50);

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