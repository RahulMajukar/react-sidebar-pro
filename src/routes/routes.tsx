import { createBrowserRouter } from "react-router-dom";
import DynamicSideBar from "../components/DynamicSideBar";

const APP_ROUTES = createBrowserRouter([
    {
      element: <DynamicSideBar />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "reports",
          element: <Reports />,
        },
      ],
    },
  ]);

export default APP_ROUTES
  
  function Home() {
    return (
      <div>
        <h1>Home component code</h1>
      </div>
    )
  }
  function Products() {
    return (
      <div>
        <h1>Products</h1>
      </div>
    )
  }
  function Reports() {
    return (
      <div>
        <h1>Reports</h1>
      </div>
    )
  }
  
