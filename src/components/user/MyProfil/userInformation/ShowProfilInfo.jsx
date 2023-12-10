import { useEffect, useState } from "react";
import Edit from "./Edit";
import { userService } from "../../../../services/userService";

export default function ShowProfilInfo() {
    const [isEdit, setIsEdit] = useState(false);
    const [userInfo, setUserInfo] = useState({
        img: '',
        username: '',
        phone: '',
        birthday: '',
        address: '',
    });

    useEffect(() => {
        userService.getUser().then(data => {
            setUserInfo(data);
        });
    }, []);

    const userInfoUpdate = (value) => {
        userService.updateUser(value);
        setUserInfo(value);
        setIsEdit(false);
    };

    const onChangeEdit = (e) => {
        setIsEdit(true);
    };

    return (
        <div className="custom-block custom-block-profile">
            <div className="row">
                <div className="col-lg-12 col-12 mb-3">
                    <h6>General</h6>
                </div>

                <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                    <div className="custom-block-profile-image-wrap">
                        <img src={userInfo.img ? userInfo.img : '../../../../public/images/profilImg.png'} alt="" className="custom-block-profile-image img-fluid" />

                        <a onClick={onChangeEdit} className="bi-pencil-square custom-block-edit-icon"></a>
                    </div>
                </div>

                {isEdit ? (<Edit updateUserHandler={userInfoUpdate} initialValue={Object.assign({}, userInfo)} />) : (
                    <div className="col-lg-9 col-12">

                        <p className="d-flex flex-wrap mb-2">
                            <strong>Name:</strong>
                            <span>{userInfo.username}</span>
                        </p>

                        <p className="d-flex flex-wrap mb-2">
                            <strong>Phone:</strong>

                            <a href="#">
                                {userInfo.phone}
                            </a>
                        </p>

                        <p className="d-flex flex-wrap mb-2">
                            <strong>Birthday:</strong>

                            <span>{userInfo.birthday}</span>
                        </p>

                        <p className="d-flex flex-wrap">
                            <strong>Address:</strong>

                            <span>{userInfo.address}</span>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}