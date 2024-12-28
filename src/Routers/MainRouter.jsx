import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import Home from "../Pages/Home";
import AllFoodPage from "../Pages/AllFoodPage";
import UserCardList from "../Pages/UserCardList";
import UserLog from "../Pages/UserLog";
import UploadFoods from "../Pages/UploadFoods";
import FoodDetails from "../Pages/FoodDetails";
import UserOrders from "../Pages/UserOrders";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "foods", element: <AllFoodPage /> },
      { path: "card", element: <UserCardList /> },
      { path: "upload-foods", element: <UploadFoods /> },
      { path: "myList" },
      { path: "sing-in-sing-up", element: <UserLog /> },
      { path: "details/:foodId", element: <FoodDetails /> },
      { path: "/order", element: <UserOrders /> },
    ],
  },
]);
export default MainRouter;
