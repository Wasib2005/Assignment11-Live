import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import Home from "../Pages/Home";
import AllFoodPage from "../Pages/AllFoodPage";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "foods", element: <AllFoodPage /> },
      { path: "uploadFoods" },
      { path: "myList" },
    ],
  },
]);
export default MainRouter;
