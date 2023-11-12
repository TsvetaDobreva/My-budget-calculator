 import { useState, useRef, useEffect } from 'react';

 const initialState = {
    fullName: '',
    email: '',
    password: '',
    rePassword: ''
 }


export default function Register( {
    formRef
}) {
    const [formValue, setFormValue] = useState(initialState);
    const [errors, setErrors] = useState({});

    const changeHandler = (e) => {
        let value = '';
        
        switch (e.target.type) {
            case 'number' : value = Number(e.target.value); 
                break;
            default: value = e.target.value; 
                break;
        }
       
        setFormValue(state => ({
            ...state,
            [e.target.name] : value
        }));
    };

    const resetFormHandler = () => {
        setFormValue(initialState);
        setErrors({});
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formValue);
        resetFormHandler()
    }

    return (
        <main className="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
    
            <div className="row my-4">
                <div className="col-lg-7 col-12">
                    <div className="custom-block bg-white">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="password-tab-pane" role="tabpanel" aria-labelledby="password-tab" tabIndex="0">
                                <h3 className="mb-4">Register</h3>

                                <form ref={formRef} onSubmit={submitHandler} className="custom-form password-form" role="form">
                                    <input 
                                        type="text" 
                                        name="fullName" 
                                        id="full-name" 
                                        className="form-control" 
                                        placeholder="Full name"
                                        value={formValue.fullName} 
                                        onChange={changeHandler}
                                        required="" 
                                    />
                                    
                                    <input 
                                        type="text" 
                                        name="email" 
                                        id="email" 
                                        className="form-control" 
                                        placeholder="Email" 
                                        value={formValue.email}
                                        onChange={changeHandler}
                                        required="" 
                                    />
                                   
                                    <input 
                                        type="password" 
                                        name="password" 
                                        id="password" 
                                        pattern="[0-9a-zA-Z]{4,10}" 
                                        className="form-control" 
                                        placeholder="Password" 
                                        value={formValue.password}
                                        onChange={changeHandler}
                                        required="" 
                                    />

                                    <input 
                                        type="password" 
                                        name="rePassword" 
                                        id="re-password" 
                                        pattern="[0-9a-zA-Z]{4,10}" 
                                        className="form-control" 
                                        placeholder="Confirm password" 
                                        value={formValue.rePassword}
                                        onChange={changeHandler}
                                        required="" 
                                    />

                                    <div className="d-flex">
                                        <button type="submit" className="form-control me-3">
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