import React from "react";
import styled from "styled-components";
import CardSlider from "./CardSlider";
import HomeCardSlider from "./HomeCardSlider";
export default function HomeSlider({ movies, titlename }) {
  const getMoviesFromRange = (from, to) => {
    console.log("object", movies && movies.slice(from, to));
    return movies && movies.slice(from, to);
  };

  return (
    <Container>
      <HomeCardSlider data={getMoviesFromRange(0, 10)} title={titlename} />
      <HomeCardSlider data={getMoviesFromRange(0, 10)} title="Top Release" />
    </Container>
  );
}

const Container = styled.div``;
