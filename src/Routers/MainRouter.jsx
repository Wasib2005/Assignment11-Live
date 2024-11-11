import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [{path:"allFoods"}, {path:"uploadFoods"}],
  },
]);
export default MainRouter;
