import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="w-full" id="section-hero">
        <div className="h-screen w-full bg-gray-200" id="hero-container"></div>
      </div>
    </>
  );
};
export default Home;
