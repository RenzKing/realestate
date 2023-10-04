import HeroTextbox from '../components/HeroTextbox';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="" id="section-hero">
        <div className="w-full bg-gray-200 " id="hero-container">
          <HeroTextbox />
          <img
            src="/img/buildings.jpg"
            className="h-screen w-full object-cover"
            alt="hero"
            id="hero-image"
          />
        </div>
      </div>
    </>
  );
};
export default Home;
