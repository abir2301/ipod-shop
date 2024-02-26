import useFetchData from '../../hooks/useFetchData'
import SingelProduct from '../SingelProduct'

export default function TopSellerProducts() {
    const {isFetching, data} = useFetchData('top-sellers-products')
   
 
    {if (isFetching) 
        return (<p>
            fetching data ....
        </p>)}
  return (
   
        <div className="col-md-4">
            <div className="single-product-widget">
              <h2 className="product-wid-title">Top seller </h2>
              <a href="#" class="wid-view-more">View All</a>
              <>
              {data.length ==0 ? 
        <p> no data </p> :
        data.map((product)=>{
            return (
             <div  key={product.id}>
              <SingelProduct product={product}/>
             </div>
                
            )
        })}
       </>
      
      
   
    </div>
    </div>
   
   

  )
}
