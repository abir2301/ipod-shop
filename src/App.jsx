import "./App.css";
import Home from "./screens/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShopProducts from "./screens/ShopProducts";
import ShopProduct from "./components/ShopProduct";
import Produit from "./screens/Produit";
import { ProductProvider } from "./store/productContext";
import { CartContextProvider } from "./store/Cartcontext";
import Cart from "./screens/Cart";
import { RecentViewProductsRrovider } from "./store/RecentViewProduct";
import Checkout from "./screens/checkout";
import { CategoriesProvider } from "./store/CategoriesContext";
import { TopSellerProvider } from "./store/TopSellerProductsContext";
import { TopNewProvider } from "./store/topNewProductsContext";
import { OrderContextProvider } from "./store/OderContext";
import ErrorScreen from "./screens/NotFoundScreen";
import { AllProductProvider } from "./store/AllProducts";
import { SearchContextProvider } from "./store/searchContext";
import Search from "./screens/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <ShopProducts />,
    children: [
      {
        path: "/shop/lg",
        element: <ShopProduct marque={"LG"} />,
      },
      {
        path: "/shop/samsung",
        element: <ShopProduct marque={"SAMSUNG"} />,
      },
      {
        path: "/shop/apple",
        element: <ShopProduct marque={"APPLE"} />,
      },
      {
        path: "/shop/sony",
        element: <ShopProduct marque={"SONY"} />,
      },
      {
        path: "/shop/huawei",
        element: <ShopProduct marque={"HUAWEI"} />,
      },
    ],
  },
  {
    path: "/product/:marque/:id",
    element: <Produit />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/*",
    element: <ErrorScreen />,
  },
 
]);
function App() {
  return (
    <AllProductProvider>
    <ProductProvider>
      <SearchContextProvider>
      <CategoriesProvider>
        <TopSellerProvider>
          <TopNewProvider>
            <RecentViewProductsRrovider>
              <CartContextProvider>
                <OrderContextProvider>
                <RouterProvider router={router} />
                </OrderContextProvider>
              </CartContextProvider>
            </RecentViewProductsRrovider>
          </TopNewProvider>
        </TopSellerProvider>
      </CategoriesProvider>
      </SearchContextProvider>
    </ProductProvider>
    </AllProductProvider>
  );
}

export default App;
