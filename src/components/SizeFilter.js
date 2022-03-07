import './SizeFilter.css';

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

function SizeFilter() {

    function sizeFilter(array, selectedSizeArray) {

        function willFitUser(cardDataItem) {
            if (selectedSizeArray.includes(cardDataItem.type)) {
                return true;
            }
        }

        return array.filter((item) => willFitUser(item));
    }

    return (
        <div className="filter">
            {sizeList.map((i) => <div className="grid-item" key={i}>{i}</div>)}
        </div>
    )
}

export default SizeFilter;
