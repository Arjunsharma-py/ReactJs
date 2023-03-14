import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
          alt="home page"
        />
        <div className="home_row">
          <Product
            id="45345345"
            title="OnePlus 9 Astral Black"
            image="https://m.media-amazon.com/images/I/71hIjJkMqFL._AC_SY200_.jpg"
            price={379.99}
            rating={5}
          />
          <Product
            id="45345346"
            title="OnePlus Nord N20 5G"
            image="https://m.media-amazon.com/images/I/81ZEdtYBYfL._AC_SY200_.jpg"
            price={295.99}
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="84759305"
            title="FM Radio"
            image="https://m.media-amazon.com/images/I/613+CG1dP1L._AC_SY200_.jpg"
            price={17.49}
            rating={5}
          />
          <Product
            id="84759306"
            title="Foamily Throw Pillows"
            image="https://m.media-amazon.com/images/I/71kENaxQixL._AC_SY200_.jpg"
            price={11.99}
            rating={3}
          />
          <Product
            id="84759307"
            title="Homedics SoundSleep"
            image="https://m.media-amazon.com/images/I/61XYX1tzoTL._AC_SY200_.jpg"
            price={17.59}
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="74960029"
            title="Acer Laptop"
            image="https://m.media-amazon.com/images/I/7189iXimfWL._AC_SY200_.jpg"
            price={449.99}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
