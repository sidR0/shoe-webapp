import './SizeFilter.css';
import state from '../index.js';
import cardArray from './CardData.js';

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

let sizeList = giveArrayRange(35, 49);

function SizeFilter(props) {

    let handleClick = (currentSize) => {
        let selections = state.selectedSize;
        if (!selections.includes(currentSize)) {
            selections.push(currentSize);
        }
        props.setArray(sizeFilter(cardArray, selections));
        console.log(selections);
    };

    function sizeFilter(array, selectedSizeArray) {
        function willFitUser(cardDataItem) {
            if (cardDataItem.availableSizes.filter((size) => selectedSizeArray.includes(size)).length !== 0) {
                return true;
            }
        }

        return array.filter((item) => willFitUser(item));
    }

    return (
        <div className="filter">
            {sizeList.map((i) => <div className="grid-item" key={i} onClick={() => { handleClick(i); }}>{i}</div>)}
        </div>
    )
}

export default SizeFilter;
