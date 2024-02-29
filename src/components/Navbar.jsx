import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useCategoriesContext } from "../store/CategoriesContext";
export default function Navbar() {
  const {  state, fetchCategories  } = useCategoriesContext();
useEffect(()=>{
  fetchCategories()
}, [])
  return (
    <div className="mainmenu-area">
      <div className="container">
        <div className="row">
          <div className="navbar">
            <ul className="nav navbar-nav navbar-expand">
            
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              {state.data.map(category => (
                <li key={category.id}>
                  <Link to={`/shop/${category.name.toLowerCase()}`}>{category.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
