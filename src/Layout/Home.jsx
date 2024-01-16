import MainContent from "../Component/MainContent";
import MiniNavbar from "../Component/MiniNavbar";
import Navbar from "../Component/Navbar";

const Home = () => {
    return (
        <div className="container mx-auto mb-20">
            <Navbar />
            <MiniNavbar />
            <MainContent />
        </div>
    );
};

export default Home;