import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import Home from "../Pages/Home";
import AllFoodPage from "../Pages/AllFoodPage";
import UserCard from "../Pages/UserCard";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "foods", element: <AllFoodPage /> },
      { path: "card", element: <UserCard /> },
      { path: "myList" },
    ],
  },
]);
export default MainRouter;
