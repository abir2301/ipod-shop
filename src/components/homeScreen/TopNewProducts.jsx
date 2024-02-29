import React from "react";

import SingelProduct from "../SingelProduct";

import { useTopNewContext } from "../../store/topNewProductsContext";

export default function TopNewProducts() {
  const { state, fetchTopNew } = useTopNewContext();
  
  const [number, setNumber] = React.useState(2);
  const loadMore = () => {
    setNumber((prevNumber) => {
      return prevNumber + 1;
    });
  };
  React.useEffect(() => {
    fetchTopNew()
   
  },[] );

  return (
    <div className="col-md-4">
      <div className="single-product-widget">
        <h2 className="product-wid-title">Top New </h2>
        <button onClick={loadMore} className="wid-view-more">
          View All
        </button>
        <>
          {state.loading && <p>Loading...</p>}
          {state.error && <p>Error: {state.error}</p>}
          {state.data== null  ? (
            <p> no-data </p>
          ) : (
            state.data.slice(0, number).map((product) => {
              return (
                <div key={product.id}>
                  <SingelProduct product={product} />
                </div>
              );
            })
          )}
        </>
      </div>
    </div>
  );
}
