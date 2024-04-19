import React from "react";
import styled from "styled-components";
import background from "../assests/login.jpg";

export default function BackgroundImage({ image }) {
  return (
    <Container>
      <img src={image || background} alt="background" />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
  }
`;
