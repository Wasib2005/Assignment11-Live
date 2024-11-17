import { useState } from "react";
import PropTypes from "prop-types";
import { RiEyeCloseLine } from "react-icons/ri";
import AuthProviderComponent from "../AuthProviderComponent";
import { FaRegEye } from "react-icons/fa";
import EmailAuth from "../../../Utilities/LogInOut/EmailAuth";

const SingInForSingIn = ({ singInSingUpHandle, singIn }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    const tempShowPassword = !showPassword;
    setShowPassword(tempShowPassword);
    if (tempShowPassword) {
      document.getElementById("password").type = Text;
    } else {
      document.getElementById("password").type = "Password";
    }
  };

  const handleSingIn = (e) => {
    e.preventDefault();
    const usrForm = e.target;
    const userEmail = usrForm.email.value;
    const userPassword = usrForm.password.value;
    console.log(userPassword, userEmail);
    EmailAuth(singIn, userEmail, userPassword);
  };

  return (
    <>
      <div className=" grid gap-6 p-[50px] lg:p-[100px] w-full lg:w-1/2 animate-fade">
        <h1 className="text-6xl font-extrabold">Sing In</h1>
        <AuthProviderComponent />
        <p>or use your account</p>
        <form
          onSubmit={handleSingIn}
          className="flex flex-col w-96 gap-3 m-auto"
        >
          <input
            placeholder="Enter Email"
            type="email"
            name="email"
            className="p-3 bg-slate-300  focus:outline-none focus:outline-blue-600"
            required
          />
          <div className="flex relative">
            <input
              id="password"
              placeholder="Enter The Password"
              type="password"
              name="password"
              className="p-3 bg-slate-300 w-full  focus:outline-none focus:outline-blue-600"
              required
            />
            <div
              onClick={handleShowPassword}
              className="absolute top-[10px] right-3 hover:bg-slate-100 rounded-full"
            >
              {showPassword ? (
                <RiEyeCloseLine size={25} />
              ) : (
                <FaRegEye size={25} />
              )}
            </div>
          </div>
          <p className=" hover:text-red-500 hover:underline underline-offset-8 ">
            Forgot your password?
          </p>
          <div>
            <button
              type="submit"
              className="btn py-2 bg-blue-500 text-white rounded-3xl w-1/3 text-lg font-bold hover:opacity-50"
            >
              Sing In
            </button>
          </div>
        </form>
        <p className="m-auto w-[70%]">
          Or, If you already sing up then you can login by using your old
          password. <span className="font-bold">Click Bellow!!!</span>
        </p>
        <button
          onClick={singInSingUpHandle}
          className=" m-auto btn btn-outline rounded-3xl w-1/3 text-blue-600 font-bold lg:hidden"
        >
          Sing In
        </button>
      </div>
    </>
  );
};
SingInForSingIn.propTypes = {
  singInSingUpHandle: PropTypes.func.isRequired,
  singIn: PropTypes.bool.isRequired,
};

export default SingInForSingIn;
