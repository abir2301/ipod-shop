import React , {Fragment, useContext} from 'react'
import { SearchContext } from '../store/searchContext'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import ProductCard from "../components/ProductCard";
import { splitRangeIntoIntervals } from '../utils/pagination';

export default function Search() {
    const [pagination, setPagination] = React.useState([[]]);
    const [screen, setScreen] = React.useState([]);
    const ctx = useContext(SearchContext)
    React.useEffect(()=>{
        setPagination(splitRangeIntoIntervals(1, ctx.data.length, 3));
        setScreen(pagination[0]);
        
    }, [])
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
    <Fragment>
      <Header></Header>
      <div className="single-product-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
          
            {ctx?.data.length == 0 && <>vide </>}
            {ctx?.data === undefined && <>fetching data </>}
            {ctx?.data.slice(screen[0], screen[1]).map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  marque={product.name.split(' ')[0]}
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
      <Footer/>
    </Fragment>
  )
}
