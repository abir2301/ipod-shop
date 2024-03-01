import React, { createContext, useReducer, useContext } from "react";
import { CartContext } from "./Cartcontext";
import { v4 as uuidv4 } from "uuid";
import { cartTotal } from "../utils/totalPriceCalculation";
import axios from "axios";

export const OrderContext = createContext({
  order: {},
  addOrder: (order, cart) => {},
});
//   const ctx = useContext(CartContext)
const orderReducer = async (state, action) => {
  if (action.type == "ADD_ORDER") {
    console.log(action.cart);
    console.log(action.order);
    const id = uuidv4();
    const subTotal = parseFloat(cartTotal(action.cart));
    const tax = parseFloat((subTotal * 0.2).toFixed(2));
    const total = parseFloat((subTotal + tax).toFixed(2));
    const items = action.order
    const postedOrder = {
        id  , total,  subTotal , tax, items :action.cart ,customer : action.order.customer,
        paymentMethod : action.order.paymentMethod
        
    } 
    const response = await axios.post(
        "http://localhost:3000/orders",
         
             (postedOrder),
        
       
      );
    console.log("post response ")
    console.log(response)
   return {...state , order : postedOrder}
  }

  return state;
};
export const OrderContextProvider = ({ children }) => {
  const ctx = useContext(CartContext);
  const [Order, dispatchOrderAction] = useReducer(orderReducer, {
    order: {},
    cart: [],
  });

  function addOrder(order) {
    dispatchOrderAction({ type: "ADD_ORDER", order, cart: ctx.items });
  }

  const orderContext = {
    order: Order.order,
    cart: ctx.items,
    addOrder,
  };
  return (
    <OrderContext.Provider value={orderContext}>
      {children}
    </OrderContext.Provider>
  );
};
