import { Fragment } from "react";
import Header from "../components/header/Header";
import Navbar from "../components/Navbar";
import slide1 from "../assets/img/h4-slide.png";
import slide2 from "../assets/img/h4-slide2.png";
import slide3 from "../assets/img/h4-slide3.png";
import slide4 from "../assets/img/h4-slide4.png";
import brand1 from "../assets/img/brand1.png";
import brand2 from "../assets/img/brand2.png";
import brand3 from "../assets/img/brand3.png";
import brand4 from "../assets/img/brand4.png";
import brand5 from "../assets/img/brand5.png";
import brand6 from "../assets/img/brand6.png";
import TopSellerProducts from "../components/homeScreen/TopSellerProducts";
import TopNewProducts from "../components/homeScreen/TopNewProducts";
import RecentViewedProducts from "../components/homeScreen/RecentViewedProducts";
import { useProductContext } from "../store/productContext";
import Footer from "../components/Footer";
import React from "react";
export default function Home() {
  const { state, fetchData } = useProductContext();
  React.useEffect(() => {
    fetchData();
  }, []);
  React.useEffect(() => {
    fetchData();
  }, [state.data]);
  

  const Carousel = () => {
    return (
      <div className="slider-area">
        <div className="block-slider block-slider4">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src={slide4}
                  alt="Fourth slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={slide2}
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={slide3} alt="Third slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={slide1} alt="First slide" />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  };
  const Promo = ({ name, icon, index }) => {
    let classNameI = "single-promo promo" + index;
    let className = "fa fa-" + icon;
    return (
      <div className="col-md-3 col-sm-6">
        <div className={classNameI}>
          <i className={className} />
          <p>{name}</p>
        </div>
      </div>
    );
  };
  const brands = [brand1, brand2, brand3, brand4, brand5, brand6];
  return (
    <Fragment>
      <Header />
      <Navbar />
      <Carousel />
      {/* promotions  */}
      <div className="promo-area">
        <div className="zigzag-bottom" />
        <div className="container">
          <div className="row">
            <Promo name="30 Day return " icon={"refresh"} index={1} />
            <Promo name="Free shipping " icon={"truck"} index={2} />
            <Promo name="Secure Payments" icon={"lock"} index={3} />
            <Promo name="New Products" icon={"gift"} index={4} />
          </div>
        </div>
      </div>
      {/* promo Area */}
      <div className="brands-area">
        <div className="zigzag-bottom" />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="brand-wrapper">
                <div className="brand-list">
                  {brands.map((brand) => {
                    return <img key={brand} src={brand} alt={brand} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-widget-area">
        <div className="zigzag-bottom" />
        <div className="container">
          <div className="row">
            <TopSellerProducts />
            <RecentViewedProducts />
            <TopNewProducts />
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}
