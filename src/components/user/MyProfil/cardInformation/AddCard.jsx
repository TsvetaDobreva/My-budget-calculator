import { useState, useEffect } from "react";
import { dataService } from "../../../../services/dataService";
import { useNavigate } from 'react-router-dom';
import { validateAddedCard } from "../../../../utils/validateAddedCard";

const initialValue = {
    bankName: '',
    cardNumber: '',
    validDate: '',
    ownerName: '',
    cardType: '',
    balance: 0
}

export default function AddCard() {
    const [formValue, setFormValue] = useState(initialValue);
    const [cardErrors, setCardErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        return () => {
            setCardErrors({});
        }
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        try {
            validateAddedCard(formValue);
            dataService.addCard(formValue);
            navigate('/profile');

        } catch (error) {
            setCardErrors(error);
            navigate('/profile/addCard');
        }
    };

    const changeValue = (e) => {
        let value = e.target.value;
        if (e.target.type === 'number') {
            value = Number(value);
        }
        setFormValue(state => ({
            ...state,
            [e.target.name]: value
        }));
    };

    return (
        <div className="custom-block custom-block-profile bg-white">

            <form onSubmit={onSubmitHandler} className="custom-form password-form" role="form">

                <h6 className="mb-4">Card Information</h6>

                <p className="d-flex flex-wrap mb-2">
                    <strong>Bank:</strong>

                    <input
                        type="text"
                        name="bankName"
                        id="bankName"
                        className="form-control"
                        placeholder=""
                        required=""
                        value={formValue.bankName}
                        onChange={changeValue} />
                    {cardErrors.bankName && <small className="d-block text-danger">{cardErrors.bankName}</small>}


                </p>

                <p className="d-flex flex-wrap mb-2">
                    <strong>Card number:</strong>

                    <input
                        type="text"
                        name="cardNumber"
                        id="cardNumber"
                        className="form-control"
                        placeholder=""
                        required=""
                        value={formValue.cardNumber}
                        onChange={changeValue} />
                    {cardErrors.cardNumber && <small className="d-block text-danger">{cardErrors.cardNumber}</small>}
                </p>

                <p className="d-flex flex-wrap mb-2">
                    <strong>Valid Thru:</strong>

                    <input
                        type="text"
                        name="validDate"
                        id="validDate"
                        className="form-control"
                        placeholder=""
                        required=""
                        value={formValue.validDate}
                        onChange={changeValue} />
                    {cardErrors.validDate && <small className="d-block text-danger">{cardErrors.validDate}</small>}
                </p>

                <p className="d-flex flex-wrap mb-2">
                    <strong>Name:</strong>

                    <input
                        type="text"
                        name="ownerName"
                        id="ownerName"
                        className="form-control"
                        placeholder=""
                        required=""
                        value={formValue.ownerName}
                        onChange={changeValue} />
                    {cardErrors.ownerName && <small className="d-block text-danger">{cardErrors.ownerName}</small>}
                </p>

                <p className="d-flex flex-wrap mb-2">
                    <strong>Balance:</strong>

                    <input
                        type="number"
                        name="balance"
                        id="balance"
                        className="form-control"
                        placeholder=""
                        required=""
                        value={formValue.balance}
                        onChange={changeValue} />
                    {cardErrors.balance && <small className="d-block text-danger">{cardErrors.balance}</small>}
                </p>

                <p className="d-flex flex-wrap mb-2">
                    <strong>Type:</strong>

                    <input
                        type="text"
                        name="cardType"
                        id="cardType"
                        className="form-control"
                        placeholder=""
                        required=""
                        value={formValue.cardType}
                        onChange={changeValue} />
                    {cardErrors.cardType && <small className="d-block text-danger">{cardErrors.cardType}</small>}
                </p>

                <div className="d-flex">
                    <button type="submit" className="form-control me-3">
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}