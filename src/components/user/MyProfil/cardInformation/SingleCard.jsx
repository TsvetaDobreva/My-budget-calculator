export default function SingleCard({ cardData, onDeleteCard, onChangePrimaryCard }) {

    return (
        <div className="custom-block custom-block-profile bg-white">
            <h6 className="mb-4">Card Information</h6>
            <a onClick={onDeleteCard} data-objectid={cardData.objectId} className="bi bi-trash custom-block-edit-icon"></a>

            <p className="d-flex flex-wrap mb-2">
                <strong>Bank:</strong>
                <span>{cardData.bankName}</span>
            </p>

            <p className="d-flex flex-wrap mb-2">
                <strong>Card number:</strong>
                <span>{cardData.cardNumber}</span>
            </p>

            <p className="d-flex flex-wrap mb-2">
                <strong>Valid Thru:</strong>
                <span>{cardData.validDate}</span>
            </p>

            <p className="d-flex flex-wrap mb-2">
                <strong>Name:</strong>
                <span>{cardData.ownerName}</span>
            </p>

            <p className="d-flex flex-wrap mb-2">
                <strong>Type:</strong>
                <span>{cardData.cardType}</span>
            </p>

            <p className="d-flex flex-wrap mb-2">
                <strong>Primary card:</strong>
                <input 
                    type='checkbox' 
                    onChange={onChangePrimaryCard}
                    checked={cardData.isPrimaryCard}
                    data-objectid={cardData.objectId}
                />
            </p>

        </div>
    );
};