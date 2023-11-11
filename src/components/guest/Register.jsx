export default function Register() {
    return (
        <main className="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
    
            <div className="row my-4">
                <div className="col-lg-7 col-12">
                    <div className="custom-block bg-white">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="password-tab-pane" role="tabpanel" aria-labelledby="password-tab" tabindex="0">
                                <h3 className="mb-4">Register</h3>

                                <form className="custom-form password-form" action="#" method="post" role="form">
                                    <input type="text" name="fullName" id="full-name" className="form-control" placeholder="Full name" required="" />
                                    
                                    <input type="text" name="email" id="email" className="form-control" placeholder="Email" required="" />
                                   
                                    <input type="password" name="password" id="password" pattern="[0-9a-zA-Z]{4,10}" className="form-control" placeholder="Password" required="" />

                                    <input type="password" name="rePassword" id="re-password" pattern="[0-9a-zA-Z]{4,10}" className="form-control" placeholder="Confirm password" required="" />

                                    <div className="d-flex">
                                        <button type="button" className="form-control me-3">
                                            Register
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}