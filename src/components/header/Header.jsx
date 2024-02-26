// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../../assets/img/logo.png";
import SearchBar from "./SearchBar";
import CartBtn from "./CartBtn";

export default function Header() {
  return (
    <div className="site-branding-area">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="logo" style={{ width: "100px", height: "100px" }}>
                <h1><a href="index.html"><img src={logo} alt="Logo" /></a></h1>
              </div>
            </div>
            <SearchBar/>
           <CartBtn/>
          </div>
        </div>
      </div>
  );
}
