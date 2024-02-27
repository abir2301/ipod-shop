import useFetchData from "../../hooks/useFetchData";
import SingelProduct from "../SingelProduct";
import React from "react";
import { useProductContext } from "../../store/productContext";

export default function TopSellerProducts() {
  
  const {state} = useProductContext()
  console.log("inside the top seller ")
  console.log(state)
  const [number, setNumber] = React.useState(2)
  const loadMore  =()=>{
    setNumber((prevNumber)=>{
      return (number+1)
    })
  }

  return (
    <div className="col-md-4">
      <div className="single-product-widget">
        <h2 className="product-wid-title">Top seller </h2>
        <button onClick={loadMore} className="wid-view-more">View All</button>
        <>
        {state.loading && <p>Loading...</p>}
        {state.error && <p>Error: {state.error}</p>}
        {state.data['top-sellers-products'].length == 0 ? (
            <p> no data </p>
          ) : (
            state.data['top-sellers-products'].slice(0,number).map((product) => {
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
