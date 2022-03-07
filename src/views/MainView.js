import './MainView.css';
import FilterView from './FilterView';
import CardView from './CardView';
import { useState } from "react";

function MainView() {

    const [array, setArray] = useState([]);

    return (
        <div className="main-view">
            <FilterView setArray={setArray} array={array}></FilterView>
            <CardView setArray={setArray} array={array}></CardView>
        </div>
    );
}

export default MainView;