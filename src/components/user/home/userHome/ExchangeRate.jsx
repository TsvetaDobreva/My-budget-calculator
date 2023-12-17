export default function ExchangeRate({currency}) {

    return (
        <div className="custom-block custom-block-exchange">
            <h5 className="mb-4">Exchange Rate</h5>

            <div className="d-flex align-items-center border-bottom pb-3 mb-3">
                <div className="d-flex align-items-center">
                    <img src="../../../public/images/flag/united-states.png" className="exchange-image img-fluid" alt="" />

                    <div>
                        <p>USD</p>
                        <h6>1 US Dollar</h6>
                    </div>
                </div>

                <div className="ms-auto me-4">
                    <small>Sell</small>
                    <h6>{currency.usd?.bgn.toFixed(3)}</h6>
                </div>

                <div>
                    <small>Buy</small>
                    <h6>{(1 / (currency.usd?.bgn)).toFixed(3)}</h6>
                </div>
            </div>

            <div className="d-flex align-items-center border-bottom pb-3 mb-3">
                <div className="d-flex align-items-center">
                    <img src="../../../public/images/flag/european-union.png" className="exchange-image img-fluid" alt="" />

                    <div>
                        <p>EUR</p>
                        <h6>1 Euro</h6>
                    </div>
                </div>

                <div className="ms-auto me-4">
                    <small>Sell</small>
                    <h6>{currency.eur?.bgn.toFixed(3)}</h6>
                </div>

                <div>
                    <small>Buy</small>
                    <h6>{(1 / (currency.eur?.bgn)).toFixed(3)}</h6>
                </div>
            </div>

            <div className="d-flex align-items-center border-bottom pb-3 mb-3">
                <div className="d-flex align-items-center">
                    <img src="../../../public/images/flag/united-kingdom.png" className="exchange-image img-fluid" alt="" />

                    <div>
                        <p>GBP</p>
                        <h6>1 British Pound</h6>
                    </div>
                </div>

                <div className="ms-auto me-4">
                    <small>Sell</small>
                    <h6>{currency.gbp?.bgn.toFixed(3)}</h6>
                </div>

                <div>
                    <small>Buy</small>
                    <h6>{(1 / (currency.gbp?.bgn)).toFixed(3)}</h6>
                </div>
            </div>

            <div className="d-flex align-items-center border-bottom pb-3 mb-3">
                <div className="d-flex align-items-center">
                    <img src="../../../public/images/flag/turkey.png" className="exchange-image img-fluid" alt="" />

                    <div>
                        <p>TRY</p>
                        <h6>1 Turkish Lira</h6>
                    </div>
                </div>

                <div className="ms-auto me-4">
                    <small>Sell</small>
                    <h6>{currency.tr?.bgn.toFixed(3)}</h6>
                </div>

                <div>
                    <small>Buy</small>
                    <h6>{(1 / (currency.tr?.bgn)).toFixed(3)}</h6>
                </div>
            </div>

        </div>
    );
};