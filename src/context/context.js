import React, { createContext, useState } from "react";
import { useData } from "../hooks/useData";
export const globalContext = createContext();

const GlobalContextProvider = (props) => {
  const [data, filterData] = useData();
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const [currentClinic, setCurrentClinic] = useState({
    data: null,
    isLoading: false,
  });

  return (
    <globalContext.Provider
      value={{
        currentClinic,
        setCurrentClinic,
        data,
        filterData,
        search,
        setSearch,
        open,
        setOpen,
      }}
    >
      {props.children}
    </globalContext.Provider>
  );
};

export default GlobalContextProvider;
