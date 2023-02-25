import { BackgroundMusic, NavBar } from "components";
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Intro from "./Intro";

const GlobalLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  return (
    <>
      <Intro />
      <NavBar />
      <Outlet />
      <BackgroundMusic />
    </>
  );
};

export default GlobalLayout;
