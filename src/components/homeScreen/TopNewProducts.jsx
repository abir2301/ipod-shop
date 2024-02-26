import React from "react";
import useFetchData from "../../hooks/useFetchData";
import SingelProduct from "../SingelProduct";

export default function TopNewProducts() {
  const { data } = useFetchData("top-new-products", "db.json");

  return (
    <div className="col-md-4">
      <div className="single-product-widget">
        <h2 className="product-wid-title">Top New </h2>
        <a href="#" className="wid-view-more">
          View All
        </a>
        <>
          {data.length == 0 ? (
            <p> no data </p>
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
