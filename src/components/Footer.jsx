import { Link } from "react-router-dom";
import { useCategoriesContext } from "../store/CategoriesContext";
import { useEffect } from "react";

export default function Footer() {
  const { state, fetchCategories } = useCategoriesContext();
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="footer-top-area">
      <div className="zigzag-bottom"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="footer-about-us">
              <h2>
                <span>MyStore</span>
              </h2>
              <p>
                Welcome to TechTunes, your ultimate destination for all things
                iPod! Nestled in the heart of downtown, our store is a haven for
                music lovers and tech enthusiasts alike. Step into a world where
                sleek design meets cutting-edge technology
              </p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="footer-menu">
              <h2 className="footer-wid-title">Categories </h2>
              <ul>
                {state.data.map((ctg) => {
                  return (
                    <li key={ctg.id}>
                      {" "}
                      <Link to={`/shop/${ctg.name.toLowerCase()}`}>
                        {ctg.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="footer-newsletter">
              <h2 className="footer-wid-title">Newsletter</h2>
              <p>
                Sign up to our newsletter and get exclusive deals you wont find
                anywhere else straight to your inbox!
              </p>
              <div className="newsletter-form">
                <form action="#">
                  <input type="email" placeholder="Type your email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
