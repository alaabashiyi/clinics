import { useState, useEffect } from "react";
import { convertData } from "../utils";
import json from "../data/dataToFilter.json";

export const useData = () => {
  const [data, setData] = useState([]);

  const filterData = (search) => {
    setData(() => {
      if (search === "") return [];
      return convertData(json).filter((item) => {
        if (item.listings !== null) {
          let current = item.listings[Object.keys(item.listings)[0]];
          return (
            current.country.toLowerCase().includes(search) ||
            current.city.toLowerCase().includes(search) ||
            current.state.toLowerCase().includes(search)
          );
        }
        return null;
      });
    });
  };

  useEffect(() => {}, [data]);

  return [data, filterData];
};
