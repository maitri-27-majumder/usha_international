import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import Home from "./Pages/Home.jsx";
import AboutUs from "./Pages/Aboutus.jsx";
import SourcingAgentPage from "./Pages/SourcingAgentPage.jsx";
import ProductPage from "./Pages/ProductPage.jsx";
import Team from "./Pages/Team.jsx";
import Contactus from "./Pages/Contactus.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "sourcing-agent",
        element: <SourcingAgentPage />,
      },
      {
        path: "products/:product",
        element: <ProductPage />,
      },
      {
        path: "meet-our-team",
        element: <Team />,
      },
      {
        path: "contact",
        element: <Contactus />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
