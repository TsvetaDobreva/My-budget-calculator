export default function PrimaryCard({ primaryCard }) {

    return (
        <div className="custom-block custom-block-balance">
            <small>Your card balance</small>

            <h2 className="mt-2 mb-3">{primaryCard?.balance?.toFixed(2)}лв</h2>

            <div className="custom-block-numbers d-flex align-items-center">
                <span>****</span>
                <span>****</span>
                <span>****</span>
                <p>{primaryCard?.cardNumber?.split('').slice(-4).join('')}</p>
            </div>

            <div className="d-flex">
                <div>
                    <small>Valid Date</small>
                    <p>{primaryCard.validDate}</p>
                </div>

                <div className="ms-auto">
                    <small>Card Holder</small>
                    <p>{primaryCard.ownerName}</p>
                </div>
            </div>
        </div>
    );
};