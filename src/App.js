import React from "react";
import AuthContextProvider from "./components/contexts/authContext";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./components/routes/MainRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import ModelsContextProvider from "./components/contexts/modelsContext";
import CartContextProvider from "./components/contexts/cartContext";
const App = () => {
  return (
    <AuthContextProvider>
      <ModelsContextProvider>
        <CartContextProvider>
          <Navbar />
          <MainRoutes />
        </CartContextProvider>
      </ModelsContextProvider>
    </AuthContextProvider>
  );
};

export default App;
