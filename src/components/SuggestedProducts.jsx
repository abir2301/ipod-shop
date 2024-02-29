import React from 'react'
import { useProductContext } from '../store/productContext'
import { CartContext } from '../store/Cartcontext';
import { useContext } from 'react';

export default function SuggestedProducts({marque}) {
   
    const { state, fetchData } = useProductContext();
    const cartCtx = useContext(CartContext)
    const [products, setProducts] = React.useState({
        name: "",
        items: [],
        id: 0,
      });
      React.useEffect(() => {
        fetchData()
        const filteredData = state.data["products-lists"].filter(
          (item) => item.name.toUpperCase() === marque.toUpperCase()
        );
      
        setProducts(...filteredData);
       
      }, [marque, products]);
      console.log(Math.floor(Math.random() * products.items.length) + 1)
 
      const ProductComponent = ({product })=>{
        console.log(product)
        return (
            <li className="product">
            <a href="single-product.html">
              <img
                width="325"
                height="325"
                alt="T_4_front"
                className="attachment-shop_catalog wp-post-image"
                src={`/src/assets/img/${product.name.split(' ')[0]}/${product.imageName}`}
              />
              <h3>{product.name}</h3>
              <span className="price">
                <span className="amount">{product.price}€</span>
              </span>
            </a>

            <button
              className="add_to_cart_button"
              data-quantity="1"
              data-product_sku=""
              data-product_id="22"
              rel="nofollow"
            onClick={()=>{cartCtx.addItem(product)}}
            >
              Add to Cart
            </button>
          </li>

        )
      }
  return (
    <div>
        {/* <ProductComponent product={products.items[Math.floor(Math.random() * products.items.length) ]}/>
        <ProductComponent product={products.items[Math.floor(Math.random() * products.items.length)]}/> */}

      

                       
    </div>
  )
}
