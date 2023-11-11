export default function Wallet() {
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

                                    <th scope="col">Time</th>

                                    <th scope="col">Description</th>

                                    <th scope="col">Payment Type</th>

                                    <th scope="col">Amount</th>

                                    <th scope="col">Balance</th>

                                    <th scope="col">Status</th>

                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td scope="row">July 5, 2023</td>

                                    <td scope="row">10:00 PM</td>

                                    <td scope="row">Shopping</td>

                                    <td scope="row">C2C Transfer</td>

                                    <td className="text-danger" scope="row">
                                        <span className="me-1">-</span>
                                        $100.00
                                    </td>

                                    <td scope="row">$5,500.00</td>

                                    <td scope="row">
                                        <span className="badge text-bg-danger">
                                            Pending
                                        </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td scope="row">July 2, 2023</td>

                                    <td scope="row">10:42 AM</td>

                                    <td scope="row">Food Delivery</td>

                                    <td scope="row">Mobile Reload</td>

                                    <td className="text-success" scope="row">
                                        <span className="me-1">+</span>
                                        $250
                                    </td>

                                    <td scope="row">$5,600.00</td>

                                    <td scope="row">
                                        <span className="badge text-bg-success">
                                            Success
                                        </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td scope="row">June 28, 2023</td>

                                    <td scope="row">8:20 PM</td>

                                    <td scope="row">Billing</td>

                                    <td scope="row">Goverment</td>

                                    <td className="text-success" scope="row">
                                    <span className="me-2">+</span>$50</td>

                                    <td scope="row">$5,350.00</td>

                                    <td scope="row">
                                        <span className="badge text-bg-success">
                                            Success
                                        </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td scope="row">June 24, 2023</td>

                                    <td scope="row">10:48 PM</td>

                                    <td scope="row">Shopee</td>

                                    <td scope="row">QR Code</td>

                                    <td className="text-danger" scope="row">
                                    <span className="me-2">-</span>$380</td>

                                    <td scope="row">$5,300.00</td>

                                    <td scope="row">
                                        <span className="badge text-bg-dark">
                                            Cancelled
                                        </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td scope="row">June 12, 2023</td>

                                    <td scope="row">12:30 AM</td>

                                    <td scope="row">Food Delivery</td>

                                    <td scope="row">Mobile Reload</td>

                                    <td className="text-success" scope="row">
                                    <span className="me-2">+</span>$250</td>

                                    <td scope="row">$4,920.00</td>

                                    <td scope="row">
                                        <span className="badge text-bg-success">
                                            Success
                                        </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td scope="row">May 31, 2023</td>

                                    <td scope="row">2:40 PM</td>

                                    <td scope="row">Food Delivery</td>

                                    <td scope="row">Mobile Reload</td>

                                    <td className="text-success" scope="row">
                                    <span className="me-2">+</span>$50</td>

                                    <td scope="row">$4,920.00</td>

                                    <td scope="row">
                                        <span className="badge text-bg-success">
                                            Success
                                        </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td scope="row">May 22, 2023</td>

                                    <td scope="row">8:50 AM</td>

                                    <td scope="row">Food Delivery</td>

                                    <td scope="row">Mobile Reload</td>

                                    <td className="text-success" scope="row">
                                    <span className="me-2">+</span>$50</td>

                                    <td scope="row">$4,920.00</td>

                                    <td scope="row">
                                        <span className="badge text-bg-success">
                                            Success
                                        </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td scope="row">May 20, 2023</td>

                                    <td scope="row">6:45 PM</td>

                                    <td scope="row">Food Delivery</td>

                                    <td scope="row">Mobile Reload</td>

                                    <td className="text-danger" scope="row">
                                    <span className="me-2">-</span>$500</td>

                                    <td scope="row">$4,920.00</td>

                                    <td scope="row">
                                        <span className="badge text-bg-danger">
                                            Pending
                                        </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td scope="row">April 28, 2023</td>

                                    <td scope="row">11:20 AM</td>

                                    <td scope="row">Food Delivery</td>

                                    <td scope="row">Mobile Reload</td>

                                    <td className="text-success" scope="row">
                                    <span className="me-2">+</span>$856</td>

                                    <td scope="row">$4,920.00</td>

                                    <td scope="row">
                                        <span className="badge text-bg-success">
                                            Success
                                        </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td scope="row">April 16, 2023</td>

                                    <td scope="row">11:00 PM</td>

                                    <td scope="row">Food Delivery</td>

                                    <td scope="row">Mobile Reload</td>

                                    <td className="text-success" scope="row">
                                    <span className="me-2">+</span>$50</td>

                                    <td scope="row">$4,920.00</td>

                                    <td scope="row">
                                        <span className="badge text-bg-danger">
                                            Pending
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <nav aria-label="Page navigation example">
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
                        </nav>
                </div>
            </div>

            <div className="col-lg-7 col-12">
                <div className="custom-block custom-block-balance">
                    <small>Your Balance</small>

                    <h2 className="mt-2 mb-3">$254,800</h2>

                    <div className="custom-block-numbers d-flex align-items-center">
                        <span>****</span>
                        <span>****</span>
                        <span>****</span>
                        <p>2560</p>
                    </div>

                    <div className="d-flex">
                        <div>
                            <small>Valid Date</small>
                            <p>12/2028</p>
                        </div>

                        <div className="ms-auto">
                            <small>Card Holder</small>
                            <p>Thomas</p>
                        </div>
                    </div>
                </div>

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
            </div>

            <div className="col-lg-5 col-12">
                <div className="custom-block custom-block-transations">
                    <h5 className="mb-4">Recent Transations</h5>

                    <div className="d-flex flex-wrap align-items-center mb-4">
                        <div className="d-flex align-items-center">
                            <img src="images/profile/senior-man-white-sweater-eyeglasses.jpg" className="profile-image img-fluid" alt=""/>

                            <div>
                                <p>
                                    <a href="transation-detail.html">Daniel Jones</a>
                                </p>

                                <small className="text-muted">C2C Transfer</small>
                            </div>
                        </div>

                        <div className="ms-auto">
                            <small>05/12/2023</small>
                            <strong className="d-block text-danger"><span className="me-1">-</span> $250</strong>
                        </div>
                    </div>

                    <div className="d-flex flex-wrap align-items-center mb-4">
                        <div className="d-flex align-items-center">
                            <img src="images/profile/young-beautiful-woman-pink-warm-sweater.jpg" className="profile-image img-fluid" alt=""/>

                            <div>
                                <p>
                                    <a href="transation-detail.html">Public Bank</a>
                                </p>

                                <small className="text-muted">Mobile Reload</small>
                            </div>
                        </div>

                        <div className="ms-auto">
                            <small>22/8/2023</small>
                            <strong className="d-block text-success"><span className="me-1">+</span> $280</strong>
                        </div>
                    </div>

                    <div className="d-flex flex-wrap align-items-center">
                        <div className="d-flex align-items-center">
                            <img src="images/profile/young-woman-with-round-glasses-yellow-sweater.jpg" className="profile-image img-fluid" alt=""/>

                            <div>
                                <p><a href="transation-detail.html">Store</a></p>

                                <small className="text-muted">Payment Received</small>
                            </div>
                        </div>

                        <div className="ms-auto">
                            <small>22/8/2023</small>
                            <strong className="d-block text-success"><span className="me-1">+</span> $280</strong>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-12 col-12">
                        <p className="copyright-text">Copyright © Mini Finance 2048 
                        - Design: <a rel="sponsored" href="https://www.tooplate.com" target="_blank">Tooplate</a></p>
                    </div>

                </div>
            </div>
        </footer>
    </main>


    )
}