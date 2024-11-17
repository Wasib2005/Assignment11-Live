import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import Home from "../Pages/Home";
import AllFoodPage from "../Pages/AllFoodPage";
import UserCardList from "../Pages/UserCardList";
import UserLog from "../Pages/UserLog";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "foods", element: <AllFoodPage /> },
      { path: "card", element: <UserCardList /> },
      { path: "myList" },
      { path: "/sing-in-sing-up", element: <UserLog /> },
    ],
  },
]);
export default MainRouter;
