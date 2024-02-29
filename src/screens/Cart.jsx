import React, { Fragment, useContext , useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import { CartContext } from "../store/Cartcontext";
import useFetchImage from "../hooks/useFetchImage";
import { Link } from "react-router-dom";
import { cartTotal, } from "../utils/totalPriceCalculation";
import SuggestedProducts from "../components/SuggestedProducts";
export default function Cart() {
  // const [itemImages, setItemImages] = useState({});
  const ctx = useContext(CartContext);
  const cartTotalNB =  cartTotal(ctx.items)
  const ProductLine=({item})=>{
    const marque = item.name.split(" ")[0];
                   
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
                src={`/src/assets/img/${marque}/${item.imageName}`}
                // src={itemImages[item.id]}
              />
            </a>
          </td>

          <td className="product-name">
          <Link to={`/product/${marque}/${item.id}`}>{item.name}</Link>
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
  }
  
 
  
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
                      {ctx.items.map((item) => 
                      {return (
                        <ProductLine item={item} key={item.id}/>
                      )} 
                       )}

                      <tr>
                        <td className="actions" colSpan="6">
                          <button
                            
                            name="proceed"
                            className="checkout-button button alt wc-forward"
                          ><Link to={"/checkout"}>checkout</Link></button>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="cart-collaterals">
                    <div className="cross-sells">
                      <h2>You may be interested in...</h2>
                      <ul className="products">
                    
                      </ul>
                    </div>

                    <div className="cart_totals ">
                      <h2>Cart Totals</h2>

                      <table cellSpacing="0">
                        <tbody>
                          <tr className="cart-subtotal">
                            <th>Cart Subtotal</th>
                            <td>
                              <span className="amount">{cartTotalNB} €</span>
                            </td>
                          </tr>

                          <tr className="shipping">
                            <th>Taxe (20%)</th>
                            <td>{(cartTotalNB * 0.2).toFixed(2)} €</td>
                          </tr>

                          <tr className="order-total">
                            <th>Order Total</th>
                            <td>
                              <strong>
                                <span className="amount">
                                  {(cartTotalNB * 1.2).toFixed(2)}€
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
