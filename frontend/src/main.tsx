import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import Websites from "./pages/Websites";
import Settings from "./pages/Settings";
import "./index.css";

// PrimeReact
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
// Quill editor styles required by PrimeReact Editor
import "quill/dist/quill.snow.css";
import { PrimeReactProvider } from "primereact/api";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "websites", element: <Websites /> },
      { path: "settings", element: <Settings /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <PrimeReactProvider>
    <RouterProvider router={router} />
  </PrimeReactProvider>,
);
