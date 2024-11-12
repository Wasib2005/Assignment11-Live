import { Flowbite, useThemeMode } from "flowbite-react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import { useEffect } from "react";
import FooterComponents from "../Components/FooterComponents";

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
  }, [mode]);

  return (
    <Flowbite>
      <div className="dark:bg-gray-900 dark:text-white">
        <NavBar />
        <div className="min-h-[calc(100vh-249px)] ">
          <main className="lg:max-w-screen-xl md:max-w-[800px] m-auto">
            <Outlet />
          </main>
        </div>
        <FooterComponents />
      </div>
    </Flowbite>
  );
};

export default MainPage;
