import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { ADMIN } from "../helpers/consts";
import AboutUs from "../pages/AboutUs";
import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import ModelsPage from "../pages/ModelsPage";

const MainRoutes = () => {
  const { user } = useAuth();
  console.log(user)
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/auth",
      element: <AuthPage/>,
      id:2,
    },
    {
      link: '/about',
      element: <AboutUs/>,
      id: 3,
    },
    {
      link: '/models',
      element: <ModelsPage/>,
      id: 4,
    }
  ];

  const PRIVATE_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
 
  ];
  return (
    <>
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
      {user
        ? PRIVATE_ROUTES.map((item) => (
            <Route
              path={item.link}
              element={
                user.email === ADMIN ? (
                  item.element
                ) : (
                  <Navigate replace to="*" />
                )
              }
              key={item.id}
            />
          ))
        : null}
    </Routes>
  </>
  );
};

export default MainRoutes;
