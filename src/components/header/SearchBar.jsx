import { useAllProductContext } from "../../store/AllProducts";
import { useEffect, useState , useContext } from "react";
import { SearchContext } from "../../store/searchContext";
import { useNavigate } from 'react-router-dom';export default function SearchBar() {
  const { state, fetchProducts } = useAllProductContext();
  const [search, setSearch] = useState("");
  const ctx  = useContext(SearchContext)
const navigation = useNavigate()
  useEffect(() => {
    console.log(ctx);
    fetchProducts();
  }, []);
  const handleFetchProducts = () => {
    const items  = state.data.filter((result) =>
      result.name.toLowerCase().includes(search.toLowerCase())
    );
    ctx.updateSearchedData(items)
   
    navigation("/search")


  };
  return (
    <div className="col-sm-4">
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        style={{ marginTop: "50px" }}
        className="input"
        required
        placeholder="search products ..."
      ></input>
      <button
        onClick={handleFetchProducts}
        style={{
          padding: "8px",
          backgroundColor: "#5a88ca",
          borderWidth: "0px",
          color: "white",
        }}
      >
        {" "}
        search{" "}
      </button>
    </div>
  );
}
