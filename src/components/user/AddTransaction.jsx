import { useState, useEffect, useRef } from 'react'


const initialState = {

    }

export default function AddTransaction({formRef}) {
    
    const submitHandler = (e) => {
        e.preventDefault();
        
    }

    return (
        <main className="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
    
        <div className="row my-4">
            <div className="col-lg-7 col-12">
                <div className="custom-block bg-white">
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="password-tab-pane" role="tabpanel" aria-labelledby="password-tab" tabIndex="0">
                            <h3 className="mb-4">Add transaction</h3>

                            <form ref={formRef} onSubmit={submitHandler} className="custom-form password-form"  role="form">
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    className="form-control" 
                                    placeholder="Email" 
                                    required="" />

                                <input 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    pattern="[0-9a-zA-Z]{4,10}" 
                                    className="form-control" 
                                    placeholder="Password" 
                                    required="" />

                                <div className="d-flex">
                                    <button type="submit" className="form-control me-3">
                                        Add transaction
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