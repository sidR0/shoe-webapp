function sizeFilter(array, selectedSizeArray) {
    function willFitUser(cardDataItem) {
        if (cardDataItem.availableSizes.filter((size) => selectedSizeArray.includes(size)).length !== 0) {
            return true;
        }
    }

    return array.filter((item) => willFitUser(item));
}

function priceFilter(array, maxPrice) {
    function isInPriceRange(cardDataItem) {
        if (maxPrice >= cardDataItem.price) {
            return true;
        }
    }
    return array.filter((item) => isInPriceRange(item));
}

function categoryFilter(array, categoryArray) {

    function isInSelectedCategory(cardDataItem) {
        if (categoryArray.includes(cardDataItem.type)) {
            return true;
        }
    }

    return array.filter((item) => isInSelectedCategory(item));
}

function filter(array, state) {
    let res = [];
    let categoryFilteredArray = categoryFilter(array, state.selectedCategory);
    let priceFilteredArray = priceFilter(array, state.selectedPriceRange);
    let sizeFilteredArray = sizeFilter(array, state.selectedSize);
    if (sizeFilteredArray.length !== 0) {
        res = intersectMany(categoryFilteredArray, priceFilteredArray, sizeFilteredArray);
    } else {
        res = intersectMany(categoryFilteredArray, priceFilteredArray);
    }
    return res;
}

const intersection = (array1, array2) => {
    const res = [];
    for (let i = 0; i < array1.length; i++) {
        if (!array2.map((i) => i.picture).includes(array1[i].picture)) {
            continue;
        };
        res.push(array1[i]);
    };
    return res;
};

const intersectMany = (...arrs) => {
    let res = arrs[0].slice();
    for (let i = 1; i < arrs.length; i++) {
        res = intersection(res, arrs[i]);
    };
    return res;
};

// const arr1 = [2, 6, 7, 1, 7, 8, 4, 3];
// const arr2 = [5, 1, 7, 2, 2, 1, 3];
// const arr3 = [1, 56, 345, 6, 54, 2, 68, 85, 3];
// console.log(intersectMany(arr1, arr2, arr3));

export default filter;