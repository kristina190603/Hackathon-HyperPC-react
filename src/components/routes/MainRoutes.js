import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import Dynamic from "../GamingPcCardHomePage/Dynamic";
import Lumen from "../GamingPcCardHomePage/Lumen";
import NanoX from "../GamingPcCardHomePage/NanoX";
import { ADMIN } from "../helpers/consts";
import AboutUs from "../pages/AboutUs";
import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import CartPage from "../pages/CartPage";
import ContactsPage from "../pages/ContactsPage";
import EditModelPage from "../pages/EditModelPage";
import HomePage from "../pages/HomePage";
import ModelDetailsPage from "../pages/ModelDetailsPage";
import ModelsPage from "../pages/ModelsPage";
import ServiceModal from "../pages/service/ServiceModal";
import ServicesPage from "../pages/ServicesPage";

const MainRoutes = () => {
  const { user } = useAuth();
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/auth",
      element: <AuthPage />,
      id: 2,
    },
    {
      link: "/models",
      element: <ModelsPage />,
      id: 3,
    },
    {
      link: "/about",
      element: <AboutUs />,
      id: 4,
    },
    {
      link: "/models/:id",
      element: <ModelDetailsPage />,
      id: 5,
    },
    {
      link: "/cart",
      element: <CartPage />,
      id: 6,
    },
    {
      link: "/contacts",
      element: <ContactsPage />,
      id: 7,
    },
    {
      link: "/services",
      element: <ServicesPage />,
      id: 8,
    },
    {
      link: "/modal",
      element: <ServiceModal />,
      id: 9,
    },
    {
      link: "/lumen",
      element: <Lumen />,
      id: 10,
    },
    {
      link: "/nanoX",
      element: <NanoX />,
      id: 11,
    },
    {
      link: "/dynamic",
      element: <Dynamic />,
      id: 11,
    },
  ];

  const PRIVATE_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditModelPage />,
      id: 2,
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
