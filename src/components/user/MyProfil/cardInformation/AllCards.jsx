import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import { Link } from "react-router-dom";
import { dataService } from "../../../../services/dataService";

export default function AllCards() {
    const [cards, setCards] = useState([]);
    const [changedCards, setChangedCards] = useState({ oldCard: '', newCard: '' });

    useEffect(() => {
        dataService.getCards().then(data => {
            setCards(data.results);
        });
    }, []);

    useEffect(() => {
        dataService.updatePrimaryCard(changedCards.oldCard, changedCards.newCard)
    }, [changedCards]);

    const onChangePrimaryCard = (e) => {
        const newMasterCardId = e.target.dataset.objectid;
        setCards(state => {
            return state.map(card => {
                if (card.objectId === newMasterCardId) {
                    card.isPrimaryCard = true;
                    setChangedCards(state => ({
                        ...state,
                        newCard: newMasterCardId
                    }))
                } else if (card.isPrimaryCard) {
                    card.isPrimaryCard = false;
                    setChangedCards(state => ({
                        ...state,
                        oldCard: card.objectId
                    }))
                }
                return card;
            });
        });
    };

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
            {cards && cards.map(card => < SingleCard key={card.objectId} cardData={card} onDeleteCard={onDeleteCard} onChangePrimaryCard={onChangePrimaryCard} />)}
            <div className="d-flex">
                <Link to={'/profile/addCard'} className="form-control me-3">Add new card</Link>
            </div>
        </>
    );
};