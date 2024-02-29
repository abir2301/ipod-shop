import  { Fragment, useContext } from "react";
import useFetchImage from "../hooks/useFetchImage";
import { Link } from "react-router-dom";
import { CartContext } from "../store/Cartcontext";
import { RecentViewProductsContext } from "../store/RecentViewProduct";
export default function ProductCard({ product, marque }) {
  const { image } = useFetchImage(marque, product["imageName"]);
  const ctx = useContext(CartContext);
  const recentViewContext = useContext(RecentViewProductsContext);
  const handleAddTocart = (item) => {
    ctx.addItem(item);
  };
  const priceDiscount = (
    product.price -
    product.price * product.discountRate * 0.01
  ).toFixed(2);
  return (
    <Fragment>
      <div className="col-md-3 col-sm-6">
        <div className="single-shop-product">
          <div
            className="product-upper"
            style={{
              borderRadius: "10px",
              borderWidth: "5px",
              borderColor: "black",
            }}
          >
            <img src={image} alt={product.name} />
          </div>
          <h2
            onClick={(e) => {
             
             recentViewContext.addProduct(product);
             
            }}
          >
            <Link to={`/product/${marque}/${product.id}`}>{product.name}</Link>
          </h2>
          <div className="product-carousel-price">
            <ins>{priceDiscount}</ins> <del>{product.price}</del>
          </div>

          <div className="product-option-shop">
            <button
              className="add_to_cart_button"
              data-quantity="1"
              data-product_sku=""
              data-product_id="70"
              rel="nofollow"
              onClick={() => {
                handleAddTocart(product);
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
