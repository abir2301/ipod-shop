import React from 'react'

export default function ShopTable({cart , subTotal }) {
    console.log(subTotal*1.2)
  return (
    <table className="shop_table">
    <thead>
      <tr>
        <th className="product-name">Product</th>
        <th className="product-total">Total</th>
      </tr>
    </thead>
    <tbody>
      {cart.items?.map((item) => (
        <tr className="cart_item" key={item.id}>
          <td className="product-name">
            {item.name}{" "}
            <strong className="product-quantity">
              × {item.quantity}
            </strong>{" "}
          </td>
          <td className="product-total">
            <span className="amount">
              £{item.price * item.quantity}
            </span>{" "}
          </td>
        </tr>
      ))}
    </tbody>
    <tfoot>
      <tr className="cart-subtotal">
        <th>Cart Subtotal</th>
        <td>
          <span className="amount">
            £{subTotal}
          </span>
        </td>
      </tr>
      <tr className="shipping">
        <th>Taxe (20%)</th>
        <td>{(subTotal*0.2).toFixed(2)}€</td>
      </tr>
      <tr className="order-total">
        <th>Order Total</th>
        <td>
          <strong>
            <span className="amount">
              {subTotal*1.2} €{" "}
            </span>
          </strong>{" "}
        </td>
      </tr>
    </tfoot>
  </table>
  )
}
