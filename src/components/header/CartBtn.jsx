import React, { useContext, useEffect , useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../store/Cartcontext";
import { cartTotal } from "../../utils/totalPriceCalculation";

export default function CartBtn({search }) {
 
 
  const ctx = useContext(CartContext);
  


  return (
    <div className={search ?"col-sm-4" : "col-sm-6"}>
      <div className="shopping-item">
        <Link to={"/cart"}>
          Cart : <span className="cart-amunt">{cartTotal(ctx.items)}</span>{" "}
          
          <span className="product-count">  {ctx.items
              ? ctx.items.reduce((total, item) => total + (item.quantity || 0), 0)
              : 0}</span>
        </Link>
      </div>
    </div>
  );
}
