import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import useFetchImage from "../hooks/useFetchImage";

export default function Produit() {
  const { marque, id } = useParams();
  const [product, setProduct] = React.useState({});
  const { data, isFetching } = useFetchData("products-lists", "db.json");
  
  React.useEffect(() => {
    if  (data){ console.log(data , isFetching);
        const filteredData = data.filter(
          (item) => item.name.toUpperCase() === marque.toUpperCase()
        );
    
        const items =filteredData ;
        console.log(items)
        console.log(items[0].name)
        console.log(items.items)
        const getProduct = filteredData[0].items.filter((item) => item.id === id);
        setProduct(...getProduct);
        }
       
  }, [marque, data, product]);
  const { image } = useFetchImage(marque, product["imageName"]);

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
                <li>
                  <Link href="">Sony</Link>
                </li>
                <li>
                  <Link href="">Samsung</Link>
                </li>
                <li>
                  <Link href="">LG</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-8">
            <div className="product-content-right">
              <div className="product-breadcroumb">
                <Link to="/">Home</Link>
                <Link to={`/shop/${marque}`}>{marque}</Link>
                <a href="">{product.name}</a>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className="product-images">
                    <div className="product-main-img">
                      <img src={image} alt={product.name} />
                    </div>

                    <div className="product-gallery">
                      <img src="img/product-thumb-1.jpg" alt="" />
                      <img src="img/product-thumb-2.jpg" alt="" />
                      <img src="img/product-thumb-3.jpg" alt="" />
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="product-inner">
                    <h2 className="product-name">Sony Smart TV - 2015</h2>
                    <div className="product-inner-price">
                      <ins>$700.00</ins> <del>$100.00</del>
                    </div>

                    <form action="" className="cart">
                      <div className="quantity">
                        <input
                          type="number"
                          size="4"
                          className="input-text qty text"
                          title="Qty"
                          value="1"
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam tristique, diam in consequat iaculis, est purus
                        iaculis mauris, imperdiet facilisis ante ligula at
                        nulla. Quisque volutpat nulla risus, id maximus ex
                        aliquet ut. Suspendisse potenti. Nulla varius lectus id
                        turpis dignissim porta. Quisque magna arcu, blandit quis
                        felis vehicula, feugiat gravida diam. Nullam nec turpis
                        ligula. Aliquam quis blandit elit, ac sodales nisl.
                        Aliquam eget dolor eget elit malesuada aliquet. In
                        varius lorem lorem, semper bibendum lectus lobortis ac.
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
