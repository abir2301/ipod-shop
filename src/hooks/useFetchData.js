// eslint-disable-next-line no-undef
import { useEffect, useState } from "react";

export default function useFetchData(dataType, file) {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setIsFetching(true);
    async function fetchData() {
      await fetch(`../../data/${file}`)
        .then((response) => response.json())
        .then((data) => {
          setIsFetching(false);
          setData(data[dataType]);
        });
    }
    fetchData();
  }, [dataType, file]);
  return {
    data,
  };
}
