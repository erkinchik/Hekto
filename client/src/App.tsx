import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { AppRouter, Header, Auth } from "./components/index";

const App = () => {
  return (
    <Router>
      <Header />
      <AppRouter />
    </Router>
  );
};

export default App;
