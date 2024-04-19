import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SetAstroLogerDetail } from "../store/reducer";
import styled from "styled-components";
import img from "../assests/home.jpg";
import Navbar from "../components/NavBar";
import HomeSlider from "../components/HomeSlider";

function AstroDetails() {
  const id = useParams();
  const astroId = id?.id;
  const dispatch = useDispatch();
  const { detail } = useSelector((state) => state?.astrologers);
  console.log("detail", detail);

  useEffect(() => {
    dispatch(SetAstroLogerDetail(astroId));
  }, []);
  return (
    <div className="astroPage">
      <Navbar />
      <div className="container">
        <div className="row pt-5">
          {detail && (
            <div className="row">
              <div className="col-md-6">
                <img
                  className="img-fluid"
                  src={detail?.image}
                  alt={detail?.name}
                />
              </div>
              <div className="col-md-6 text-white">
                <h1>{detail?.name}</h1>
                <p>{detail?.about}</p>
                <br></br>
                <span>Experience: {detail?.experience}</span>
                <br></br>
                <span>Language: {detail?.language}</span>
                <br></br>
                <span>Specialization : {detail?.specialization}</span>
                <br></br>
                <span>Cost : {detail?.cost}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <HomeSlider titlename="Sessions" />
    </div>
  );
}
const Container = styled.div``;
export default AstroDetails;
