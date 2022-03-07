import './FilterView.css';
import CategoryFilter from '../components/CategoryFilter';
import RangeFilter from '../components/RangeFilter';
import SizeFilter from '../components/SizeFilter';

function FilterView() {
    return (
        <div className="filter-view">
            <div className="filter_header">Categories</div>
            <CategoryFilter></CategoryFilter>
            <div className="filter_header">Price Range</div>
            <RangeFilter></RangeFilter>
            <div className="filter_header">Size</div>
            <SizeFilter></SizeFilter>
        </div>
    );
}

export default FilterView;