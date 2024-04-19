// import React from "react";
// import Navbar from "../components/NavBar";
// import { useState } from "react";
// import Slider from "../components/Slider";
// import styled from "styled-components";
// import CategorySlider from "../components/CategorySlider";
// import { useSelector } from "react-redux";
// import { useLocation, useSearchParams } from "react-router-dom";

// function Categories() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation();
//   const { pathname } = location;
//   console.log("pathname", pathname);
//   const pathParts = pathname.split("/");

//   // Get the scripture part from the path
//   const category = pathParts[2];
//   window.onscroll = () => {
//     setIsScrolled(window.pageYOffset === 0 ? false : true);
//     return () => (window.onscroll = null);
//   };
//   const { astrosubcategory } = useSelector((state) => state?.astrologers);

//   return (
//     <div className="astroPage">
//       <Container>
//         {/* <div className="navbar"> */}
//         <Navbar isScrolled={isScrolled} />
//         {/* </div> */}
//         <div className="data">
//           {/* <SelectGenre genres={genres} type="movie" /> */}
//           {/* {movies.length ? <Slider /> : <NotAvailable />} */}
//           <CategorySlider movies={astrosubcategory} titlename={category} />
//         </div>
//       </Container>
//     </div>
//   );
// }

// const Container = styled.div`
//   .data {
//     margin-top: 8rem;
//     .not-available {
//       text-align: center;
//       color: black;
//       margin-top: 4rem;
//     }
//   }
// `;

// export default Categories;
