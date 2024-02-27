// eslint-disable-next-line no-undef
import { useEffect, useState } from "react";

export default function useFetchData(dataType, file) {
  const [isFetching, setIsFetching] = useState("abir");
  const [data, setData] = useState([]);
  useEffect( () => {
   
    async function fetchData() {
      setIsFetching(true);
      try{
        await fetch(`../../data/${file}`)
        .then((response) => response.json())
        .then((data) => {
         
          setData(data[dataType]);
        });
      }catch  (error) {
        console.error(error.message || "fail to fetch data .");
      }
      setIsFetching(false )
    }
     fetchData()
     console.log(isFetching)
  }, [dataType, file]);
  return {
    data,
    isFetching
  };
}
