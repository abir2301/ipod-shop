import React, { createContext, useReducer, useContext } from "react";
import { CartContext } from "./Cartcontext";
import { v4 as uuidv4 } from "uuid";
import { cartTotal } from "../utils/totalPriceCalculation";
import axios from "axios";

export const SearchContext = createContext({
  data: [],
  updateSearchedData: (items ) => {},
});
//   const ctx = useContext(CartContext)
const SearchReducer =  (state, action) => {
 
  if (action.type == "UPDATE_DATA") {
   return {...state , data : action.items}
  }

  return state;
};
export const SearchContextProvider = ({ children }) => {
  const ctx = useContext(CartContext);
  const [Serach, dispatchSearchAction] = useReducer(SearchReducer, {
    data :[]
  });

  function updateSearchedData(items) {
    dispatchSearchAction({ type: "UPDATE_DATA", items});
  }

  const searchcontext = {
    data: Serach.data,
    updateSearchedData,
  };
  return (
    <SearchContext.Provider value={searchcontext}>
      {children}
    </SearchContext.Provider>
  );
};
