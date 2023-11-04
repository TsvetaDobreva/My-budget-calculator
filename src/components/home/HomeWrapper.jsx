import HomeMain from "./HomeMain";
import HomeNav from "./HomeNav";

export default function HomeWrapper() {
    return (
        <div class="container-fluid">

            <div class="row">
                <HomeNav />
                <HomeMain />
            </div>
            
        </div>
    )
}