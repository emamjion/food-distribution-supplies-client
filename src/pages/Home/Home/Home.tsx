import Banner from "./Banner";
import Gallery from "./Gallery";
import SuppliesSection from "./SuppliesSection";
import Testimonial from "./Testimonial";
import WhoWeAre from "./WhoWeAre";

const Home = () => {
    return (
        <div>
            <Banner/>
            <SuppliesSection/>
            <Testimonial/>
            <Gallery/>
            <WhoWeAre/>
        </div>
    );
};

export default Home;