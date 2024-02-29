import React, { useState } from "react";
import { Fragment } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { addOrder } from "../store/ordersSlice";
import { useSelector } from "react-redux";

function CheckoutPage() {
  const { cart } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    civility: "",
    fname: "",
    lname: "",
    company: "",
    street: "",
    city: "",
    state: "",
    postcode: "",
    email: "",
    phone: "",
    civility_ship: "",
    fname_ship: "",
    lname_ship: "",
    company_ship: "",
    street_ship: "",
    city_ship: "",
    state_ship: "",
    postcode_ship: "",
    different_address: true,
    note: "",
    paymentMethod: ""

  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.civility.trim()) {
      errors.civility = "civility is required";
      isValid = false;
    }

    if (!formData.fname.trim()) {
      errors.fname = "First name is required";
      isValid = false;
    }
    if (!formData.lname.trim()) {
      errors.lname = "Last name is required";
      isValid = false;
    }
    if (!formData.company.trim()) {
      errors.company = "company is required";
      isValid = false;
    }
    if (!formData.street.trim()) {
      errors.street = "street is required";
      isValid = false;
    }

    if (!formData.city.trim()) {
      errors.city = "city is required";
      isValid = false;
    }
    if (!formData.state.trim()) {
      errors.state = "state is required";
      isValid = false;
    }

    if (!formData.postcode.trim()) {
      errors.postcode = "postcode is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }


    if (!formData.phone.trim()) {
      errors.phone = "phone is required";
      isValid = false;
    }

    if (formData.different_address) {
      if (!formData.civility_ship.trim()) {
        errors.civility_ship = "civility_ship is required";
        isValid = false;
      }
      if (!formData.fname_ship.trim()) {
        errors.fname_ship = "First name is required";
        isValid = false;
      }
      if (!formData.lname_ship.trim()) {
        errors.lname_ship = "Last name is required";
        isValid = false;
      }
      if (!formData.company_ship.trim()) {
        errors.company_ship = "company is required";
        isValid = false;
      }
      if (!formData.street_ship.trim()) {
        errors.street_ship = "street is required";
        isValid = false;
      }

      if (!formData.city_ship.trim()) {
        errors.city_ship = "city is required";
        isValid = false;
      }
      if (!formData.state_ship.trim()) {
        errors.state_ship = "state_ship is required";
        isValid = false;
      }

      if (!formData.postcode_ship.trim()) {
        errors.postcode_ship = "postcode_ship is required";
        isValid = false;
      }

    }


    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (event) => {
   
    event.preventDefault();
    console.log(validateForm())
    if (validateForm()) {
      console.log(formData);
      const customer = {
        email: formData.email,
        phone: formData.phone,
        note: formData.note,
        billingAdress: {
          civility: formData.civility,
          firstName: formData.fname,
          lastName: formData.lname,
          zipCode: formData.postcode,
          street: formData.street,
          companyName: formData.company,
          county: formData.state,
          city: formData.city
        },
        shippingAdress: {
          civility: formData.civility_ship,
          firstName: formData.fname_ship,
          lastName: formData.lname_ship,
          zipCode: formData.postcode,
          street: formData.street_ship,
          companyName: formData.company_ship,
          county: formData.state_ship,
          city: formData.city_ship
        }
      }
      const paymentMethod = formData.paymentMethod
      const order = { customer, paymentMethod }
      dispatch(addOrder(order));

      setFormData({
        civility: "",
        fname: "",
        lname: "",
        company: "",
        street: "",
        city: "",
        state: "",
        postcode: "",
        email: "",
        phone: "",
        civility_ship: "",
        fname_ship: "",
        lname_ship: "",
        company_ship: "",
        street_ship: "",
        city_ship: "",
        state_ship: "",
        postcode_ship: "",
        different_address : "",
        note:"",
        paymentMethod :""
      });
    }
  };

  const handleChange = (event) => {

    if (event.target.name === "different_address") {
      setFormData({
        ...formData,
        [event.target.name]: event.target.checked,
      });
    }
    else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
    console.log(event.target.name);
    console.log(event.target.value);
  };

  return (
    <Fragment>
      <Header showSearch={false} />
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
            <div className="zigzag-bottom" />
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="product-content-right">
                    <div className="woocommerce">
                      <form
                        encType="multipart/form-data"
                        className="checkout"
                        name="checkout"
                        onSubmit={handleSubmit}
                      >
                        <div id="customer_details" className="col2-set">
                          <div className="col-6">
                            <div className="woocommerce-billing-fields">
                              <h3>Billing Details</h3>
                              <p
                                id="billing_country_field"
                                className="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated"
                              >
                                <label htmlFor="billing_country">
                                  Civility{" "}
                                  <abbr title="required" className="required">
                                    *
                                  </abbr>
                                </label>
                                <select
                                  className="country_to_state country_select"
                                  id="shipping_country"
                                  name="civility"
                                  value={formData.civility}
                                  onChange={handleChange}
                                >
                                  <option value="Mr">Mr</option>
                                  <option value="Mlle">Mlle</option>
                                  <option value="Mme">Mme</option>
                                </select>
                                {errors.civility && <span>{errors.civility}</span>}
                              </p>
                              <p
                                id="billing_first_name_field"
                                className="form-row form-row-first validate-required"
                              >
                                <label htmlFor="billing_first_name">
                                  First Name{" "}
                                  <abbr title="required" className="required">
                                    *
                                  </abbr>
                                </label>
                                <input
                                  type="text"
                                  placeholder=""
                                  id="billing_first_name"
                                  name="fname"
                                  className="input-text "
                                  value={formData.fname}
                                  onChange={handleChange}
                                />
                                {errors.fname && <span>{errors.fname}</span>}
                              </p>
                              <p
                                id="billing_last_name_field"
                                className="form-row form-row-last validate-required"
                              >
                                <label htmlFor="billing_last_name">
                                  Last Name{" "}
                                  <abbr title="required" className="required">
                                    *
                                  </abbr>
                                </label>
                                <input
                                  type="text"

                                  placeholder=""
                                  id="billing_last_name"
                                  name="lname"
                                  className="input-text "
                                  value={formData.lname}
                                  onChange={handleChange}
                                />
                                {errors.lname && <span>{errors.lname}</span>}
                              </p>
                              <div className="clear" />
                              <p
                                id="billing_company_field"
                                className="form-row form-row-wide"
                              >
                                <label htmlFor="billing_company">
                                  Company Name
                                </label>
                                <input
                                  type="text"

                                  placeholder=""
                                  id="billing_company"
                                  name="company"
                                  className="input-text "
                                  value={formData.company}
                                  onChange={handleChange}
                                />
                                {errors.company && <span>{errors.company}</span>}
                              </p>
                              <p
                                id="billing_address_1_field"
                                className="form-row form-row-wide address-field validate-required"
                              >
                                <label htmlFor="billing_address_1">
                                  Street Address{" "}
                                  <abbr title="required" className="required">
                                    *
                                  </abbr>
                                </label>
                                <input
                                  type="text"

                                  placeholder="Street address"
                                  id="billing_address_1"
                                  name="street"
                                  className="input-text "
                                  value={formData.street}
                                  onChange={handleChange}
                                />
                                {errors.street && <span>{errors.street}</span>}
                              </p>
                              {/* <p
                                id="billing_address_2_field"
                                className="form-row form-row-wide address-field"
                              >
                                <input
                                  type="text"
                                  
                                  placeholder="Apartment, suite, unit etc. (optional)"
                                  id="billing_address_2"
                                  name="address_2"
                                  className="input-text "
                                  value={formData.address_2}
                                  onChange={handleChange}
                                />
                                {errors.address_2 && <span>{errors.address_2}</span>}
                              </p> */}
                              <p
                                id="billing_city_field"
                                className="form-row form-row-wide address-field validate-required"
                                data-o_class="form-row form-row-wide address-field validate-required"
                              >
                                <label htmlFor="billing_city">
                                  Town / City{" "}
                                  <abbr title="required" className="required">
                                    *
                                  </abbr>
                                </label>
                                <input
                                  type="text"

                                  placeholder="Town / City"
                                  id="billing_city"
                                  name="city"
                                  className="input-text "
                                  value={formData.city}
                                  onChange={handleChange}
                                />
                                {errors.city && <span>{errors.city}</span>}
                              </p>
                              <p
                                id="billing_state_field"
                                className="form-row form-row-first address-field validate-state"
                                data-o_class="form-row form-row-first address-field validate-state"
                              >
                                <label htmlFor="billing_state">County</label>
                                <input
                                  type="text"
                                  id="billing_state"
                                  name="state"

                                  placeholder="State / County"
                                  className="input-text "
                                  value={formData.state}
                                  onChange={handleChange}
                                />
                                {errors.state && <span>{errors.state}</span>}
                              </p>
                              <p
                                id="billing_postcode_field"
                                className="form-row form-row-last address-field validate-required validate-postcode"
                                data-o_class="form-row form-row-last address-field validate-required validate-postcode"
                              >
                                <label htmlFor="billing_postcode">
                                  Postcode{" "}
                                  <abbr title="required" className="required">
                                    *
                                  </abbr>
                                </label>
                                <input
                                  type="text"

                                  placeholder="Postcode / Zip"
                                  id="billing_postcode"
                                  name="postcode"
                                  className="input-text "
                                  value={formData.postcode}
                                  onChange={handleChange}
                                />
                                {errors.postcode && <span>{errors.postcode}</span>}
                              </p>
                              <div className="clear" />
                              <p
                                id="billing_email_field"
                                className="form-row form-row-first validate-required validate-email"
                              >
                                <label htmlFor="billing_email">
                                  Email Address{" "}
                                  <abbr title="required" className="required">
                                    *
                                  </abbr>
                                </label>
                                <input
                                  type="text"

                                  placeholder=""
                                  id="billing_email"
                                  name="email"
                                  className="input-text "
                                  value={formData.email}
                                  onChange={handleChange}
                                />
                                {errors.email && <span>{errors.email}</span>}
                              </p>
                              <p
                                id="billing_phone_field"
                                className="form-row form-row-last validate-required validate-phone"
                              >
                                <label htmlFor="billing_phone">
                                  Phone{" "}
                                  <abbr title="required" className="required">
                                    *
                                  </abbr>
                                </label>
                                <input
                                  type="text"

                                  placeholder=""
                                  id="billing_phone"
                                  name="phone"
                                  className="input-text "
                                  value={formData.phone}
                                  onChange={handleChange}
                                />
                                {errors.phone && <span>{errors.phone}</span>}
                              </p>
                              <div className="clear" />
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="woocommerce-shipping-fields">
                              <h3 id="ship-to-different-address">
                                <label
                                  className="checkbox"
                                  htmlFor="ship-to-different-address-checkbox"
                                >
                                  Ship to a different address?
                                </label>
                                <input
                                  type="checkbox"
                                  name="different_address"
                                  defaultChecked="checked"
                                  className="input-checkbox"
                                  id="ship-to-different-address-checkbox"
                                  value={formData.different_address}
                                  onChange={handleChange}
                                />
                                {errors.different_address && <span>{errors.different_address}</span>}
                              </h3>
                              {formData.different_address && <>
                                <div
                                  className="shipping_address"
                                  style={{ display: "block" }}
                                >
                                  <p
                                    id="shipping_country_field"
                                    className="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated"
                                  >
                                    <label htmlFor="shipping_country">
                                      Civility{" "}
                                      <abbr title="required" className="required">
                                        *
                                      </abbr>
                                    </label>
                                    <select
                                      className="country_to_state country_select"
                                      id="shipping_country"
                                      name="civility_ship"
                                      value={formData.civility_ship}
                                      onChange={handleChange}
                                    >
                                      <option value="Mr">Mr</option>
                                      <option value="Mlle">Mlle</option>
                                      <option value="Mme">Mme</option>
                                    </select>
                                    {errors.civility_ship && <span>{errors.civility_ship}</span>}
                                  </p>
                                  <p
                                    id="shipping_first_name_field"
                                    className="form-row form-row-first validate-required"
                                  >
                                    <label
                                      className=""
                                      htmlFor="shipping_first_name"
                                    >
                                      First Name{" "}
                                      <abbr title="required" className="required">
                                        *
                                      </abbr>
                                    </label>
                                    <input
                                      type="text"

                                      placeholder=""
                                      id="shipping_first_name"
                                      name="fname_ship"
                                      className="input-text "
                                      value={formData.fname_ship}
                                      onChange={handleChange}
                                    />
                                    {errors.fname_ship && <span>{errors.fname_ship}</span>}
                                  </p>
                                  <p
                                    id="shipping_last_name_field"
                                    className="form-row form-row-last validate-required"
                                  >
                                    <label htmlFor="shipping_last_name">
                                      Last Name{" "}
                                      <abbr title="required" className="required">
                                        *
                                      </abbr>
                                    </label>
                                    <input
                                      type="text"

                                      placeholder=""
                                      id="shipping_last_name"
                                      name="lname_ship"
                                      className="input-text "
                                      value={formData.lname_ship}
                                      onChange={handleChange}
                                    />
                                    {errors.lname_ship && <span>{errors.lname_ship}</span>}
                                  </p>
                                  <div className="clear" />
                                  <p
                                    id="shipping_company_field"
                                    className="form-row form-row-wide"
                                  >
                                    <label htmlFor="shipping_company">
                                      Company Name
                                    </label>
                                    <input
                                      type="text"

                                      placeholder=""
                                      id="shipping_company"
                                      name="company_ship"
                                      className="input-text "
                                      value={formData.fname_ship}
                                      onChange={handleChange}
                                    />
                                    {errors.company_ship && <span>{errors.company_ship}</span>}
                                  </p>
                                  <p
                                    id="shipping_address_1_field"
                                    className="form-row form-row-wide address-field validate-required"
                                  >
                                    <label htmlFor="shipping_address_1">
                                      Address{" "}
                                      <abbr title="required" className="required">
                                        *
                                      </abbr>
                                    </label>
                                    <input
                                      type="text"

                                      placeholder="Street address"
                                      id="shipping_address_1"
                                      name="street_ship"
                                      className="input-text "
                                      value={formData.street_ship}
                                      onChange={handleChange}
                                    />
                                    {errors.street_ship && <span>{errors.street_ship}</span>}
                                  </p>
                                  {/* <p
                                  id="shipping_address_2_field"
                                  className="form-row form-row-wide address-field"
                                >
                                  <input
                                    type="text"
                                    
                                    placeholder="Apartment, suite, unit etc. (optional)"
                                    id="shipping_address_2"
                                    name="address_2"
                                    className="input-text "
                                  />
                                  {errors.address_2 && <span>{errors.address_2}</span>}
                                </p> */}
                                  <p
                                    id="shipping_city_field"
                                    className="form-row form-row-wide address-field validate-required"
                                    data-o_class="form-row form-row-wide address-field validate-required"
                                  >
                                    <label htmlFor="shipping_city">
                                      Town / City{" "}
                                      <abbr title="required" className="required">
                                        *
                                      </abbr>
                                    </label>
                                    <input
                                      type="text"

                                      placeholder="Town / City"
                                      id="shipping_city"
                                      name="city_ship"
                                      className="input-text "
                                      value={formData.city_ship}
                                      onChange={handleChange}
                                    />
                                    {errors.city_ship && <span>{errors.city_ship}</span>}
                                  </p>
                                  <p
                                    id="shipping_state_field"
                                    className="form-row form-row-first address-field validate-state"
                                    data-o_class="form-row form-row-first address-field validate-state"
                                  >
                                    <label htmlFor="shipping_state">County</label>
                                    <input
                                      type="text"
                                      id="shipping_state"
                                      name="state_ship"
                                      placeholder="State / County"
                                      value={formData.state_ship}
                                      onChange={handleChange}
                                      className="input-text "
                                    />
                                    {errors.state_ship && <span>{errors.state_ship}</span>}
                                  </p>
                                  <p
                                    id="shipping_postcode_field"
                                    className="form-row form-row-last address-field validate-required validate-postcode"
                                    data-o_class="form-row form-row-last address-field validate-required validate-postcode"
                                  >
                                    <label htmlFor="shipping_postcode">
                                      Postcode{" "}
                                      <abbr title="required" className="required">
                                        *
                                      </abbr>
                                    </label>
                                    <input
                                      type="text"

                                      placeholder="Postcode / Zip"
                                      id="shipping_postcode"
                                      name="postcode_ship"
                                      className="input-text "
                                      value={formData.postcode_ship}
                                      onChange={handleChange}
                                    />
                                    {errors.postcode_ship && <span>{errors.postcode_ship}</span>}
                                  </p>
                                  <div className="clear" />
                                </div>
                                <p
                                  id="order_comments_field"
                                  className="form-row notes"
                                >
                                  <label htmlFor="order_comments">
                                    Order Notes
                                  </label>
                                  <textarea
                                    cols={5}
                                    rows={2}
                                    placeholder="Notes about your order, e.g. special notes for delivery."
                                    id="order_comments"
                                    className="input-text "
                                    name="note"
                                    value={formData.note}
                                    onChange={handleChange}
                                  />
                                  {errors.note && <span>{errors.note}</span>}
                                </p>
                              </>}
                            </div>
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
                              {cart.items?.map(item => (
                                <tr className="cart_item" key={item.id} >
                                  <td className="product-name">
                                    {item.name}{" "}
                                    <strong className="product-quantity">
                                      × {item.qty}
                                    </strong>{" "}
                                  </td>
                                  <td className="product-total">
                                    <span className="amount">£{item.price * item.qty}</span>{" "}
                                  </td>
                                </tr>
                              ))}

                            </tbody>
                            <tfoot>
                              <tr className="cart-subtotal">
                                <th>Cart Subtotal</th>
                                <td>
                                  <span className="amount">£{cart.subTotal}</span>
                                </td>
                              </tr>
                              <tr className="shipping">
                                <th>Taxe (20%)</th>
                                <td>{cart.tax?.toFixed(2)}€</td>
                              </tr>
                              <tr className="order-total">
                                <th>Order Total</th>
                                <td>
                                  <strong>
                                    <span className="amount">{cart.total} € </span>
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
                                  data-order_button_text
                                  name="paymentMethod"
                                  className="input-radio"
                                  id="payment_method_bacs"
                                  onChange={handleChange}
                                  value="Direct Bank Transfer"
                                // checked={formData.paymentMethod === 'Direct Bank Transfer'}
                                />
                                <label htmlFor="payment_method_bacs">
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
                                  data-order_button_text
                                  name="paymentMethod"
                                  className="input-radio"
                                  id="payment_method_cheque"
                                  value="Cheque Payment"
                                  onChange={handleChange}
                                // checked={formData.paymentMethod === 'Cheque Payment'}
                                />
                                <label htmlFor="payment_method_cheque">
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
                                  onChange={handleChange}
                                  name="paymentMethod"
                                  className="input-radio"
                                  id="payment_method_paypal"
                                  value="PayPal"
                                // checked={formData.paymentMethod === 'PayPal'}
                                />

                                <label htmlFor="payment_method_paypal">
                                  PayPal{" "}
                                  <img
                                    alt="PayPal Acceptance Mark"
                                    src="https://www.paypalobjects.com/webstatic/mktg/Logo/AM_mc_vs_ms_ae_UK.png"
                                  />
                                  <a
                                    title="What is PayPal?"
                                    // onclick="javascript:window.open('https://www.paypal.com/gb/webapps/mpp/paypal-popup','WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); return false;"
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
                              <button

                                type="submit"
                                // ="Place order"
                                id="place_order"
                                name="woocommerce_checkout_place_order"
                                className="button alt"
                              >
                                Place order
                              </button>
                            </div>
                            <div className="clear" />
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
        <Footer />
      </div>
    </Fragment>
  );
}
export default CheckoutPage;
