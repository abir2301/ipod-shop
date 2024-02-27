import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="mainmenu-area">
      <div className="container">
        <div className="row">
          <div className="navbar">
            <ul className="nav navbar-nav navbar-expand">
              <li className="active">
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/shop/samsung">Samsung</Link>
              </li>
              <li>
                <Link to="/shop/apple">Apple</Link>
              </li>
              <li>
                <Link to="/shop/lg">LG</Link>
              </li>
              <li>
                <Link to="/shop/sony">Sony</Link>
              </li>
              <li>
                <Link to="/shop/huawei">Huawei</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
