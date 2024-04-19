import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "../App.css";
import { useNavigate } from "react-router-dom";

import Slider from "../components/Slider";

import Navbar from "../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { SetAstroData } from "../store/reducer";

function Astrologers() {
  const [isScrolled, setIsScrolled] = useState(false);

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state?.astrologers);
  const astrodata = data;
  console.log("astrodata", astrodata);

  // useEffect(() => {
  //   // Call the API action when the component mounts

  // }, [dispatch]);

  const [user, setUser] = useState(undefined);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className="astroPage">
      <Container>
        {/* <div className="navbar"> */}
        <Navbar isScrolled={isScrolled} />
        {/* </div> */}
        <div className="data">
          {/* <SelectGenre genres={genres} type="movie" /> */}
          {/* {movies.length ? <Slider /> : <NotAvailable />} */}
          <Slider movies={astrodata} />
        </div>
      </Container>
    </div>
  );
}

const Container = styled.div`
  .data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: black;
      margin-top: 4rem;
    }
  }
`;
export default Astrologers;
