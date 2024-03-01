// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../../assets/img/logo.png";
import SearchBar from "./SearchBar";
import CartBtn from "./CartBtn";
import { Link } from "react-router-dom";

export default function Header({ serach = true }) {
  return (
    <div className="site-branding-area">
      <div className="container">
        <div className="row">
          <div className={serach ?"col-sm-4" : "col-sm-6"}>
            <div className="logo" style={{ width: "100px", height: "100px" }}>
              <h1>
                <Link to={"/"}>
                  <img src={logo} alt="Logo" />
                </Link>
              </h1>
            </div>
          </div>
          {serach && <SearchBar />}
          <CartBtn  search={serach}/>
        </div>
      </div>
    </div>
  );
}
