import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../store/Cartcontext";
import { cartTotal } from "../../utils/totalPriceCalculation";

export default function CartBtn() {
  const ctx = useContext(CartContext);
  const total = cartTotal(ctx.items)
  const sum = ctx.items.reduce((total, item) => total + (item.quantity || 0), 0);

  return (
    <div className="col-sm-4">
      <div className="shopping-item">
        <Link to={"/cart"}>
          Cart : <span className="cart-amunt">{total}</span>{" "}
          <span className="product-count">{sum}</span>
        </Link>
      </div>
    </div>
  );
}
