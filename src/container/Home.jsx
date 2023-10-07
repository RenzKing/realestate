import AutoCarousel from '../components/AutoCarousel';
import HeroTextbox from '../components/HeroTextbox';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="" id="section-hero">
        <div
          className="flex w-full flex-col items-center justify-center bg-gray-200"
          id="hero-container"
        >
          <img
            src="/img/buildings.png"
            className="min-h-screen w-full object-cover brightness-50"
            alt="hero"
            id="hero-image"
          />
          <HeroTextbox />
        </div>
        <AutoCarousel />
      </div>

      <div className="" id="section-developer-logo">
        <div className="w-full bg-green-700 p-24" id="developer-container">
          <h1>Developers</h1>
        </div>
      </div>
    </>
  );
};
export default Home;
