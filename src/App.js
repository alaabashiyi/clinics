import React from "react";
import TopBar from "./components/TopBar";
import Home from "./screens/Home";
import Footer from "./components/Footer";
import GlobalContextProvider from "./context/context";

function App() {
  return (
    <>
      <GlobalContextProvider>
        <TopBar />
        <Home />
        <Footer />
      </GlobalContextProvider>
    </>
  );
}

export default App;
