export default function RecentTransaction({ transactionInfo }) {

    const getClassName = () => {
        if (transactionInfo.operationType === 'income') {
            return 'd-block text-success';
        }
        return 'd-block text-danger';
    }

    return (
        <>
            <div className="d-flex flex-wrap align-items-center mb-4">
                <div className="d-flex align-items-center">
                    <img src="../../../../../public/images/hand-money-income.png" className="profile-image img-fluid" alt="" />
                    
                    <div>
                        <p>
                            <a href="transation-detail.html">{transactionInfo.cards}</a>
                        </p>

                        <p>
                            <small className="text-muted">{transactionInfo.description}</small>
                        </p>
                    </div>
                </div>

                <div className="ms-auto">
                    <small>{new Date(transactionInfo.date).toLocaleDateString()}</small>
                    <strong className={getClassName()}>
                        {transactionInfo.operationType === 'outgoing' && <span className="me-1">-</span>}
                        {transactionInfo.amount}лв</strong>
                </div>
            </div>
        </>
    );
};