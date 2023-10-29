import HeroTextbox from '../components/HeroTextbox';
import Navbar from '../components/Navbar';
import SectionTitle from '../components/SectionTitle';

import FeaturedProperties from './sections/FeaturedProperties';

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
      </div>

      <SectionTitle />
      <FeaturedProperties />
      <SectionTitle />
    </>
  );
};
export default Home;
