import './SizeFilter.css';
import state from '../index.js';
import cardArray from './CardData.js';
import { useState } from "react";
import filter from './Filters';

function giveArrayRange(start, end, except) {
    let array = [];
    if (!except) {
        except = [];
    }
    for (let i = start; i <= end; i++) {
        array.push(i);
    }

    return array.filter((item) => !except.includes(item));
};

let sizeData = giveArrayRange(35, 49);

function SizeFilter(props) {

    const [selectedSizeList, setSelectedSizeList] = useState([]);

    let handleClick = (currentSize) => {
        let selections = state.selectedSize;
        if (!selections.includes(currentSize)) {
            selections.push(currentSize);
        } else {
            selections = arrayRemove(selections, currentSize);
            state.selectedSize = selections;
        }
        setSelectedSizeList(selections);
        // props.setArray(sizeFilter(cardArray, selections));
        // console.log(selections);
        // if (selections.length === 0) {
        //     props.setArray(cardArray);
        // }
        state.selectedSize = selections;
        props.setArray(filter(cardArray, state));
    };

    function arrayRemove(array, value) {
        return array.filter(function (i) {
            return i !== value;
        });
    }

    return (
        <div className="filter">
            {sizeData.map((i) => <div className={selectedSizeList.includes(i) ? "grid-item-enabled" : "grid-item-disabled"} key={i} onClick={() => { handleClick(i); }}>{i}</div>)}
        </div>
    )
}

export default SizeFilter;
