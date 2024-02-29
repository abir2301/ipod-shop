import React, { useState } from "react";



export default function BillingForm({billingFormData ,handleBillingFormSubmit }) {
    
  return (
    <form
    encType="multipart/form-data"
    onSubmit={()=>{handleBillingFormSubmit (event)}}
    className="checkout"
    method="post"
    name="billingForm"
  >
    <div className="woocommerce-billing-fields">
      <h3>Billing Details</h3>
      <p
        id="billing_country_field"
        className="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated"
      >
        <label htmlFor="billing_country">Civility
          <abbr title="required" className="required">*</abbr>
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
        id="billing_first_name_field"
        className="form-row form-row-first validate-required"
      >
        <label htmlFor="billing_first_name">First Name
          <abbr title="required" className="required">*</abbr>
        </label>
        <input
          type="text"
         defaultValue={billingFormData.billingAdress.firstName}
          placeholder=""
          id="billing_first_name"
          name="billing_first_name"
          className="input-text"
        />
      </p>

      <p
        id="billing_last_name_field"
        className="form-row form-row-last validate-required"
      >
        <label htmlFor="billing_last_name">Last Name
          <abbr title="required" className="required">*</abbr>
        </label>
        <input
          type="text"
          defaultValue={billingFormData.billingAdress.lastName}
          placeholder=""
          id="billing_last_name"
          name="billing_last_name"
          className="input-text"
        />
      </p>
      <div className="clear"></div>

      <p id="billing_company_field" className="form-row form-row-wide">
        <label htmlFor="billing_company">Company Name</label>
        <input
          type="text"
          defaultValue={billingFormData.billingAdress.companyName}
          placeholder=""
          id="billing_company"
          name="billing_company"
          className="input-text"
        />
      </p>

      <p
        id="billing_address_1_field"
        className="form-row form-row-wide address-field validate-required"
      >
        <label htmlFor="billing_address_1">Address
          <abbr title="required" className="required">*</abbr>
        </label>
        <input
          type="text"
          defaultValue={billingFormData.billingAdress.street}
          placeholder="Street address"
          id="billing_address_1"
          name="billing_address_1"
          className="input-text"
        />
      </p>

      <p
        id="billing_address_2_field"
        className="form-row form-row-wide address-field"
      >
        <input
          type="text"
          defaultValue=""
          placeholder="Apartment, suite, unit etc. (optional)"
          id="billing_address_2"
          name="billing_address_2"
          className="input-text"
        />
      </p>

      <p
        id="billing_city_field"
        className="form-row form-row-wide address-field validate-required"
      >
        <label htmlFor="billing_city">Town / City
          <abbr title="required" className="required">*</abbr>
        </label>
        <input
          type="text"
          defaultValue={billingFormData.billingAdress.city}
          placeholder="Town / City"
          id="billing_city"
          name="billing_city"
          className="input-text"
        />
      </p>

      <p
        id="billing_state_field"
        className="form-row form-row-first address-field validate-state"
      >
        <label htmlFor="billing_state">County</label>
        <input
          type="text"
          id="billing_state"
          name="billing_state"
          placeholder="State / County"
          defaultValue={billingFormData.billingAdress.county}
          className="input-text"
        />
      </p>
      <p
        id="billing_postcode_field"
        className="form-row form-row-last address-field validate-required validate-postcode"
      >
        <label htmlFor="billing_postcode">Postcode
          <abbr title="required" className="required">*</abbr>
        </label>
        <input
          type="text"
          defaultValue={billingFormData.billingAdress.zipCode}
          placeholder="Postcode / Zip"
          id="billing_postcode"
          name="billing_postcode"
          className="input-text"
        />
      </p>

      <div className="clear"></div>

      <p
        id="billing_email_field"
        className="form-row form-row-first validate-required validate-email"
      >
        <label htmlFor="billing_email">Email Address
          <abbr title="required" className="required">*</abbr>
        </label>
        <input
          type="text"
          defaultValue={billingFormData.email}
          placeholder=""
          id="billing_email"
          name="billing_email"
          className="input-text"
        />
      </p>

      <p
        id="billing_phone_field"
        className="form-row form-row-last validate-required validate-phone"
      >
        <label htmlFor="billing_phone">Phone
          <abbr title="required" className="required">*</abbr>
        </label>
        <input
          type="text"
          defaultValue={billingFormData.phone}
          placeholder=""
          id="billing_phone"
          name="billing_phone"
          className="input-text"
        />
      </p>
      <div className="clear"></div>
      
    </div>
  </form>

  )
}
