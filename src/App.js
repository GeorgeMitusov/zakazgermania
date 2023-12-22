import React, { useContext, useEffect } from "react";
import { Context } from "./context/Context";
import { BrowserRouter as Router } from "react-router-dom";

import AnimatedRoutes from "./components/AnimatedRoutes";
import Loader from "./components/Loader";

import "./styles/App.scss";

function App() {
  const { loading, setLoading } = useContext(Context);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2200);
  }, []);

  return (
    <div className="App">
      <Router>{loading ? <Loader /> : <AnimatedRoutes />}</Router>
    </div>
  );
}

export default App;
