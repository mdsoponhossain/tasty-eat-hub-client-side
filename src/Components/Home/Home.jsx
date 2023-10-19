import BrandNameCards from "../BrandNameCards/BrandNameCards";
import EatHubPass from "../EatHubPass/EatHubPass";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import HomeBanner from "../HomeBanner/HomeBanner";


const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <BrandNameCards></BrandNameCards>
            <EatHubPass></EatHubPass>
            <Features></Features>
            <Footer></Footer>
        </div>

    );
};

export default Home;