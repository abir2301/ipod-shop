import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import useFetchImage from "../hooks/useFetchImage";
import { useProductContext } from "../store/productContext";
import img1 from "../assets/img/product-thumb-1.jpg";
import img2 from "../assets/img/product-thumb-2.jpg";
import img3 from "../assets/img/product-thumb-2.jpg";

export default function Produit() {
  const { marque, id } = useParams();
  const [product, setProduct] = React.useState({});
  const [categories, setCategories] = React.useState([]);

  const { state, fetchData } = useProductContext();

  React.useEffect(() => {
   
    const filteredData = state.data["products-lists"].filter(
      (item) => item.name.toUpperCase() === marque.toUpperCase()
    );

    const getProduct = filteredData[0].items.find((item) => item.id == id);
    const otherCategories = state.data.categories.filter(
      (ctg) => ctg.name.toUpperCase() != marque.toUpperCase()
    );
    setCategories(otherCategories);

    setProduct(getProduct);
  }, [marque, id]);

  const { image, isLoading } = useFetchImage(marque, product.imageName);
  const priceDiscount = (
    product.price -
    product.price * product.discountRate * 0.01
  ).toFixed(2);
  return (
    <div className="single-product-area">
      <div className="zigzag-bottom"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="single-sidebar">
              <h2 className="sidebar-title">Recently Viewed</h2>
              <div className="thubmnail-recent">
                <img
                  src="img/product-thumb-1.jpg"
                  className="recent-thumb"
                  alt=""
                />
                <h2>
                  <a href="">Sony Smart TV - 2015</a>
                </h2>
                <div className="product-sidebar-price">
                  <ins>700.00 € </ins> <del>100.00 €</del>
                </div>
              </div>
              <div className="thubmnail-recent">
                <img
                  src="img/product-thumb-1.jpg"
                  className="recent-thumb"
                  alt=""
                />
                <h2>
                  <a href="">Sony Smart TV - 2015</a>
                </h2>
                <div className="product-sidebar-price">
                  <ins>$700.00</ins> <del>$100.00</del>
                </div>
              </div>
              <div className="thubmnail-recent">
                <img
                  src="img/product-thumb-1.jpg"
                  className="recent-thumb"
                  alt=""
                />
                <h2>
                  <a href="">Sony Smart TV - 2015</a>
                </h2>
                <div className="product-sidebar-price">
                  <ins>$700.00</ins> <del>$100.00</del>
                </div>
              </div>
              <div className="thubmnail-recent">
                <img
                  src="img/product-thumb-1.jpg"
                  className="recent-thumb"
                  alt=""
                />
                <h2>
                  <a href="">Sony Smart TV - 2015</a>
                </h2>
                <div className="product-sidebar-price">
                  <ins>$700.00</ins> <del>$100.00</del>
                </div>
              </div>
            </div>

            <div className="single-sidebar">
              <h2 className="sidebar-title">Others brands</h2>
              <ul>
                {categories.map((ctg) => {
                  return (
                    <li key={ctg.id}>
                      <Link href="">{ctg.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="col-md-8">
            <div className="product-content-right">
              <div className="product-breadcroumb">
                <Link to="/home">Home</Link>
                <Link to={`/shop/${marque}`}>{marque}</Link>
                <a>{product.name}</a>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className="product-images">
                    <div className="product-main-img">
                      {isLoading ? (
                        <p>Loading...</p>
                      ) : (
                        <div>
                          <img src={image} alt={product.name} />
                        </div>
                      )}
                    </div>

                    <div className="product-gallery">
                      <img src={img1} alt="" />
                      <img src={img2} alt="" />
                      <img src={img3} alt="" />
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="product-inner">
                    <h2 className="product-name">{product.name}</h2>
                    <div className="product-inner-price">
                      <ins>${priceDiscount}</ins> <del>${product.price}</del>
                    </div>

                    <form action="" className="cart">
                      <div className="quantity">
                        <input
                          type="number"
                          size="4"
                          className="input-text qty text"
                          title="Qty"
                          defaultValue="1"
                          name="quantity"
                          min="1"
                          step="1"
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
                        companion for everyday communication and entertainment.
                        With a sleek design and intuitive interface, this device
                        offers a seamless user experience. Enjoy crisp visuals,
                        smooth performance, and ample storage for your digital
                        needs. Capture life's moments with the advanced camera
                        system, and stay connected all day with long-lasting
                        battery life. Upgrade to simplicity and functionality
                        with our Standard Smartphone.
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
  );
}
