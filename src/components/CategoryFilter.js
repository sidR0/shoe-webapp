import './CategoryFilter.css';
import { useState } from "react";
import state from '../index.js';

function CategoryFilter() {

    const [isSneakersChecked, setIsSneakersChecked] = useState(false);
    const [isFlipFlopChecked, setIsFlipFlopChecked] = useState(false);
    const [isFormalChecked, setIsFormalChecked] = useState(false);
    const [isAllChecked, setIsAllChecked] = useState(false);

    return (
        <div className="category-filter">
            <label className="form-control">
                <input type="checkbox" onChange={() => { setIsSneakersChecked(!isSneakersChecked); state.isSneakersChecked = !state.isSneakersChecked; }} />
                <span className={`checkbox ${isSneakersChecked ? "checkbox--active" : ""}`} />
                Sneakers
            </label>
            <label className="form-control">
                <input type="checkbox" onChange={() => { setIsFlipFlopChecked(!isFlipFlopChecked); state.isFlipFlopChecked = !state.isFlipFlopChecked; }} />
                <span className={`checkbox ${isFlipFlopChecked ? "checkbox--active" : ""}`} />
                Flip Flops
            </label>
            <label className="form-control">
                <input type="checkbox" onChange={() => { setIsFormalChecked(!isFormalChecked); state.isFormalChecked = !state.isFormalChecked; }} />
                <span className={`checkbox ${isFormalChecked ? "checkbox--active" : ""}`} />
                Formal
            </label>
            <label className="form-control">
                <input type="checkbox" onChange={() => { setIsAllChecked(!isAllChecked); state.isAllChecked = !state.isAllChecked; }} />
                <span className={`checkbox ${isAllChecked ? "checkbox--active" : ""}`} />
                All
            </label>
        </div>
    )
}

export default CategoryFilter;