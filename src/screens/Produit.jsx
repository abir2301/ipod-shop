import React from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { useProductContext } from "../store/productContext";
import img1 from "../assets/img/product-thumb-1.jpg";
import img2 from "../assets/img/product-thumb-2.jpg";
import img3 from "../assets/img/product-thumb-3.jpg";
import { CartContext } from "../store/Cartcontext";
import RecentViewedProducts from "../components/homeScreen/RecentViewedProducts";
import Header from "../components/header/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { discountPrice } from "../utils/totalPriceCalculation";
import { useCategoriesContext } from "../store/CategoriesContext";

export default function Produit() {
  const { marque, id } = useParams();
  const [product, setProduct] = React.useState({});
  const [categories, setCategories] = React.useState([]);

  const { state, fetchData } = useProductContext();
  const { state: categoriesState, fetchCategories  } = useCategoriesContext();

  const cartCtx = useContext(CartContext);

  React.useEffect(() => {
    fetchData();
    if(categoriesState.data == undefined){
      fetchCategories()
    }
  }, []);
  React.useEffect(() => {
    if (state.data) {
      const filteredData = state.data.filter(
        (item) => item.name.toUpperCase() === marque.toUpperCase()
      );

      const getProduct = filteredData[0].items.find((item) => item.id == id);
      const otherCategories =categoriesState.data.filter(
        (ctg) => ctg.name.toUpperCase() != marque.toUpperCase()
      );
      setCategories(otherCategories);

      setProduct(getProduct);
    }
  }, [marque, id, state]);
  const [quantity, setQuantity] = React.useState(1);

  const handleQuantityChange = (event) => {
    const newQuantity = Math.max(parseInt(event.target.value), 1);
    setQuantity(newQuantity);
  };
  const handleFormSubmit = (event, product) => {
    event.preventDefault();
    cartCtx.addItemWithQuantity(product, quantity);
  };

  return (
    <div>
      <Header />
      <Navbar />
      <div className="single-product-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <RecentViewedProducts styling={true} />
              <div className="single-sidebar">
                <h2 className="sidebar-title">Others brands</h2>
                <ul>
                  {categories.map((ctg) => {
                    return (
                      <li key={ctg.id}>
                        <Link to={"/shop/" + ctg.name}>{ctg.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="col-md-8">
              <div className="product-content-right">
                <div className="product-breadcroumb">
                  <Link to="/">Home</Link>
                  <Link to={`/shop/${marque}`}>{marque}</Link>
                  <a>{product.name}</a>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="product-images">
                      <div className="product-main-img">
                        <div>
                          <img
                            src={`/src/assets/img/${marque}/${product.imageName}`}
                            alt={product.name}
                          />
                        </div>
                      </div>

                      <div className="product-gallery">
                        <img
                          src={img1}
                          alt=""
                        />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="product-inner">
                      <h2 className="product-name">{product.name}</h2>
                      <div className="product-inner-price">
                        <ins>${discountPrice(product)}</ins>{" "}
                        <del>${product.price}</del>
                      </div>

                      <form
                        onSubmit={() => {
                          handleFormSubmit(event, product);
                        }}
                        className="cart"
                      >
                        <div className="quantity">
                          <input
                            type="number"
                            size="4"
                            className="input-text qty text"
                            title="Qty"
                            defaultValue="1"
                            name="quantity"
                            min="1"
                            onChange={handleQuantityChange}
                          />
                        </div>
                        <button className="add_to_cart_button" type="submit">
                          Add to cart
                        </button>
                      </form>

                      <div className="product-inner-category">
                        <h2>Product Description</h2>
                        <p>
                          Introducing our Standard Smartphone – your reliable
                          companion for everyday communication and
                          entertainment. With a sleek design and intuitive
                          interface, this device offers a seamless user
                          experience. Enjoy crisp visuals, smooth performance,
                          and ample storage for your digital needs. Capture
                          life's moments with the advanced camera system, and
                          stay connected all day with long-lasting battery life.
                          Upgrade to simplicity and functionality with our
                          Standard Smartphone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
