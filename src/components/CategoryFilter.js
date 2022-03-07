import './CategoryFilter.css';
import { useState } from "react";
import state from '../index.js';
import cardArray from './CardData.js';
import { useEffect } from "react";

function CategoryFilter(props) {

    const [isSneakersChecked, setIsSneakersChecked] = useState(false);
    const [isFlipFlopChecked, setIsFlipFlopChecked] = useState(false);
    const [isFormalChecked, setIsFormalChecked] = useState(false);
    const [isAllChecked, setIsAllChecked] = useState(false);

    let handleClick = () => {
        let selections = [];
        if (state.isSneakersChecked) { selections.push("Sneakers") }
        if (state.isFlipFlopChecked) { selections.push("FlipFlops") }
        if (state.isFormalChecked) { selections.push("Formal") }
        if (state.isAllChecked) { selections = ["Sneakers", "FlipFlops", "Formal"]; }
        if (!state.isSneakersChecked && !state.isFlipFlopChecked && !state.isFormalChecked && !state.isAllChecked) { selections = ["Sneakers", "FlipFlops", "Formal"]; }
        props.setArray(categoryFilter(cardArray, selections));
        console.log(selections);
    };

    function categoryFilter(array, categoryArray) {

        function isInSelectedCategory(cardDataItem) {
            if (categoryArray.includes(cardDataItem.type)) {
                return true;
            }
        }

        return array.filter((item) => isInSelectedCategory(item));
    }

    return (
        <div className="category-filter">
            <label className="form-control">
                <input type="checkbox" onChange={() => {
                    setIsSneakersChecked(!isSneakersChecked);
                    state.isSneakersChecked = !state.isSneakersChecked;
                    handleClick();
                }} />
                <span className={`checkbox ${isSneakersChecked ? "checkbox--active" : ""}`} />
                Sneakers
            </label>
            <label className="form-control">
                <input type="checkbox" onChange={() => {
                    setIsFlipFlopChecked(!isFlipFlopChecked);
                    state.isFlipFlopChecked = !state.isFlipFlopChecked;
                    handleClick();
                }} />
                <span className={`checkbox ${isFlipFlopChecked ? "checkbox--active" : ""}`} />
                Flip Flops
            </label>
            <label className="form-control">
                <input type="checkbox" onChange={() => {
                    setIsFormalChecked(!isFormalChecked);
                    state.isFormalChecked = !state.isFormalChecked;
                    handleClick();
                }} />
                <span className={`checkbox ${isFormalChecked ? "checkbox--active" : ""}`} />
                Formal
            </label>
            <label className="form-control">
                <input type="checkbox" onChange={() => {
                    setIsAllChecked(!isAllChecked);
                    state.isAllChecked = !state.isAllChecked;
                    handleClick();
                }} />
                <span className={`checkbox ${isAllChecked ? "checkbox--active" : ""}`} />
                All
            </label>
        </div>
    )
}

export default CategoryFilter;