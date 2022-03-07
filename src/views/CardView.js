import './CardView.css';
import CardContainer from '../components/CardContainer';

function CardView(props) {
    return (
        <div className="card-view">
            <div className="card_header">New Arrivals</div>
            <CardContainer setArray={props.setArray} array={props.array}></CardContainer>
        </div>
    )
}

export default CardView;