import BrandNameCards from "../BrandNameCards/BrandNameCards";
import EatHubPass from "../EatHubPass/EatHubPass";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";


const Home = () => {
    return (
        <div>
            <div className="hero h-[600px] " style={{ backgroundImage: 'url(https://i.ibb.co/BtWwdbZ/banner-image.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-6xl font-bold">TastyEatsHub</h1>
                        <p className="mb-5 font-bold">Discover a delectable world of culinary wonders and beverage delights on our food and beverage , where every visit is a flavorful journey</p>
                        <button className="btn btn-secondary">Order Now!</button>
                    </div>
                </div>
            </div>
            <BrandNameCards></BrandNameCards>
            <EatHubPass></EatHubPass>
            <Features></Features>
            <Footer></Footer>
        </div>
        
    );
};

export default Home;