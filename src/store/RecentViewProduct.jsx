import  { createContext, useReducer } from "react";

export const RecentViewProductsContext = createContext({
  items: [
    {
      id: 1007,
      name: "apple ipad mini 3 new",
      imageName: "apple-ipad-mini-3-new.jpg",
      price: 279,
      discountRate: 21,
      review: 5,
    },
    {
      id: 1008,
      name: "apple ipad mini final",
      imageName: "apple-ipad-mini-final.jpg",
      price: 431,
      discountRate: 18,
      review: 4,
    },
  ]||JSON.parse(localStorage.getItem("recentlyViewed"))  ,
  getRecentViewProducts: () => {},
  addProduct: (item) => {},
});
const recentViewProductsReducer = (state, action) => {
  if ((action.type == "GET-PRODUCTS")) {
    const products = JSON.parse(localStorage.getItem("recentlyViewed"));
    const lastThreeItems = products ? products.slice(-3) : [];
    return { ...state, items: lastThreeItems };
    }

   
  
  if (action.type == "POST-PRODUCT") {
    const existingItems = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
    const existingCartItemIndex = existingItems.findIndex(
      (existingItem) => existingItem.id === action.item.id
    );

    const updatedItems = existingCartItemIndex === -1 ?
      [...existingItems, action.item] :
      existingItems;

    localStorage.setItem("recentlyViewed", JSON.stringify(updatedItems));
   
    return { ...state, items: updatedItems };
  }
  return state;
};
export const RecentViewProductsRrovider = ({ children }) => {
  // const [items, setItems] = useState([]);
  const [state, dispatch] = useReducer(recentViewProductsReducer, {
    items: [],
  });
  function addProduct(item) {
    dispatch({ type: "POST-PRODUCT", item });
  }
  function getRecentViewProducts() {
   
    dispatch({ type: "GET-PRODUCTS" });
  }
  const recentViewProductsContext = {
    items: state.items,
    addProduct,
    getRecentViewProducts,
  };
  return (
    <RecentViewProductsContext.Provider value={recentViewProductsContext}>
      {children}
    </RecentViewProductsContext.Provider>
  );
};
