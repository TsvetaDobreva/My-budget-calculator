import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import { Link } from "react-router-dom";
import { dataService } from "../../../../services/dataService";

export default function AllCards() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        dataService.getCards().then(data => {
            setCards(data.results);
        });
    }, []);

    const onDeleteCard = (e) => {
        const objectId = e.target.dataset.objectid;
        dataService.deleteCard(objectId);
        setCards(state => {
            const newData = state.filter(x => x.objectId != objectId);
            return newData;
        });
    };

    return (
        <>
            {cards && cards.map(card => < SingleCard key={card.objectId} cardData={card} onDeleteCard={onDeleteCard} />)}
            <div className="d-flex">
                <Link to={'/profile/addCard'} className="form-control me-3">Add new card</Link>
            </div>
        </>
    );
}