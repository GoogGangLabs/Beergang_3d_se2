import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

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
      <Outlet />
    </>
  );
};

export default GlobalLayout;
