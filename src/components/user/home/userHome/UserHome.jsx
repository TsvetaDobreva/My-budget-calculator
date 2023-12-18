import { useEffect, useState } from "react"
import { currencyService } from "../../../../services/currencyService";
import { userService } from "../../../../services/userService";
import { dataService } from "../../../../services/dataService";
import { walletService } from "../../../../services/walletService";
import RecentTransaction from "./RecentTransaction";
import PrimaryCard from "./PrimaryCard";
import ExchangeRate from "./ExchangeRate";
import UserInfo from "./UserInfo";

export default function UserHome() {
    const [currency, setCurrency] = useState({});
    const [userInfo, setUserInfo] = useState({});
    const [primaryCard, setPrimaryCard] = useState({validDate: '--/----', cardNumber: '****', balance: 0, ownerName: userInfo.username});
    const [balance, setBalance] = useState(0);
    const [lastTransaction, setLastTransaction] = useState([]);

    useEffect(() => {
        currencyService.getCurrency().then((data) => {
            setCurrency(data);
        })
    }, []);

    useEffect(() => {
        userService.getUser().then(data => {
            setUserInfo(data);
        });
    }, []);

    useEffect(() => {
        dataService.getCards().then((data) => {
            if(!data.results.length) {
                return;
            }
            setPrimaryCard(data.results.find(x => x.isPrimaryCard));
            const sum = data.results.reduce((acc, value) => {
                return acc + Number(value.balance)
            }, 0);
            setBalance(sum);
        });
    }, []);

    useEffect(() => {
        walletService.getOrderedTransaction().then(data => {
            setLastTransaction(data.results.slice(-3));
        })
    }, []);

    return (
        <>
            <div className="title-group mb-3">
                <h1 className="h2 mb-0">Overview</h1>
                <small className="text-muted">Hello {userInfo?.username?.split(' ')[0]}, welcome back!</small>
            </div>

            <div className="row my-4">
                <div className="col-lg-7 col-12">
                    {< PrimaryCard key={primaryCard?.objectId} primaryCard={primaryCard} />}

                    <div className="custom-block bg-white">
                        <h5 className="mb-4">Your total balance: </h5>

                        <div id="pie-chart">{balance.toFixed(2)}лв</div>
                    </div>
                    {< ExchangeRate key={currency.length} currency={currency} />}
                </div>

                <div className="col-lg-5 col-12">
                    {<UserInfo key={userInfo.objectId} userInfo={userInfo} />}

                    <div className="custom-block custom-block-bottom d-flex flex-wrap">
                        <div className="custom-block-bottom-item">
                            <a href="#" className="d-flex flex-column">
                                <i className="custom-block-icon bi-wallet"></i>
                                <small>Top up</small>
                            </a>
                        </div>

                        <div className="custom-block-bottom-item">
                            <a href="#" className="d-flex flex-column">
                                <i className="custom-block-icon bi-upc-scan"></i>
                                <small>Scan & Pay</small>
                            </a>
                        </div>

                        <div className="custom-block-bottom-item">
                            <a href="#" className="d-flex flex-column">
                                <i className="custom-block-icon bi-send"></i>
                                <small>Send</small>
                            </a>
                        </div>

                        <div className="custom-block-bottom-item">
                            <a href="#" className="d-flex flex-column">
                                <i className="custom-block-icon bi-arrow-down"></i>
                                <small>Request</small>
                            </a>
                        </div>
                    </div>

                    <div className="custom-block custom-block-transations">
                        <h5 className="mb-4">Recent Transations</h5>
                        {lastTransaction.map(record => <RecentTransaction key={record.objectId} transactionInfo={record} />)}

                        <div className="border-top pt-4 mt-4 text-center">
                            <a className="btn custom-btn" href="/wallet">
                                View all transations
                                <i className="bi-arrow-up-right-circle-fill ms-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};