import React from "react";
import AuthContextProvider from "./components/contexts/authContext";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./components/routes/MainRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <AuthContextProvider>
      <Navbar />
      <MainRoutes />
    </AuthContextProvider>
  );
};

export default App;
