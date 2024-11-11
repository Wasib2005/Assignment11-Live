import { Flowbite, useThemeMode } from "flowbite-react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import { useEffect } from "react";

const MainPage = () => {
  useThemeMode();
  const { mode } = useThemeMode();

  useEffect(() => {
    if (mode === "dark") {
      document.querySelector("body").classList.add("bg-black");
      document.querySelector("body").classList.remove("bg-white");
    } else {
      document.querySelector("body").classList.remove("bg-black");
      document.querySelector("body").classList.add("bg-white");
    }
    console.log(mode === "dark" ? "bg-black" : "");
  }, [mode]);
  return (
    <Flowbite>
      <div className="dark:bg-black">
        <NavBar />
        <Outlet />
      </div>
    </Flowbite>
  );
};

export default MainPage;
