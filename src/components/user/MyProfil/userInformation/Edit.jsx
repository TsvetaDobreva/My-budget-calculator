import { useState } from "react";

export default function Edit({ updateUserHandler, initialValue }) {
    const [formValue, setFormValue] = useState(initialValue);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        updateUserHandler(formValue);
    };

    const changeValue = (e) => {
        setFormValue(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="custom-block custom-block-profile">
            <div className="row">
                <div className="col-lg-12 col-12 mb-3">
                    <h6>General</h6>
                </div>

                <form onSubmit={onSubmitHandler} className="custom-form password-form" role="form">
                    <div className="col-lg-9 col-12">
                        <p className="d-flex flex-wrap mb-2">
                            <strong>Img URL:</strong>
                            <input
                                type="text"
                                name="img"
                                id="img"
                                className="form-control"
                                placeholder=""
                                required=""
                                value={formValue.img}
                                onChange={changeValue} />
                        </p>

                        <p className="d-flex flex-wrap mb-2">
                            <strong>Name:</strong>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                className="form-control"
                                placeholder=""
                                required=""
                                value={formValue.username}
                                onChange={changeValue} />
                        </p>

                        <p className="d-flex flex-wrap mb-2">
                            <strong>Phone:</strong>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                className="form-control"
                                placeholder=""
                                required=""
                                value={formValue.phone}
                                onChange={changeValue} />
                        </p>

                        <p className="d-flex flex-wrap mb-2">
                            <strong>Birthday:</strong>
                            <input
                                type="text"
                                name="birthday"
                                id="birthday"
                                className="form-control"
                                placeholder=""
                                required=""
                                value={formValue.birthday}
                                onChange={changeValue} />
                        </p>

                        <p className="d-flex flex-wrap">
                            <strong>Address:</strong>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                className="form-control"
                                placeholder=""
                                required=""
                                value={formValue.address}
                                onChange={changeValue} />
                        </p>
                    </div>
                    <div className="d-flex">
                        <button type="submit" className="form-control me-3">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}