import {
  Avatar,
  Button,
  DarkThemeToggle,
  Dropdown,
  Navbar,
} from "flowbite-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
const NavBar = () => {
  const user = true;
  const navigate = useNavigate();

  return (
    <div className="shadow-lg light:shadow-slate-500 dark:shadow-slate-900 fixed w-full">
      <Navbar fluid rounded>
        <Navbar>
          <Link className="flex items-center justify-center">
            <img
              src="/vite.svg"
              className="mr-3 rounded-lg h-6 sm:h-9"
              alt="Flowbite React Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Foody
            </span>
          </Link>
        </Navbar>
        {user ? (
          <div className="flex gap-2 items-center md:order-2 md:">
            <DarkThemeToggle/>
            <div className="hidden md:flex">
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    alt="User settings"
                    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    rounded
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">Bonnie Green</span>
                  <span className="block truncate text-sm font-medium">
                    name@flowbite.com
                  </span>
                </Dropdown.Header>
                <Dropdown.Item>
                  <Link to={"/"} className="">
                    Profile
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Sign out</Dropdown.Item>
              </Dropdown>
            </div>
            <Navbar.Toggle />
          </div>
        ) : (
          <div className="flex md:order-2">
            <Button color="blue">Login</Button>
            <Navbar.Toggle />
          </div>
        )}
        <Navbar.Collapse
          theme={{ list: "md:flex md:gap-2 md:text-center dark:text-white" }}
        >
          <li className="w-full flex">
            <NavLink
              to={"/"}
              // className={`dark:text-white`}
              className={({ isActive }) =>
                isActive
                  ? " w-full md:w-full p-1 md:p-3 md:rounded-lg md:border-2 md:border-blue-700 bg-blue-700 md:bg-white dark:md:bg-[#1f2937] "
                  : " w-full md:w-full p-1 md:p-3 md:rounded-lg  hover:bg-blue-400"
              }
            >
              Home
            </NavLink>
          </li>
          <hr className="border-slate-600" />
          <li className="flex">
            <NavLink
              to={"/allFoods"}
              // className={`dark:text-white`}
              className={({ isActive }) =>
                isActive
                  ? " w-full md:w-[100px] p-1 md:p-3 md:rounded-lg md:border-2 md:border-blue-700 bg-blue-700 md:bg-white dark:md:bg-[#1f2937]"
                  : " w-full md:w-[100px] p-1 md:p-3 md:rounded-lg  hover:bg-blue-400 "
              }
            >
              Find Food
            </NavLink>
          </li>
          <hr className="border-slate-600" />
          <li className="w-full md:w-full flex">
            <NavLink
              to={"/uploadFoods"}
              // className={`dark:text-white`}
              className={({ isActive }) =>
                isActive
                  ? " w-full md:w-[120px] p-1 md:p-3 md:rounded-lg md:border-2 md:border-blue-700 bg-blue-700 md:bg-white dark:md:bg-[#1f2937]"
                  : " w-full md:w-[120px] p-1 md:p-3 md:rounded-lg  hover:bg-blue-400"
              }
            >
              Upload Food
            </NavLink>
          </li>
          <div className="grid gap-1">
            <hr className="border-slate-600" />
            <hr className="border-slate-600" />
          </div>
          <li className="w-full md:w-full flex">
            <NavLink
              to={"/uploadFoods"}
              // className={`dark:text-white`}
              className={({ isActive }) =>
                isActive
                  ? " w-full p-1 md:p-3 md:hidden bg-blue-700"
                  : " w-full p-1 md:p-3 md:hidden hover:bg-blue-400"
              }
            >
              Profile
            </NavLink>
          </li>
          <hr className="border-slate-600" />
          <div className="flex justify-center md:hidden mt-3">
            <DarkThemeToggle />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
