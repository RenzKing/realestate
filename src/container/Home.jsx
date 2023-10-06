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
            className="brightness-50 min-h-screen w-full object-cover"
            alt="hero"
            id="hero-image"
          />
          <HeroTextbox />
        </div>
      </div>
    </>
  );
};
export default Home;
