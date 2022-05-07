import React, { useEffect, useState } from "react";

import { AppRouter, Header, Footer } from "./components/index";
import { check } from "./API/userApi";
import Spinner from "./components/common/Spinner/Spinner";

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    check()
      .then((data) => {})
      .finally(() => setLoading(false));
  }, []);
  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
};

export default App;
