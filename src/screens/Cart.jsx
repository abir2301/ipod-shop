import React, { Fragment, useContext } from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import { CartContext } from "../store/Cartcontext";
import useFetchImage from "../hooks/useFetchImage";
export default function Cart() {
  const ctx = useContext(CartContext);
  const cartTotal = ctx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
  const { image } = useFetchImage("Apple", "apple-ipad-97-2017.jpg");
  return (
    <Fragment>
      <Header serach={false} />

      <div className="single-product-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-content-right">
                <div className="woocommerce">
                  <table cellSpacing="0" className="shop_table cart">
                    <thead>
                      <tr>
                        <th className="product-remove">&nbsp;</th>
                        <th className="product-thumbnail">&nbsp;</th>
                        <th className="product-name">Product</th>
                        <th className="product-price">Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ctx.items.map((item) => {
                        const marque = item.name.split(" ")[0];
                        const { image } = useFetchImage(marque, item.imageName);
                        return (
                          <>
                            <tr key={item.id} className="cart_item">
                              <td className="product-remove">
                                <button
                                  title="Remove this item"
                                  className="remove"
                                  onClick={() => {
                                    ctx.deleteItem(item.id);
                                  }}
                                >
                                  ×
                                </button>
                              </td>

                              <td className="product-thumbnail">
                                <a href="single-product.html">
                                  <img
                                    alt={item.imageName}
                                    width="145"
                                    height="145"
                                    className="shop_thumbnail"
                                    src={image}
                                  />
                                </a>
                              </td>

                              <td className="product-name">
                                <a href="single-product.html">{item.name}</a>
                              </td>

                              <td className="product-price">
                                <span className="amount">{item.price}€</span>
                              </td>

                              <td className="product-quantity">
                                <div className="quantity buttons_added">
                                  <button
                                    onClick={() => {
                                      ctx.removeItem(item.id);
                                    }}
                                    className="minus"
                                  >
                                    -
                                  </button>
                                  <input
                                    type="number"
                                    size="4"
                                    className="input-text qty text"
                                    title="Qty"
                                    value={item.quantity}
                                    min="0"
                                    step="1"
                                  />
                                  <button
                                    onClick={() => {
                                      ctx.addItem(item);
                                    }}
                                    className="plus"
                                    value="+"
                                  >
                                    +
                                  </button>
                                </div>
                              </td>

                              <td className="product-subtotal">
                                <span className="amount">
                                  {item.quantity * item.price} €
                                </span>
                              </td>
                            </tr>
                          </>
                        );
                      })}

                      <tr>
                        <td className="actions" colSpan="6">
                          <input
                            type="button"
                            value="Checkout"
                            name="proceed"
                            className="checkout-button button alt wc-forward"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="cart-collaterals">
                    <div className="cross-sells">
                      <h2>You may be interested in...</h2>
                      <ul className="products">
                        {/* <li className="product">
                          <a href="single-product.html">
                            <img
                              width="325"
                              height="325"
                              alt="T_4_front"
                              className="attachment-shop_catalog wp-post-image"
                              src="img/product-2.jpg"
                            />
                            <h3>Ship Your Idea</h3>
                            <span className="price">
                              <span className="amount">20.00 €</span>
                            </span>
                          </a>

                          <a
                            className="add_to_cart_button"
                            data-quantity="1"
                            data-product_sku=""
                            data-product_id="22"
                            rel="nofollow"
                            href="single-product.html"
                          >
                            Add to Cart
                          </a>
                        </li>

                        <li className="product">
                          <a href="single-product.html">
                            <img
                              width="325"
                              height="325"
                              alt="T_4_front"
                              className="attachment-shop_catalog wp-post-image"
                              src="img/product-4.jpg"
                            />
                            <h3>Ship Your Idea</h3>
                            <span className="price">
                              <span className="amount">20.00 €</span>
                            </span>
                          </a>

                          <a
                            className="add_to_cart_button"
                            data-quantity="1"
                            data-product_sku=""
                            data-product_id="22"
                            rel="nofollow"
                            href="single-product.html"
                          >
                            Add to Cart
                          </a>
                        </li> */}
                      </ul>
                    </div>

                    <div className="cart_totals ">
                      <h2>Cart Totals</h2>

                      <table cellSpacing="0">
                        <tbody>
                          <tr className="cart-subtotal">
                            <th>Cart Subtotal</th>
                            <td>
                              <span className="amount">{cartTotal} €</span>
                            </td>
                          </tr>

                          <tr className="shipping">
                            <th>Taxe (20%)</th>
                            <td>{(cartTotal * 0.2).toFixed(2)} €</td>
                          </tr>

                          <tr className="order-total">
                            <th>Order Total</th>
                            <td>
                              <strong>
                                <span className="amount">
                                  {(cartTotal * 1.2).toFixed(2)}€
                                </span>
                              </strong>{" "}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
}
