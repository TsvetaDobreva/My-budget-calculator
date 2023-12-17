import { useState, useEffect } from 'react';
import { dataService } from '../../services/dataService';
import { walletService } from '../../services/walletService';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    date: new Date().getTime(),
    cards: '',
    label: '',
    description: '',
    operationType: '',
    amount: 0
}

export default function AddTransaction() {
    const [formValue, setFormValue] = useState(initialValue);
    const [cards, setCards] = useState([]);
    const [selectCard, setSelectCard] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        dataService.getCards().then(cards => {
            setCards(cards.results);
        });
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        const cardNumber = cards.filter(x => x.objectId == selectCard)[0].cardNumber;
        walletService.addTransaction(formValue, cardNumber);
        dataService.updateCardBalance(selectCard, formValue.amount, formValue.operationType);
        navigate('/wallet')
    }

    const changeValue = (e) => {
        let value = e.target.value;
        if (e.target.type === 'number') {
            value = Number(value);
        };
        if (e.target.id === 'cards') {
            setSelectCard(e.target.selectedOptions[0].id);
        };
        setFormValue(state => ({
            ...state,
            [e.target.name]: value
        }));
    };

    return (
        <div className="row my-4">
            <div className="col-lg-7 col-12">
                <div className="custom-block bg-white">
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="password-tab-pane" role="tabpanel" aria-labelledby="password-tab" tabIndex="0">
                            <h3 className="mb-4">Add transaction</h3>

                            <form onSubmit={submitHandler} className="custom-form password-form" role="form">
                                <select name="cards" id="cards" className="form-control dropdown" defaultValue="default" onChange={changeValue}>
                                    <option value="default" hidden="hidden">Choose here</option>
                                    {cards.map(card =>
                                        <option value={card.bankName} id={card.objectId} key={card.objectId} className="form-control dropdown-item">{card.bankName}</option>
                                    )}
                                </select>

                                <select name="label" id="label" className="form-control" defaultValue="default" onChange={changeValue}>
                                    <option value="default" hidden="hidden">Choose here</option>
                                    <option value="salary" className="form-control">Salary</option>
                                    <option value="credit" className="form-control">Credit</option>
                                    <option value="utilityBills" className="form-control">Utility bills</option>
                                    <option value="food" className="form-control">Food</option>
                                    <option value="fuel" className="form-control">Fuel</option>
                                    <option value="vacation" className="form-control">Vacation</option>
                                    <option value="other" className="form-control">Other</option>
                                </select>

                                <input
                                    type="description"
                                    name="description"
                                    id="description"
                                    className="form-control"
                                    placeholder="Description"
                                    required=""
                                    onChange={changeValue} />

                                <select name="operationType" id="operationType" className="form-control" defaultValue="default" onChange={changeValue}>
                                    <option value="default" hidden="hidden">Choose here</option>
                                    <option value="income" className="form-control">Income</option>
                                    <option value="outgoing" className="form-control">Outgoing</option>
                                </select>

                                <input
                                    type="number"
                                    name="amount"
                                    id="amount"
                                    className="form-control"
                                    placeholder="Amount"
                                    required=""
                                    onChange={changeValue} />

                                <div className="d-flex">
                                    <button type="submit" className="form-control me-3">
                                        Add transaction
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}