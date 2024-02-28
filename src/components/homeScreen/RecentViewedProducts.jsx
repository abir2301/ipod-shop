import React , {useContext} from "react";
import useFetchData from "../../hooks/useFetchData";
import SingelProduct from "../SingelProduct";
import { useProductContext } from "../../store/productContext";
import { RecentViewProductsContext } from "../../store/RecentViewProduct";


export default function RecentViewedProducts({styling  = false }) {
 const   context = useContext(RecentViewProductsContext)
 const [number, setNumber] = React.useState(2);
 const loadMore = () => {
   setNumber((prevNumber) => {
     return number + 1;
   });
 };
React.useEffect(()=>{
context.getRecentViewProducts()

}, [])

  
  return (
    <div className="col-md-4">
      <div className="single-product-widget">
        {styling ? <h2 className="sidebar-title">Recently Viewed</h2> : <h2 className="product-wid-title" >Recently viewed </h2> }
       
        {!styling && <button onClick={loadMore} className="wid-view-more">
          View All
        </button>}
        
        <>
        {/* {state.loading && <p>Loading...</p>}
        {state.error && <p>Error: {state.error}</p>} */}
          {context.items.length == 0 ? (
            <p> No Data Yet </p>
          ) : (
            context.items.slice(0,number).map((product) => {
           
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
