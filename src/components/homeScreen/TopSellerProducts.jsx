import useFetchData from "../../hooks/useFetchData";
import SingelProduct from "../SingelProduct";
import React from "react";

export default function TopSellerProducts() {
  const { data } = useFetchData("top-sellers-products", "db.json");
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
          {data.length == 0 ? (
            <p> no data </p>
          ) : (
            data.slice(0,number).map((product) => {
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
