import ShowProfilInfo from './userInformation/ShowProfilInfo';
import AllCards from "./cardInformation/AllCards";

export default function MyProfil(formRef) {

    return (
        <main className="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
        
            <div className="title-group mb-3">
                <h1 className="h2 mb-0">Profile</h1>
            </div>

            <div className="row my-4">
                <div className="col-lg-7 col-12">
                    <ShowProfilInfo />      
                    <AllCards/>
                </div>
            </div>
        </main>
    );
}