import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../store/Cartcontext";

export default function CartBtn() {
  const ctx = useContext(CartContext);
  const cartTotal = ctx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
  return (
    <div className="col-sm-4">
      <div className="shopping-item">
        <Link to={"/cart"}>
          Cart : <span className="cart-amunt">{cartTotal}</span>{" "}
          <span className="product-count">{ctx.items.length}</span>
        </Link>
      </div>
    </div>
  );
}
