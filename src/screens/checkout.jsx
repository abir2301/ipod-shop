import React, {useState} from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import BillingForm from "../components/checkout/BillingForm";

export default function Checkout() {
 
  const [shippingFormData, setShippingFormData] = useState({});
  const [billingFormData, setBillingFormData] = useState({
    "email": "titi@toto.com",
    "phone": "06060606",
    "note": "",
    "billingAdress": {
      "civility": "Mr",
      "firstName": "test",
      "lastName": "test",
      "zipCode": "14789",
      "street": "18 rue Goubet 3eme etage  ",
      "companyName": "DECADE",
      "county": "france",
      "city": "Paris"
    }
  });
  const handleBillingFormSubmit = (event) => {
    event.preventDefault();
 const form = new FormData(event.target)
 setBillingFormData(Object.fromEntries(form.entries))
    console.log("Billing Form Data:", billingFormData);
  };

 
  // Function to handle shipping form submission
  const handleShippingFormSubmit = (event) => {
    event.preventDefault();
    // Process shipping form data
    console.log("Shipping Form Data:", shippingFormData);
  };

 
  const ShppingForm = () => {
    return (
      <form
        encType="multipart/form-data"
        action="#"
        className="checkout"
        method="post"
        name="billingForm"
      >
       
          <div className="woocommerce-shipping-fields">
            <h3 id="ship-to-different-address">
              <label className="checkbox" for="ship-to-different-address-checkbox">
                Ship to a different address?
              </label>
              <input
                type="checkbox"
                value="1"
                name="ship_to_different_address"
                checked="checked"
                className="input-checkbox"
                id="ship-to-different-address-checkbox"
              />
            </h3>
            <div className="shipping_address" style={{display: "block"}}>
              <p
                id="shipping_country_field"
                className="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated"
              >
                <label className="" for="shipping_country">
                  Civility{" "}
                  <abbr title="required" className="required">
                    *
                  </abbr>
                </label>
                <select
                  className="country_to_state country_select"
                  id="shipping_country"
                  name="shipping_country"
                >
                  <option value="AX">Mr</option>
                  <option value="AF">Mlle</option>
                  <option value="AF">Mme</option>
                </select>
              </p>

              <p
                id="shipping_first_name_field"
                className="form-row form-row-first validate-required"
              >
                <label className="" for="shipping_first_name">
                  First Name
                  <abbr title="required" className="required">
                    *
                  </abbr>
                </label>
                <input
                  type="text"
                  value=""
                  placeholder=""
                  id="shipping_first_name"
                  name="shipping_first_name"
                  className="input-text "
                />
              </p>

              <p
                id="shipping_last_name_field"
                className="form-row form-row-last validate-required"
              >
                <label className="" for="shipping_last_name">
                  Last Name{" "}
                  <abbr title="required" className="required">
                    *
                  </abbr>
                </label>
                <input
                  type="text"
                  value=""
                  placeholder=""
                  id="shipping_last_name"
                  name="shipping_last_name"
                  className="input-text "
                />
              </p>
              <div className="clear"></div>

              <p id="shipping_company_field" className="form-row form-row-wide">
                <label className="" for="shipping_company">
                  Company Name
                </label>
                <input
                  type="text"
                  value=""
                  placeholder=""
                  id="shipping_company"
                  name="shipping_company"
                  className="input-text "
                />
              </p>

              <p
                id="shipping_address_1_field"
                className="form-row form-row-wide address-field validate-required"
              >
                <label className="" for="shipping_address_1">
                  Address{" "}
                  <abbr title="required" className="required">
                    *
                  </abbr>
                </label>
                <input
                  type="text"
                  value=""
                  placeholder="Street address"
                  id="shipping_address_1"
                  name="shipping_address_1"
                  className="input-text "
                />
              </p>

              <p
                id="shipping_address_2_field"
                className="form-row form-row-wide address-field"
              >
                <input
                  type="text"
                  value=""
                  placeholder="Apartment, suite, unit etc. (optional)"
                  id="shipping_address_2"
                  name="shipping_address_2"
                  className="input-text "
                />
              </p>

              <p
                id="shipping_city_field"
                className="form-row form-row-wide address-field validate-required"
                data-o_className="form-row form-row-wide address-field validate-required"
              >
                <label className="" for="shipping_city">
                  Town / City{" "}
                  <abbr title="required" className="required">
                    *
                  </abbr>
                </label>
                <input
                  type="text"
                  value=""
                  placeholder="Town / City"
                  id="shipping_city"
                  name="shipping_city"
                  className="input-text "
                />
              </p>

              <p
                id="shipping_state_field"
                className="form-row form-row-first address-field validate-state"
                data-o_className="form-row form-row-first address-field validate-state"
              >
                <label className="" for="shipping_state">
                  County
                </label>
                <input
                  type="text"
                  id="shipping_state"
                  name="shipping_state"
                  placeholder="State / County"
                  value=""
                  className="input-text "
                />
              </p>
              <p
                id="shipping_postcode_field"
                className="form-row form-row-last address-field validate-required validate-postcode"
                data-o_className="form-row form-row-last address-field validate-required validate-postcode"
              >
                <label className="" for="shipping_postcode">
                  Postcode{" "}
                  <abbr title="required" className="required">
                    *
                  </abbr>
                </label>
                <input
                  type="text"
                  value=""
                  placeholder="Postcode / Zip"
                  id="shipping_postcode"
                  name="shipping_postcode"
                  className="input-text "
                />
              </p>

              <div className="clear"></div>
            </div>

            <p id="order_comments_field" className="form-row notes">
              <label className="" for="order_comments">
                Order Notes
              </label>
              <textarea
                cols="5"
                rows="2"
                placeholder="Notes about your order, e.g. special notes for delivery."
                id="order_comments"
                className="input-text "
                name="order_comments"
              ></textarea>
            </p>
          </div>
       
      </form>
    );
  };
  return (
    <>
      <Header serach={false} />
      <div>
        <div>
          <div className="product-big-title-area">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="product-bit-title text-center">
                    <h2>Checkout</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="single-product-area">
            <div className="zigzag-bottom"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="product-content-right">
                    <div className="woocommerce">
                      <form
                        encType="multipart/form-data"
                        onSubmit={handleShippingFormSubmit}
                        action="#"
                        className="checkout"
                        method="post"
                        name="checkout"
                      >
                        <div id="customer_details" className="col2-set">
                          <div className="col-6">
                         <BillingForm billingFormData={billingFormData} handleBillingFormSubmit={handleBillingFormSubmit}/>
                          </div>

                          <div className="col-6">
                            <ShppingForm />
                          </div>
                        </div>

                        <h3 id="order_review_heading">Your order</h3>

                        <div id="order_review" style={{ position: "relative" }}>
                          <table className="shop_table">
                            <thead>
                              <tr>
                                <th className="product-name">Product</th>
                                <th className="product-total">Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="cart_item">
                                <td className="product-name">
                                  Ship Your Idea{" "}
                                  <strong className="product-quantity">
                                    × 1
                                  </strong>{" "}
                                </td>
                                <td className="product-total">
                                  <span className="amount">£15.00</span>{" "}
                                </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr className="cart-subtotal">
                                <th>Cart Subtotal</th>
                                <td>
                                  <span className="amount">£15.00</span>
                                </td>
                              </tr>

                              <tr className="shipping">
                                <th>Taxe (20%)</th>
                                <td>12.12 €</td>
                              </tr>

                              <tr className="order-total">
                                <th>Order Total</th>
                                <td>
                                  <strong>
                                    <span className="amount">15.00 € </span>
                                  </strong>{" "}
                                </td>
                              </tr>
                            </tfoot>
                          </table>

                          <div id="payment">
                            <ul className="payment_methods methods">
                              <li className="payment_method_bacs">
                                <input
                                  type="radio"
                                  data-order_button_text=""
                                  checked="checked"
                                  value="bacs"
                                  name="payment_method"
                                  className="input-radio"
                                  id="payment_method_bacs"
                                />
                                <label for="payment_method_bacs">
                                  Direct Bank Transfer{" "}
                                </label>
                                <div className="payment_box payment_method_bacs">
                                  <p>
                                    Make your payment directly into our bank
                                    account. Please use your Order ID as the
                                    payment reference. Your order won’t be
                                    shipped until the funds have cleared in our
                                    account.
                                  </p>
                                </div>
                              </li>
                              <li className="payment_method_cheque">
                                <input
                                  type="radio"
                                  data-order_button_text=""
                                  value="cheque"
                                  name="payment_method"
                                  className="input-radio"
                                  id="payment_method_cheque"
                                />
                                <label for="payment_method_cheque">
                                  Cheque Payment{" "}
                                </label>
                                <div
                                  style={{ display: "none" }}
                                  className="payment_box payment_method_cheque"
                                >
                                  <p>
                                    Please send your cheque to Store Name, Store
                                    Street, Store Town, Store State / County,
                                    Store Postcode.
                                  </p>
                                </div>
                              </li>
                              <li className="payment_method_paypal">
                                <input
                                  type="radio"
                                  data-order_button_text="Proceed to PayPal"
                                  value="paypal"
                                  name="payment_method"
                                  className="input-radio"
                                  id="payment_method_paypal"
                                />
                                <label for="payment_method_paypal">
                                  PayPal{" "}
                                  <img
                                    alt="PayPal Acceptance Mark"
                                    src="https://www.paypalobjects.com/webstatic/mktg/Logo/AM_mc_vs_ms_ae_UK.png"
                                  />
                                  <a
                                    title="What is PayPal?"
                                    onclick="javascript:window.open('https://www.paypal.com/gb/webapps/mpp/paypal-popup','WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); return false;"
                                    className="about_paypal"
                                    href="https://www.paypal.com/gb/webapps/mpp/paypal-popup"
                                  >
                                    What is PayPal?
                                  </a>
                                </label>
                                <div
                                  style={{ display: "none" }}
                                  className="payment_box payment_method_paypal"
                                >
                                  <p>
                                    Pay via PayPal; you can pay with your credit
                                    card if you don’t have a PayPal account.
                                  </p>
                                </div>
                              </li>
                            </ul>

                            <div className="form-row place-order">
                              <input
                                type="button"
                                data-value="Place order"
                                value="Place order"
                                id="place_order"
                                name="woocommerce_checkout_place_order"
                                className="button alt"
                              />
                            </div>

                            <div className="clear"></div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
