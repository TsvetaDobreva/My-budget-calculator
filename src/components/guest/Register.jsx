import { useContext, useEffect } from 'react';

import UserContext from '../../utils/context/userContext';
import useForm from '../../utils/hooks/useForm';

const initialState = {
    username: '',
    email: '',
    password: '',
    rePassword: ''
}

export default function Register() {
    const { registerSubmitHandler, authErrors, setAuthErrors } = useContext(UserContext);
    const { values, onChange, onSubmit, errors } = useForm(registerSubmitHandler, initialState);

    useEffect(() => {
        return () => {
            setAuthErrors({});
        }
    }, []);

    return (
        <main className="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">

            <div className="row my-4">
                <div className="col-lg-7 col-12">
                    <div className="custom-block bg-white">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="password-tab-pane" role="tabpanel" aria-labelledby="password-tab" tabIndex="0">
                                <h3 className="mb-4">Register</h3>

                                <form onSubmit={onSubmit} className="custom-form password-form" role="form">
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        className="form-control"
                                        placeholder="Username"
                                        value={values.username}
                                        onChange={onChange}
                                        required=""
                                    />
                                    {authErrors.username && <small className="d-block text-danger">{authErrors.username}</small>}

                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        className="form-control"
                                        placeholder="Email"
                                        value={values.email}
                                        onChange={onChange}
                                        required=""
                                    />
                                    {authErrors.email && <small className="d-block text-danger">{authErrors.email}</small>}

                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="form-control"
                                        placeholder="Password"
                                        value={values.password}
                                        onChange={onChange}
                                        required=""
                                    />
                                    {authErrors.password && <small className="d-block text-danger">{authErrors.password}</small>}

                                    <input
                                        type="password"
                                        name="rePassword"
                                        id="re-password"
                                        className="form-control"
                                        placeholder="Confirm password"
                                        value={values.rePassword}
                                        onChange={onChange}
                                        required=""
                                    />
                                    {authErrors.rePassword && <small className="d-block text-danger">{authErrors.rePassword}</small>}

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