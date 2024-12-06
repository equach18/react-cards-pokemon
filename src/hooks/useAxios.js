import { useState } from "react";
import axios from "axios";
import { v1 as uuid } from "uuid";

function useAxios(baseUrl) {
  const [data, setData] = useState([]);
  const addData = async (endpoint = "") => {
    try {
      const res = await axios.get(`${baseUrl}${endpoint}`);
      setData((oldData) => [...oldData, { ...res.data, id: uuid() }]);
    } catch (err) {
      console.error(err);
    }
  };
  const clearData = () => setData([]);
  return [data, addData, clearData];
}

export default useAxios;
