import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import Home from "../Pages/Home";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "foods" },
      { path: "uploadFoods" },
      { path: "myList" },
    ],
  },
]);
export default MainRouter;
