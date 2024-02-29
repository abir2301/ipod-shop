
import SingelProduct from "../SingelProduct";
import React from "react";
import { useProductContext } from "../../store/productContext";
import { useTopSellerContext } from "../../store/TopSellerProductsContext";

export default function TopSellerProducts() {
   const {state , fetchTopSeller} = useTopSellerContext()
  // const { state, fetchData } = useProductContext();
  const [number, setNumber] = React.useState(2);
  const loadMore = () => {
    setNumber((prevNumber) => {
      return prevNumber + 1;
    });
  };
  React.useEffect(() => {
    fetchTopSeller()
   
  }, []);
  return (
    <div className="col-md-4">
      <div className="single-product-widget">
        <h2 className="product-wid-title">Top seller </h2>
        <button onClick={loadMore} className="wid-view-more">
          View All
        </button>
        <>
          {state.loading && <p>Loading...</p>}
          {state.error && <p>Error: {state.error}</p>}
          {state.data == null  ? (
            <p> no data </p>
          ) : (
            state.data
              .slice(0, number)
              .map((product) => {
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
