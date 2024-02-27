import React, { Fragment } from "react";
import useFetchImage from "../hooks/useFetchImage";
import { Link } from "react-router-dom";

export default function ProductCard({ product, marque }) {
  const { image } = useFetchImage(marque, product["imageName"]);
  const priceDiscount = (
    product.price -
    product.price * product.discountRate * 0.01
  ).toFixed(2);
  return (
    <Fragment>
      <div className="col-md-3 col-sm-6">
        <div className="single-shop-product">
          <div className="product-upper" style={{borderRadius: "10px" , borderWidth: "5px" , borderColor:"black"}}>
            <img src={image} alt={product.name} />
          </div>
          <h2>
            
            <Link to={ `/product/${marque}/${product.id}`}>{product.name} </Link>
          </h2>
          <div className="product-carousel-price">
            <ins>{priceDiscount}</ins> <del>{product.price}</del>
          </div>

          <div className="product-option-shop">
            <a
              className="add_to_cart_button"
              data-quantity="1"
              data-product_sku=""
              data-product_id="70"
              rel="nofollow"
              href="/canvas/shop/?add-to-cart=70"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
