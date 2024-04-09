import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../header/Navbar";
import DisplayLogin from "../popupModal/DisplayLogin";
import Footer from "../footer/Footer";

const Layout = () => {
  const { modalType, showModal } = useSelector((state) => state.modal);
  return (
    <>
      {showModal && modalType == "login" && <DisplayLogin />}
      <div className="layout">
        <NavBar />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
