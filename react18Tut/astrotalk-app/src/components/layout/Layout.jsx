import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../header/Navbar";
import DisplayLogin from "../popupModal/DisplayLogin";
import Footer from "../footer/Footer";
import DisplayLoginModal from "../popupModal/DisplayLoginModal";
import Section from "../Section";

const Layout = () => {
  const { modalType, showModal } = useSelector((state) => state.modal);
  return (
    <>
      {showModal && modalType == "login" && <DisplayLoginModal />}
      <div className="layout">
        <NavBar />
        <Section />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
