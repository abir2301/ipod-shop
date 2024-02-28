import { useContext, createContext, useState, useReducer } from "react";
export const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (item) => {},
  addItemWithQuantity :  (item , quantity)=>{

  }
});

const cartReducer = (state, action) => {
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
  // add item to cart with specific quantity 
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
  return state;
};
export const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
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
  function addItemWithQuantity(item , quantity ) {
    dispatchCartAction({ type: "ADD_ITEM-QANTITY", item , quantity });
  }
  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    deleteItem,
    addItemWithQuantity
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
