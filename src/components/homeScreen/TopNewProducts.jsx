import React from "react";
import useFetchData from "../../hooks/useFetchData";
import SingelProduct from "../SingelProduct";
import { useProductContext } from "../../store/productContext";

export default function TopNewProducts() {
  const { state, fetchData } = useProductContext();

  const [number, setNumber] = React.useState(2);
  const loadMore = () => {
    setNumber((prevNumber) => {
      return number + 1;
    });
  };

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
          {state.data["top-new-products"].length == 0 ? (
            <p> no-data </p>
          ) : (
            state.data["top-new-products"].slice(0, number).map((product) => {
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
