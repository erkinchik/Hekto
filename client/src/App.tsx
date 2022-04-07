import React from "react";

import { AppRouter, Header, Auth, Footer } from "./components/index";

const App = () => {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
};

export default App;
