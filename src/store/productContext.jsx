import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
    data: [],
    loading: false,
    error: null,
  };
  
  // Define actions
  const ACTIONS = {
    FETCH_DATA_REQUEST: 'FETCH_DATA_REQUEST',
    FETCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS',
    FETCH_DATA_FAILURE: 'FETCH_DATA_FAILURE',
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.FETCH_DATA_REQUEST:
        return { ...state, loading: true, error: null };
      case ACTIONS.FETCH_DATA_SUCCESS:
        return { ...state, loading: false, data: action.payload };
      case ACTIONS.FETCH_DATA_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  const ProductContext = createContext();
  export const useProductContext = () => useContext(ProductContext);

// Define DataProvider component
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Define fetch function
  const fetchData = async () => {
    dispatch({ type: ACTIONS.FETCH_DATA_REQUEST });
    try {
      const response = await fetch('../../data/db.json');
      const data = await response.json();
      console.log(data)
      dispatch({ type: ACTIONS.FETCH_DATA_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ACTIONS.FETCH_DATA_FAILURE, payload: error.message });
    }
  };

  return (
    <ProductContext.Provider value={{ state, fetchData }}>
      {children}
    </ProductContext.Provider>
  );
};