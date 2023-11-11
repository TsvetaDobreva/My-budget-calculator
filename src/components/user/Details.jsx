export default function Details() {
    return (
        
        <main className="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
        <div className="title-group mb-3">
            <h1 className="h2 mb-0">Transations Detail</h1>
        </div>

        <div className="row my-4">
            <div className="col-lg-12 col-12">
                <div className="custom-block custom-block-transation-detail bg-white">
                    <div className="d-flex flex-wrap align-items-center border-bottom pb-3 mb-3">
                        <div className="d-flex align-items-center">
                            <img src="images/profile/young-woman-with-round-glasses-yellow-sweater.jpg" className="profile-image img-fluid" alt=""/>

                            <div>
                                <p>Store</p>

                                <small className="text-muted">Payment Received</small>
                            </div>
                        </div>

                        <div className="ms-auto">
                            <small>22/8/2023</small>
                            <strong className="d-block text-success"><span className="me-1">+</span> $280</strong>
                        </div>
                    </div>

                    <div className="d-flex flex-wrap align-items-center">
                        <div className="custom-block-transation-detail-item mt-4">
                            <h6>Transation ID</h6>

                            <p>283J3S0EL023</p>
                        </div>

                        <div className="custom-block-transation-detail-item mt-4 mx-auto px-4">
                            <h6>Description</h6>

                            <p>Shopee</p>
                        </div>

                        <div className="custom-block-transation-detail-item mt-4 ms-lg-auto px-lg-3 px-md-3">
                            <h6>Payment Type</h6>

                            <p>C2C Transfer</p>
                        </div>

                        <div className="custom-block-transation-detail-item mt-4 ms-auto me-auto">
                            <h6>Amounts</h6>

                            <p>$280</p>
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