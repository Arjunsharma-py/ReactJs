import Body from "../components/body/Body";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import { Counter } from "../components/Counter";

const Home = () => {
  return (
    <>
      <Navbar />
      <Body />
      <Counter />
      <Footer />
    </>
  );
};

export default Home;
