import "./App.css";
import BoxDisplay from "./components/BoxDisplay";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import tv from "./assets/tv_display.jpeg";
import download from "./assets/download.jpg";
import watch from "./assets/watch.jpeg";
import kids from "./assets/kids.png";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Section />
      <BoxDisplay
        heading1="Enjoy on your TV"
        heading2="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        imgSrc={tv}
        right={true}
      />
      <BoxDisplay
        heading1="Download your shows to watch offline"
        heading2="Save your favourites easily and always have something to watch."
        imgSrc={download}
        right={false}
      />
      <BoxDisplay
        heading1="Watch everywhere"
        heading2="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        imgSrc={watch}
        right={true}
      />
      <BoxDisplay
        heading1="Create profiles for kids"
        heading2="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
        imgSrc={kids}
        right={false}
      />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
