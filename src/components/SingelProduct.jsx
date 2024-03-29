import React, { useContext } from "react";
import useFetchImage from "../hooks/useFetchImage";
import { Link } from "react-router-dom";
import { RecentViewProductsContext } from "../store/RecentViewProduct";
export default function SingelProduct({ product }) {
  let marque = product["imageName"].split("-")[0].toUpperCase();
  const { image } = useFetchImage(marque, product.imageName);
  const priceDiscount = (
    product.price -
    product.price * product.discountRate * 0.01
  ).toFixed(2);
  const recentViewContext = useContext(RecentViewProductsContext);
  return (
    <div key={product.id}>
      <div className="single-wid-product">
        <a href="#">
          {image && (
            <img src={image} alt={product.name} className="product-thumb" />
          )}
        </a>
        <h2
          onClick={(e) => {
            recentViewContext.addProduct(product);
          }}
        >
          <Link to={`/product/${marque}/${product.id}`}>{product.name}</Link>
        </h2>
        <div className="product-wid-rating">
          {[...Array(product.review)].map((_, index) => (
            <i key={index} className="fa fa-star"></i>
          ))}
        </div>
        <div className="product-wid-price">
          <ins>{priceDiscount}</ins>
          <del>{product.price}</del>
        </div>
      </div>
    </div>
  );
}
