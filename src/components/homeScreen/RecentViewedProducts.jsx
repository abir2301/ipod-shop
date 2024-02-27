import React from "react";
import useFetchData from "../../hooks/useFetchData";
import SingelProduct from "../SingelProduct";
import { useProductContext } from "../../store/productContext";

export default function RecentViewedProducts() {
 
  const {state} = useProductContext()

  
  return (
    <div className="col-md-4">
      <div className="single-product-widget">
        <h2 className="product-wid-title">Recently viewed </h2>
        <a href="#" className="wid-view-more">
          View All
        </a>
        <>
        {state.loading && <p>Loading...</p>}
        {state.error && <p>Error: {state.error}</p>}
          {/* {state.data. == 0 ? (
            <p> No Data Yet </p>
          ) : (
            data.map((product) => {
              return (
                <div key={product.id}>
                  <SingelProduct product={product} />
                </div>
              );
            })
          )} */}
        </>
      </div>
    </div>
  );
}
