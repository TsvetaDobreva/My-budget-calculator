import { Link } from "react-router-dom";

export default function UserInfo({ userInfo }) {

    return (
        <div className="custom-block custom-block-profile-front custom-block-profile text-center bg-white">
            <div className="custom-block-profile-image-wrap mb-4">
                <img src={userInfo.img !== "'' " ? userInfo.img : '../../../../../public/images/profilImg.png'} className="custom-block-profile-image img-fluid" alt="" />
                
                <Link to="/profile" className="bi-pencil-square custom-block-edit-icon"></Link>
            </div>

            <p className="d-flex flex-wrap mb-2">
                <strong>Name:</strong>

                <span>{userInfo.username}</span>
            </p>

            <p className="d-flex flex-wrap mb-2">
                <strong>Email:</strong>

                <a href="#">
                    {userInfo.email}
                </a>
            </p>

            <p className="d-flex flex-wrap mb-0">
                <strong>Phone:</strong>

                <a href="#">
                    {userInfo.phone}
                </a>
            </p>
        </div>
    );
};