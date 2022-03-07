import './FilterView.css';
import CategoryFilter from '../components/CategoryFilter';
import RangeFilter from '../components/RangeFilter';
import SizeFilter from '../components/SizeFilter';

function FilterView(props) {
    return (
        <div className="filter-view">
            <div className="filter_header">Categories</div>
            <CategoryFilter setArray={props.setArray} array={props.array}></CategoryFilter>
            <div className="filter_header">Price Range</div>
            <RangeFilter setArray={props.setArray} count={props.array}></RangeFilter>
            <div className="filter_header">Size</div>
            <SizeFilter setArray={props.setArray} count={props.array}></SizeFilter>
        </div>
    );
}

export default FilterView;