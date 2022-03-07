import './CardView.css';
import CardContainer from '../components/CardContainer';

function CardView() {
    return (
        <div className="card-view">
            <div className="card_header">New Arrivals</div>
            <CardContainer></CardContainer>
        </div>
    )
}

export default CardView;