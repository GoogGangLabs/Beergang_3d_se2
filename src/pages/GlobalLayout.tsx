import { Loader } from "@react-three/drei";
import { BackgroundMusic, CustomLoader, NavBar } from "components";
import React, { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import DeniedPage from "./DeniedPage";
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
