import React from "react";

import ProductCard from "./ProductCard";
import { splitRangeIntoIntervals } from "../utils/pagination";
import { useProductContext } from "../store/productContext";

export default function ShopProduct({ marque }) {
  const [products, setProducts] = React.useState({
    name: "",
    items: [],
    id: 0,
  });
  const { state, fetchData } = useProductContext();

  const [pagination, setPagination] = React.useState([[]]);
  const [screen, setScreen] = React.useState([]);
  React.useEffect(() => {
    fetchData()
   
  }, []);
  React.useEffect(() => {
 
    if (state.data && state.data) {
      const filteredData = state.data.filter(
          (item) => item.name.toUpperCase() === marque.toUpperCase()
      );
      setProducts(...filteredData);

      setPagination(splitRangeIntoIntervals(1, 50, 3));
      setScreen(pagination[0]);
  }
 
  }, [marque,state.data]);

  const handleNextPage = () => {
    const index = pagination.findIndex(
      (item) => item[0] === screen[0] && item[1] == screen[1]
    );
    if (index != 2) {
      setScreen(pagination[index + 1]);
     
    }
  };

  const handlePrevPage = () => {
    const index = pagination.findIndex(
      (item) => item[0] === screen[0] && item[1] == screen[1]
    );
    if (index != 0) {
      setScreen(pagination[index - 1]);
     
    }
  };

  return (
    <div>
      <div className="product-big-title-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-bit-title text-center">
                <h2> {marque} </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-product-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            {state.loading && <>fetch data </>}
            {products?.items.length == 0 && <>vide </>}
            {products === undefined && <>fetching data </>}
            {products?.items.slice(screen[0], screen[1]).map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  marque={marque}
                />
              );
            })}
          </div>

          <div className="row">
            <div className="col-md-12">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <button
                      className="page-link"
                      tabIndex="-1"
                      onClick={() => {
                        handlePrevPage();
                      }}
                    >
                      Previous
                    </button>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                     
                    >
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      
                    >
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                     
                    >
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <button
                      className="page-link"
                      onClick={() => {
                        handleNextPage();
                      }}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
