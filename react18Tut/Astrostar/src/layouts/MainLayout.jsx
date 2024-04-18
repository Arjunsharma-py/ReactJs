import React from "react";
import { Outlet, useParams } from "react-router-dom";

const MainLayout = () => {
  // const lang = useParams();
  // console.log(lang);
  return (
    <>
      <Outlet />
    </>
  );
};

export default MainLayout;
