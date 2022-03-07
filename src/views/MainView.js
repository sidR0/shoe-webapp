import './MainView.css';
import FilterView from './FilterView';
import CardView from './CardView';

function MainView() {
    return (
        <div className="main-view">
            <FilterView></FilterView>
            <CardView></CardView>
        </div>
    );
}

export default MainView;