import { useEffect, useState } from "react"
import WalletTableRow from "./WalletTableRow";
import { walletService } from "../../../services/walletService";

export default function Wallet() {
    const [walletData, setWalletData] = useState([]);

    useEffect(() => {
        walletService.getTransaction().then((data) => {
            setWalletData(data.results);
        });
    }, []);

    return (
        <main className="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
            <div className="title-group mb-3">
                <h1 className="h2 mb-0">Wallet</h1>
            </div>

            <div className="row my-4">
                <div className="col-lg-12 col-12">
                    <div className="custom-block bg-white">
                        <h5 className="mb-4">Account Activities</h5>

                        <div className="table-responsive">
                            <table className="account-table table">
                                <thead>
                                    <tr>
                                        <th scope="col">Date</th>

                                        <th scope="col">Card Number</th>

                                        <th scope="col">Bank</th>

                                        <th scope="col">Description</th>

                                        <th scope="col">Payment Type</th>

                                        <th scope="col">Amount</th>

                                    </tr>
                                </thead>

                                <tbody>
                                    {walletData.map(row => <WalletTableRow key={row.objectId} data={row} />)}
                                </tbody>
                            </table>
                        </div>

                        {/* <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center mb-0">
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">Prev</span>
                                    </a>
                                </li>

                                <li className="page-item active" aria-current="page">
                                    <a className="page-link" href="#">1</a>
                                </li>

                                <li className="page-item">
                                    <a className="page-link" href="#">2</a>
                                </li>

                                <li className="page-item">
                                    <a className="page-link" href="#">3</a>
                                </li>

                                <li className="page-item">
                                    <a className="page-link" href="#">4</a>
                                </li>

                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav> */}
                    </div>
                </div>
            </div>
        </main>
    );
}