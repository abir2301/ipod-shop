import React from "react";
import useFetchData from "../../hooks/useFetchData";
import SingelProduct from "../SingelProduct";

export default function RecentViewedProducts() {
  const { isFetching, data } = useFetchData("top-new-products");
  console.log(isFetching);
  return (
    <div className="col-md-4">
      <div className="single-product-widget">
        <h2 className="product-wid-title">Recently viewed </h2>
        <a href="#" className="wid-view-more">
          View All
        </a>
        <>
          {isFetching && <p>fetching data ....</p>}
          {data.length == 0 ? (
            <p> No Data Yet </p>
          ) : (
            data.map((product) => {
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
