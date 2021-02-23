import React from "react";
import TopBar from "./components/TopBar";
import Home from "./screens/Home";
import Footer from "./components/Footer";

import { useData } from "./hooks/useData";

function App() {
  const [data, filterData] = useData();
  return (
    <>
      <TopBar />
      <Home data={data} filterData={filterData} />
      <Footer />
    </>
  );
}

export default App;
