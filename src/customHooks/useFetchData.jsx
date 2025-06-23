import { useState, useEffect } from "react";
export function useFetchData(path) {
  const [data, setData] = useState([]);
  useEffect(function () {
    async function fetchData() {
      const res = await fetch(path);
      const data = await res.json();
      setData([...data]);
    }
    fetchData();
  }, []);
  return data;
}
