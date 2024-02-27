import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useProductContext } from "../store/productContext";

export default function ShopProducts() {
  const { state, fetchData } = useProductContext();
  React.useEffect(() => {
    fetchData();
   
  }, []);

  return (
    <Fragment>
      <Header></Header>
      <Navbar />
      <Outlet />
      <Footer />
    </Fragment>
  );
}
