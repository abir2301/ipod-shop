import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { cartTotal } from "../utils/totalPriceCalculation";
import axios from "axios";

export const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (item) => {},
  addItemWithQuantity: (item, quantity) => {},
  postCart: () => {},
});

const cartReducer =    (state, action) => {
  // add item to cart
  if (action.type == "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const updatedItems = [...state.items];
    if (existingCartItemIndex !== -1) {
      const updatedItem = {
        ...state.items[existingCartItemIndex],
        quantity: state.items[existingCartItemIndex].quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }
  //decrement quantity of fixed item
  if (action.type == "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    const updatedItems = [...state.items];
    if (existingCartItem.quantity === 1) {
      updatedItems.slice(existingCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return { ...state, items: updatedItems };
  }
  // delete produit from cart
  if (action.type == "DELETE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    if (existingCartItemIndex !== -1) {
      const updatedItems = [...state.items];
      updatedItems.splice(existingCartItemIndex, 1);

      return { ...state, items: updatedItems };
    }
  }
  if (action.type == "ADD_ITEM-QANTITY") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const updatedItems = [...state.items];
    if (existingCartItemIndex !== -1) {
      const updatedItem = {
        ...state.items[existingCartItemIndex],
        quantity: state.items[existingCartItemIndex].quantity + action.quantity,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: action.quantity });
    }

    return { ...state, items: updatedItems };
  }
  if (action.type == "POST_CART") {
    console.log(state.items);
    const id = uuidv4();
    const subTotal = parseFloat(cartTotal(state.items));
    const tax = parseFloat((subTotal * 0.2).toFixed(2));
    const total = parseFloat((subTotal + tax).toFixed(2));
    console.log(id, subTotal);
    const postedCart = {
      id,
      total,
      subTotal,
      tax,
      items: state.items,
    };
    const response =  axios.post(
      "http://localhost:3000/carts",
      postedCart
    );
    console.log(response)
    return { ...state, items: state.items };
  }

  return state;
};
export const CartContextProvider = ({ children }) => {
  // const [items, setItems] = useState([]);
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }
  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }
  function deleteItem(id) {
    dispatchCartAction({ type: "DELETE_ITEM", id });
  }
  function addItemWithQuantity(item, quantity) {
    dispatchCartAction({ type: "ADD_ITEM-QANTITY", item, quantity });
  }
  function postCart() {
    dispatchCartAction({ type: "POST_CART" });
  }
  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    deleteItem,
    addItemWithQuantity,
    postCart,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
